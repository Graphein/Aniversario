import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Aniversario/', // Certifique-se de que isso corresponde ao nome do seu repositório
  plugins: [react()]
});