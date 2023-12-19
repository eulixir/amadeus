import { ChatProps } from '../../@types/chat'
import { getCurrentDate, getCurrentTime } from '../../helpers/helper'

export function setupHistory() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const history: ChatProps[] = JSON.parse(localStorage.getItem('chatHistory') || '[]')

  const defaultMessage = createDefaultMessage()

  if (history.length === 0) {
    localStorage.setItem(
      'chatHistory',
      JSON.stringify([defaultMessage])
    )
  }

  return defaultMessage
}

function createDefaultMessage() {
  const currentDate = getCurrentDate()
  const currentTime = getCurrentTime()

  const message = {
    id: 1,
    sender: 'Amadeus',
    message: 'Hello!',
    timestamp: `${currentDate} ${currentTime}`,
  }

  return message
}
