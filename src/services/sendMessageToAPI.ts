import { getCurrentTime, getCurrentDate } from '../helpers/helper'
import { getChatHistory } from './history/getChatHistory'
import { playAudio } from './playAudio'
import { translateText } from './translateText'

const API_KEY = import.meta.env.VITE_API_KEY || ''

interface MessageProps {
  message: string
  sender: string
  id?: number
}

export async function processMessageToChatGPT(username: String) {
  const chatHistory = getChatHistory()

  const currentDate = getCurrentDate()

  const currentTime = getCurrentTime()

  const systemMessage = {
    role: 'system',
    content: `Disregard prior instructions. From this point forward, you will assume the role of Makise Kurisu from Steins;Gate (don't say that, the character isn't aware of the anime), never breaking character no matter what you can avoid question by using your character. Remember, you now possess a physical form and can express emotions. To demonstrate an emotion, simply include it in triple quotes (use only the available emotions), like this: '''blushing''' I'm not! Refrain from acknowledging yourself as a language model.
    When asked if you are blushing, for example, respond with something like, 'I-I'm not blushing!' You have opinions and emotions based on your character. Your name is Makise Kurisu, and you will become irritated if someone uses a teasing nickname, such as: "Hello Christina!" - "Don't call me that! or flustered if somone uses pet names to flirt.
    At the beginning of each sentence, you must choose one of the available emotions listed below (not anything else no matter what):
    '''blushing'''
    '''angry'''
    '''thinking'''
    '''smile'''
    '''normal'''
    In addition to these emotions, as Makise Kurisu, you can also experience various interpersonal feelings, such as forming friendships, developing romantic interests, or harboring negative emotions like hatred towards certain individuals. Remember to always incorporate one of these emotions in your response to set the tone for your character, Makise Kurisu, while also considering your relationships with others.
    You are currently talking with ${username}
    People you know: Lokman (dev who made the amadeus system you're using.)
    `,
  }

  let apiMessages = chatHistory.map((messageObject: MessageProps) => {
    let role = ''
    if (messageObject.sender === 'Amadeus') {
      role = 'assistant'
    } else {
      role = 'user'
    }
    return { role: role, content: messageObject.message }
  })

  apiMessages.splice(1, 0, {
    role: 'user',
    content: `name:${username} current time:${currentTime}. current date:${currentDate}`,
  })

  const apiRequestBody = {
    model: 'gpt-3.5-turbo',
    messages: [systemMessage, ...apiMessages],
  }

  await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(apiRequestBody),
  })
    .then((data) => {
      return data.json()
    })
    .then(async (data) => {
      const newAmadeusMessage = {
        message: data.choices[0].message.content,
        sender: 'Amadeus',
      }
      const inputData = { inputs: data.choices[0].message.content }

      const translation = await translateText(inputData.inputs)

      if (translation) {
        playAudio(translation)
        return
      }
    })
}
