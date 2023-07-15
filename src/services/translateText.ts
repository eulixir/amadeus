export async function translateText(text: String) {
  const sourceLang = 'en'
  const targetLang = 'ja'
  const cleanedText = text.replace(/'''[\w\s]+'''/g, '')
  const baseUrl = 'https://translate.googleapis.com/translate_a/single'

  const url = `${baseUrl}?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURI(
    cleanedText
  )}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    const translations = data[0].map((x: Array<String>) => x[0]).join('')
    return translations
  } catch (error) {
    console.error(error)
  }
}
