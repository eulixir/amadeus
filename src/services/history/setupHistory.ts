import { getCurrentDate, getCurrentTime } from '../../helpers/helper'

export function setupHistory() {
  const history = JSON.parse(localStorage.getItem('chatHistory') || '[]')
  const currentDate = getCurrentDate()
  const currentTime = getCurrentTime()

  if (history.length === 0) {
    localStorage.setItem(
      'chatHistory',
      JSON.stringify([
        {
          id: 1,
          sender: 'Amadeus',
          message: 'Hello!',
          timestamp: `${currentDate} ${currentTime}`,
        },
      ])
    )
  }
}
