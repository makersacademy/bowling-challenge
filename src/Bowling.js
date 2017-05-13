function Bowling() {
  this.game = {
    frame1: [],
    frame2: [],
    frame3: [],
    frame4: [],
    frame5: [],
    frame6: [],
    frame7: [],
    frame8: [],
    frame9: [],
    frame10: []
  }
}

Bowling.prototype.bowl = function(frame, ball, score) {
  var frameKey = 'frame' + frame
  this.game[frameKey].push(score)
}
