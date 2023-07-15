import { translateText } from './translateText'

const modelUrl = process.env.REACT_APP_MODEL_URL || ''
const token = process.env.REACT_APP_TOKEN || ''

export async function playAudio(text: String) {
  const cleanedText = text.replace(/```[^]+?```/g, '').trim()

  if (cleanedText === '') {
    console.log('Skipped: Only code snippet detected')
    return
  }

  let isError = true
  while (isError) {
    try {
      const translation = await translateText(cleanedText)
      const payload = { inputs: translation }
      const response = await fetch(modelUrl, {
        headers: {
          Authorization: token,
        },
        method: 'POST',
        body: JSON.stringify(payload),
      })

      const blob = await response.blob()
      const audioUrl = URL.createObjectURL(blob)
      const audio = new Audio(audioUrl)

      audio.play()

      isError = false
    } catch (error) {
      console.error(error)
    }
  }
}
