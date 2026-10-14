import sk from './sk'
import en from './en'
import de from './de'

// Each language has its own HTML entry (index.html, en/index.html, de/index.html) that sets <html lang>.
const dictionaries = { sk, en, de }

export const lang = dictionaries[document.documentElement.lang] ? document.documentElement.lang : 'sk'
export const t = dictionaries[lang]
