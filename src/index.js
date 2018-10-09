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

  function showError(msg) {
    $('#error').addClass('visible')
    $('#error').text(msg)
  }

  function removeError() {
    $('#error').removeClass('visible')
    $('#error').addClass('hidden')
  }

  function removeFrames() {
    $('.frames').text('')
  }

  function updateScore() {
    $('#score').text(bowling.showCurrentScore())
  }

  //update current frame
  function updateCurrentFrame() {
    $('#frame-'+bowling.showCurrentFrameNum()-1).removeClass("currentFrame")
    $('#frame-'+bowling.showCurrentFrameNum()).addClass("currentFrame")
  }

  //update current roll
  function updateCurrentRoll() {
    if (bowling.showNextRoll() === 1) {
      $('#roll-'+bowling.showCurrentFrameNum() - 1 +'-2').removeClass("nextRoll")
      $('#roll-'+bowling.showCurrentFrameNum()+'-1').addClass("nextRoll")
    } else {
      $('#roll-'+bowling.showCurrentFrameNum()+'-1').removeClass("nextRoll")
      $('#roll-'+bowling.showCurrentFrameNum()+'-2').addClass("nextRoll")
    }
  }

  function updateDisplays() {
    updateFrames()
    updateScore()
    updateCurrentRoll()
    updateCurrentFrame()
  }

  updateDisplays()


  //roll button
  $('#roll-btn').click(function(){
    removeError()
    var pins = parseInt($('#roll-value').val())
    if (typeof(bowling.roll(pins)) === 'string') showError(bowling.roll(pins))
    removeFrames()
    updateDisplays()
  })

  //start new gram
  $('.start-new').click(function(){
    location.reload()
  })

 })
