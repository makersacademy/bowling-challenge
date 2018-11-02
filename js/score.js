'use strict'

function Score () {


}

Score.prototype.calculateFrameScore = function(frame) {
  // console.log(frame)
  // console.log(frame.bowls)
  return frame.bowls[0] + frame.bowls[1]

}
