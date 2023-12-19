import { cleanText } from '../helpers/helper'
import { translateText } from './translateText'

const modelUrl = 'https://api.openai.com/v1/chat/completions'
const token = import.meta.env.VITE_TOKEN

export async function playAudio(text: string) {
  const cleanedText = cleanText(text)

  const translation = await translateText(cleanedText)

  const response = await fetch(modelUrl, {
    headers: {
      Authorization: token,
    },
    method: 'POST',
    body: JSON.stringify({ inputs: translation }),
  })

  const blob = await response.blob()
  const audioUrl = URL.createObjectURL(blob)
  const audio = new Audio(audioUrl)

  audio.play()
}
