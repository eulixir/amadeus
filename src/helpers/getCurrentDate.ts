export const getCurrentDate = () => {
  return new Date().toLocaleString('en-US', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
  })
}
