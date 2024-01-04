import { defineConfig } from 'vite'
import ReactRefreshPlugin from '@vitejs/plugin-react-refresh';
import dotenv from 'dotenv'
import * as path from 'path'

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ReactRefreshPlugin()],
  server: {
    port: Number(process.env.PORT)
  },
  define: {
    'process.env.PORT': `${process.env.PORT}`
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
})
