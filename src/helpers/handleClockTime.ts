function handleClockTime(time: number) {
  return new Date(time * 1000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default handleClockTime
