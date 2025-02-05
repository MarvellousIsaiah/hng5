function updateUTCTime() {
    const currentTimeElement = document.getElementById("currentTime")
    const now = new Date()
    const utcTimeString = now.toUTCString()
    currentTimeElement.textContent = `Current UTC Time: ${utcTimeString}`
  }
  
  updateUTCTime()
  setInterval(updateUTCTime, 1000)
  
  