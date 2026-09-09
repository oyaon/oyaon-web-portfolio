import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { existsSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000
const DIST = join(__dirname, '../dist')

if (!existsSync(DIST)) {
  console.warn('\n⚠  dist/ not found. Run `npm run build` first, then `npm start`.\n')
}

// Serve static assets
app.use(express.static(DIST))

// SPA fallback — all routes serve index.html
app.get('*', (_req, res) => {
  res.sendFile(join(DIST, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`\n🚀  Portfolio running at http://localhost:${PORT}\n`)
})
