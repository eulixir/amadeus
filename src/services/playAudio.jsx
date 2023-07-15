import { translateText } from './translateText'

const modelUrl = process.env.REACT_APP_MODEL_URL

export async function playAudio(text) {
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
          Authorization: 'Bearer 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',
        },
        method: 'POST',
        body: JSON.stringify(payload),
      })
      console.log('Translation: ' + translation)
      const blob = await response.blob()
      const audioUrl = URL.createObjectURL(blob)
      const audio = new Audio(audioUrl)
      audio.play()
      console.log('play: Audio')
      isError = false
    } catch (error) {
      console.error(error)
    }
  }
}
