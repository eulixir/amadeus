import { getChatHistory } from './getChatHistory'
import { setupHistory } from './setupHistory'

export function getLastKurisuMessage(): string {
  const chatHistory = getChatHistory()

  const lastMessage = chatHistory.reverse().find((message) => {
    if (message.sender === 'Amadeus') {
      return message
    }
  })

  if (!lastMessage) {
    const initMessage = setupHistory()
    return initMessage.message
  }

  return lastMessage.message
}
