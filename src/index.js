$(document).ready(function() {
  var bowling = new Bowling()

  function formatRoll(roll) {
    return (roll === null) ? "X" : roll
  }

  $('#score').text(bowling.showCurrentScore())

  $('#frame-num').text(bowling.showCurrentFrameNum())
  console.log(bowling)
  var frames = bowling.frames
  console.log(frames)
  Object.keys(frames).forEach(function(frameNo) {
    var frame = "<div id='frame-"+frameNo+"'>"
    frame += "<p>Roll1: " + formatRoll(frame[0])
    frame += "<p>Roll2: " + formatRoll(frame[1])
    frame += "</div>"
    $('.frames').append(frame)
  })

 })
