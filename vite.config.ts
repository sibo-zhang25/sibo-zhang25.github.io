import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { siteContent } from './src/content.ts'

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!)
}

export default defineConfig({
  plugins: [react(), {
    name: 'portfolio-metadata',
    transformIndexHtml: {
      order: 'pre',
      handler: html => html
        .replace('%PORTFOLIO_TITLE%', () => escapeHtml(siteContent.metadata.title))
        .replace('%PORTFOLIO_DESCRIPTION%', () => escapeHtml(siteContent.metadata.description)),
    },
  }],
})
