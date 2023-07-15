export async function translateText(text) {
  const sourceLang = 'en'
  const targetLang = 'ja'
  const cleanedText = text.replace(/'''[\w\s]+'''/g, '')

  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURI(
    cleanedText
  )}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    const translations = data[0].map((x) => x[0]).join('')
    return translations
  } catch (error) {
    console.error(error)
  }
}
