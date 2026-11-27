-- Gestão financeira e CRUD administrativo do Verão Premiado 2027.

alter table public.verao_premiado_submissions
  add column if not exists payment_due_date_1 date,
  add column if not exists payment_due_date_2 date,
  add column if not exists payment_installment_1_status text not null default 'pendente',
  add column if not exists payment_installment_2_status text not null default 'pendente',
  add column if not exists payment_reminder_sent_at timestamptz,
  add column if not exists payment_reminder_count integer not null default 0;

alter table public.verao_premiado_submissions
  drop constraint if exists verao_premiado_installment_1_status_check,
  drop constraint if exists verao_premiado_installment_2_status_check,
  add constraint verao_premiado_installment_1_status_check
    check (payment_installment_1_status in ('pendente', 'pago', 'atrasado', 'dispensado')),
  add constraint verao_premiado_installment_2_status_check
    check (payment_installment_2_status in ('pendente', 'pago', 'atrasado', 'dispensado')),
  drop constraint if exists verao_premiado_reminder_count_check,
  add constraint verao_premiado_reminder_count_check
    check (payment_reminder_count >= 0);

update public.verao_premiado_submissions
set payment_installment_2_status = 'dispensado'
where payment_option = 'avista';

grant delete on public.verao_premiado_submissions to authenticated;

drop policy if exists "admins_delete_verao_submissions" on public.verao_premiado_submissions;
create policy "admins_delete_verao_submissions" on public.verao_premiado_submissions
  for delete to authenticated
  using (public.is_vm_admin());

notify pgrst, 'reload schema';
