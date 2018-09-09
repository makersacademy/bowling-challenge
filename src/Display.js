function Display() {

}
Display.prototype.print = function(frames, cumulatives) {
  counter = 0
  frames.forEach( function(frame) {
    console.log(frame.scores, cumulatives[counter])
    counter++
  })


}
