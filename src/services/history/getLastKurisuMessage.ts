import { getChatHistory } from './getChatHistory'

interface MessageProps {
  message: string
  sender: string
  id?: number
  timestamp?: string
}

export function getLastKurisuMessage() {
  const chatHistory = getChatHistory()

  const lastMessage = chatHistory.reverse().find((message: MessageProps) => {
    if (message.sender === 'Amadeus') {
      return message
    }
  })

  return lastMessage.message
}
