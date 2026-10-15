param(
  [string]$TaskName = "VM Midias - Instagram Stories"
)

$ErrorActionPreference = "Stop"
$AutomationDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path
$NodeExecutable = (Get-Command node -ErrorAction Stop).Source
$ScriptPath = Join-Path $AutomationDirectory "src\index.js"

if (-not (Test-Path (Join-Path $AutomationDirectory ".env"))) {
  throw "Crie e configure automation\instagram-stories\.env antes de instalar a tarefa."
}

$Action = New-ScheduledTaskAction -Execute $NodeExecutable -Argument ('"{0}" --once' -f $ScriptPath) -WorkingDirectory $AutomationDirectory
$Trigger = New-ScheduledTaskTrigger -Once -At (Get-Date).AddMinutes(1) -RepetitionInterval (New-TimeSpan -Minutes 10) -RepetitionDuration (New-TimeSpan -Days 3650)
$Settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -MultipleInstances IgnoreNew -ExecutionTimeLimit (New-TimeSpan -Minutes 8)

Register-ScheduledTask -TaskName $TaskName -Action $Action -Trigger $Trigger -Settings $Settings -Description "Captura notícias da VM e publica Stories inéditos da Rádio Braba." -Force | Out-Null
Write-Host "Tarefa '$TaskName' instalada. A primeira execução ocorrerá em aproximadamente um minuto."
