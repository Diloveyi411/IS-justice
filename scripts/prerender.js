// Writes the rendered page into dist/index.html so search engines and link
// previews see the content without running JavaScript. The browser then
// hydrates it (src/main.jsx).
import { readFile, writeFile, rm } from 'node:fs/promises'

const dist = new URL('../dist/', import.meta.url)
const serverDir = new URL('server/', dist)
const { render } = await import(new URL('entry-server.js', serverDir))

const file = new URL('index.html', dist)
const html = await readFile(file, 'utf8')
const placeholder = '<div id="root"></div>'
if (!html.includes(placeholder)) throw new Error(`${placeholder} not found in dist/index.html`)

await writeFile(file, html.replace(placeholder, `<div id="root">${render()}</div>`))
await rm(serverDir, { recursive: true })
console.log('Prerendered dist/index.html')
