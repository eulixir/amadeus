export function setupHistory() {
  const history = JSON.parse(localStorage.getItem('chatHistory') || '[]')
  if (history.length === 0) {
    localStorage.setItem(
      'chatHistory',
      JSON.stringify([
        {
          id: 1,
          sender: 'Amadeus',
          message: 'Hello!',
        },
      ])
    )
  }
}
