let timeParagraph = document.getElementById("timeParagraph")

let running = false
let time = 0
let intervalId

function startStopTimer() {

  if (running == false) {
    intervalId = setInterval(run, 10)
    running = true
    return
  }
  
  if (running == true) {
    clearInterval(intervalId)
    running = false
    return
  }
}

function resetTimer() {
  clearInterval(intervalId)
  running = false

  time = 0
  timeParagraph.innerHTML = `0.00`
}

function run() {
  time++
  timeParagraph.innerHTML = (time / 100).toFixed(2)
}