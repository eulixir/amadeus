import { getChatHistory } from './getChatHistory'

interface NewMessageProps {
  message: string
  sender: string
  id?: number
}

export function insertMessageToHistory(newMessage: NewMessageProps) {
  const history = getChatHistory()
  history.push(newMessage)
  const id = history.length + 1

  newMessage = {
    ...newMessage,
    id,
  }

  localStorage.setItem('chatHistory', JSON.stringify(history))

  return history
}
