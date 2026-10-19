import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';

function vmPublicConfigPlugin(
  supabaseUrl = '',
  supabasePublishableKey = '',
): Plugin {
  const source = `window.VM_PUBLIC_CONFIG=Object.freeze(${JSON.stringify({
    supabaseUrl,
    supabasePublishableKey,
  })});`;

  return {
    name: 'vm-public-runtime-config',
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        if (request.url?.split('?')[0] !== '/vm-public-config.js') {
          next();
          return;
        }
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/javascript; charset=utf-8');
        response.setHeader('Cache-Control', 'no-store');
        response.end(source);
      });
    },
    generateBundle() {
      this.emitFile({type: 'asset', fileName: 'vm-public-config.js', source});
    },
  };
}

export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const supabaseUrl = process.env.VITE_SUPABASE_URL || env.VITE_SUPABASE_URL;
  const supabasePublishableKey =
    process.env.VITE_SUPABASE_PUBLISHABLE_KEY || env.VITE_SUPABASE_PUBLISHABLE_KEY;

  if (
    command === 'build' &&
    (!supabaseUrl?.trim() || !supabasePublishableKey?.trim())
  ) {
    throw new Error(
      'Build cancelado: configure VITE_SUPABASE_URL e VITE_SUPABASE_PUBLISHABLE_KEY.',
    );
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
      vmPublicConfigPlugin(supabaseUrl, supabasePublishableKey),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
