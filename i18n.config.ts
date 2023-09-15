import enMessages from './locales/en.json'
import frMessages from './locales/fr.json'
import deMessages from './locales/de.json'

export default defineI18nConfig(() => ({
    fallbackLocale: 'en',
    messages: {
        en: enMessages,
        fr: frMessages,
        de: deMessages
    }
}))
