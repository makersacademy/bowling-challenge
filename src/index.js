$(document).ready(function() {
  var bowling = new Bowling()

  function formatRoll(roll) {
    return (roll === null) ? "X" : roll
  }

  //update Frames
  function updateFrames() {
    var frames = bowling.showFrames()
    Object.keys(frames).forEach(function(frameNo) {
      var frame = "<div class='frame frame-"+frameNo + "' id='frame-"+frameNo+"'>"
      frame += "<div class='frame-no'>" + frameNo + "</div>"
      frame += "<p id='roll-"+frameNo+"-1'>Roll1: " + formatRoll(frames[frameNo][0]) + "</p>"
      if (frames[frameNo][1] !== undefined) {
        frame += "<p id='roll-"+frameNo+"-2'>Roll2: " + formatRoll(frames[frameNo][1]) + "</p>"
      }
      frame += "</div>"
      console.log(frame)
      $('.frames').append(frame)
    })
  }

  function placeError(msg) {
    $('#error').text(msg)
  }

  function removeError() {
    $('#error').text('')
  }

  function removeFrames() {
    $('.frames').text('')
  }

  function updateScore() {
    $('#score').text(bowling.showCurrentScore())
  }

  updateFrames()
  updateScore()

  //indicate current frame with red color
  $('#frame-'+bowling.showCurrentFrameNum()).addClass("currentFrame")

  //indicate current roll with green color
  $('#roll-'+bowling.showCurrentFrameNum()+'-'+bowling.showNextRoll()).addClass("nextRoll")

  //roll button
  $('#roll-btn').click(function(){
    removeError()
    var pins = parseInt($('#roll-value').val())
    if (typeof(bowling.roll(pins)) === 'string') placeError(bowling.roll(pins))
    removeFrames()
    updateFrames()
    updateScore()
  })
 })
