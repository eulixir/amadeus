import { getChatHistory } from './getChatHistory'

interface NewMessageProps {
  message: string
  sender: string
}

export function insertMessageToHistory(newMessage: NewMessageProps) {
  const history = getChatHistory()
  history.push(newMessage)

  localStorage.setItem('chatHistory', JSON.stringify(history))

  return history
}
