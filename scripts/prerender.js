// Writes the rendered page into each language's HTML (dist/index.html,
// dist/en/index.html, dist/de/index.html) so search engines and link previews
// see the content without running JavaScript. The browser then hydrates it
// (src/main.jsx).
import { readFile, writeFile, rm } from 'node:fs/promises'
import process from 'node:process'

const dist = new URL('../dist/', import.meta.url)
const serverDir = new URL('server/', dist)
const pages = [
  ['index.html', 'sk'],
  ['en/index.html', 'en'],
  ['de/index.html', 'de'],
]
const placeholder = '<div id="root"></div>'

for (const [page, lang] of pages) {
  // The language is fixed when the bundle loads (src/i18n), so load a fresh copy per language
  process.env.PRERENDER_LANG = lang
  const { render } = await import(`${new URL('entry-server.js', serverDir).href}?lang=${lang}`)

  const file = new URL(page, dist)
  const html = await readFile(file, 'utf8')
  if (!html.includes(placeholder)) throw new Error(`${placeholder} not found in dist/${page}`)
  await writeFile(file, html.replace(placeholder, `<div id="root">${render()}</div>`))
  console.log(`Prerendered dist/${page}`)
}

await rm(serverDir, { recursive: true })
