$(document).ready(function() {
  var bowling = new Bowling()

  function formatRoll(roll) {
    return (roll === null) ? "X" : roll
  }

  //show current score
  $('#score').text(bowling.showCurrentScore())

  //show all frames
  var frames = bowling.showFrames()
  Object.keys(frames).forEach(function(frameNo) {
    var frame = "<div class='frame frame-"+frameNo + "' id='frame-"+frameNo+"'>"
    frame += "<p id='roll-"+frameNo+"-1'>Roll1: " + formatRoll(frames[frameNo][0]) + "</p>"
    frame += "<p id='roll-"+frameNo+"-2'>Roll2: " + formatRoll(frames[frameNo][1]) + "</p>"
    frame += "</div>"
    console.log(frame)
    $('.frames').append(frame)
  })

  //indicate current frame with red color
  $('#frame-'+bowling.showCurrentFrameNum()).addClass("currentFrame")

  //indicate current roll with green color
  $('#roll-'+bowling.showCurrentFrameNum()+'-'+bowling.showNextRoll()).addClass("nextRoll")
 })
