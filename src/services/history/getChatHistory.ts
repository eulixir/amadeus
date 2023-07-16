export function getChatHistory() {
  const history = JSON.parse(localStorage.getItem('chatHistory') || '[]')

  return history
}
