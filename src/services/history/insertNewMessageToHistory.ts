import { getCurrentDate, getCurrentTime } from '../../helpers/helper'
import { getChatHistory } from './getChatHistory'

interface NewMessageProps {
  message: string
  sender: string
  id?: number
  timestamp?: string
}

export function insertMessageToHistory(newMessage: NewMessageProps) {
  const history = getChatHistory()

  const id = history.length + 1
  const currentDate = getCurrentDate()
  const currentTime = getCurrentTime()

  newMessage = {
    ...newMessage,
    id,
    timestamp: `${currentDate} ${currentTime}`,
  }

  history.push(newMessage)

  localStorage.setItem('chatHistory', JSON.stringify(history))

  return history
}
