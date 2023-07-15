export const getCurrentTime = () => {
  return new Date().toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}
