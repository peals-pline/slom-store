import path from "path"
import { fileURLToPath } from "node:url"
import react from "@vitejs/plugin-react"
import { defineConfig, type PluginOption } from "vite"

const srcDir = fileURLToPath(new URL('./src', import.meta.url))

// Дев-плагин подсветки компонентов ставится только локально (devDependencies).
// На хостинге его может не быть — тогда просто собираем без него.
async function loadInspectPlugin(): Promise<PluginOption[]> {
  // Спецификатор в переменной — чтобы отсутствие пакета не ломало ни tsc, ни сборку.
  const spec = 'kimi-plugin-inspect-react'
  try {
    const mod: { inspectAttr: () => PluginOption } = await import(/* @vite-ignore */ spec)
    return [mod.inspectAttr()]
  } catch {
    return []
  }
}

// https://vite.dev/config/
export default defineConfig(async ({ command }) => ({
  base: './',
  plugins: [...(command === 'serve' ? await loadInspectPlugin() : []), react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(srcDir),
    },
  },
}));
