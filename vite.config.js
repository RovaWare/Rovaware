import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services/index.html'),
        aboutCompany: resolve(__dirname, 'about/company/index.html'),
        careers: resolve(__dirname, 'careers/index.html'),
        career: resolve(__dirname, 'career/index.html'),
        process: resolve(__dirname, 'process/index.html'),
        aboutContact: resolve(__dirname, 'about/contact/index.html'),
        aboutBookProject: resolve(__dirname, 'about/book-project/index.html'),
        serviceWebDev: resolve(__dirname, 'services/web-development/index.html'),
        serviceChatbot: resolve(__dirname, 'services/chatbot-integration/index.html'),
        serviceSaas: resolve(__dirname, 'services/saas-scaling/index.html'),
        serviceAndroid: resolve(__dirname, 'services/android-development/index.html'),
        serviceUiUx: resolve(__dirname, 'services/ui-ux-design/index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        adminJobs: resolve(__dirname, 'admin/jobs/index.html')
      }
    }
  }
});
