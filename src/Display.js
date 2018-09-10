function Display() {
// for debugging purposes
// uses Scorecard.html for real display
}
Display.prototype.print = function(frames, cumulatives) {
  counter = 0
  frames.forEach( function(frame) {
    console.log(frame.scores, cumulatives[counter])
    counter++
  })


}
