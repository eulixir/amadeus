import { cleanText } from '../helpers/helper'

const sourceLang = 'en'
const targetLang = 'ja'

const baseUrl = "https://translate.googleapis.com/translate_a/single"

async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url)
    return response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

function extractTranslations(data: any): string {
  return data[0].map((x: Array<string>) => x[0]).join('')
}

export async function translateText(text: string) {
  const cleanedText = cleanText(text)

  const url = `${baseUrl}?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURI(
    cleanedText
  )}`

  try {
    const data = await fetchData(url)
    const translations = extractTranslations(data)

    return translations
  } catch (error) {
    console.error(error)
  }
}
