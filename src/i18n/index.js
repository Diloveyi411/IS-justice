import sk from './sk'
import en from './en'
import de from './de'

// Each language has its own HTML entry (index.html, en/index.html, de/index.html) that sets <html lang>.
// The build-time prerender (scripts/prerender.js) has no document and passes the language in PRERENDER_LANG.
const dictionaries = { sk, en, de }
const requested = import.meta.env.SSR ? globalThis.process.env.PRERENDER_LANG : document.documentElement.lang

export const lang = dictionaries[requested] ? requested : 'sk'
export const t = dictionaries[lang]
