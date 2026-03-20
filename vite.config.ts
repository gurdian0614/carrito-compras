import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    environment: 'jsdom', //Simula el navegador
    globals: true, //Permite usar funciones globales como describe, it, expect sin importarlas
    setupFiles: './setupTests.ts', //Archivo de configuración para pruebas, donde se pueden configurar cosas como el entorno de pruebas, mocks, etc.
    reporters: 'verbose', //Muestra información detallada sobre cada prueba que se ejecuta, incluyendo el nombre de la prueba, el resultado (pasó o falló) y cualquier mensaje de error asociado.
    coverage: {
      provider: 'v8', //Utiliza el proveedor de cobertura de código integrado en Vitest, que se basa en la biblioteca de instrumentación de código V8.
      reporter: ['text', 'html'], //Genera informes de cobertura en formato de texto y HTML. El informe de texto se muestra en la consola, mientras que el informe HTML se guarda en un archivo que se puede abrir en un navegador para una visualización más detallada.
    }
  }
})
