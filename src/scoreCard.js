$(document).ready(function() {
  const game = new Game()
  const MAX_SINGLE_ROLL_PTS = 10
  console.log(game)


  
  $('#submit').click(function(){
    const firstBall = parseInt($('#ball-1').val())
    const secondBall = parseInt($('#ball-2').val())
    const bonus = parseInt($('#ball-3').val())
    _checkFrameValidity(firstBall, secondBall, bonus)
    if (!isLastFrame()) {
      enterNormalFrame(firstBall, secondBall);
      _addBonusbox();
    } else {enterFinalFrame(firstBall, secondBall, bonus)}
    updateScore()
    console.log(game)
  });

  $('#reset').click(function(){
    location.reload();
  })

  function updateScore () {
    game.sharingInfoWithFrames();
    game.getFramesScores()
    $('.total').text(game.finalScore())
  }

  function isLastFrame() {
    return game.currentFrame === 9
  }

  function enterNormalFrame(firstBall, secondBall) {
    const frame = new Frame();
    frame.firstRoll(firstBall);
    frame.secondRoll(secondBall);
    $(`#${game.currentFrame}.first-bowl`).text(firstBall)
    $(`#${game.currentFrame}.second-bowl`).text(secondBall)
    game.addFrame(frame)
  }

  function enterFinalFrame(firstBall, secondBall, bonus) {
    const finalframe = new FinalFrame()
    finalframe.firstRoll(firstBall);
    finalframe.secondRoll(secondBall);
    finalframe.bonusRoll(bonus);
    $(`#${game.currentFrame}.first-bowl`).text(firstBall)
    $(`#${game.currentFrame}.second-bowl`).text(secondBall)
    $(`#${game.currentFrame}.bonus-bowl`).text(bonus)
    game.addFrame(finalframe)
  }

  function _addBonusbox () {
    if (isLastFrame()){
      $('#ball-3').removeClass('hidden')
    }
  }

  function _checkFrameValidity(firstBall, secondBall, bonus) {
    console.log(firstBall)
    if (firstBall > MAX_SINGLE_ROLL_PTS || secondBall > MAX_SINGLE_ROLL_PTS|| bonus > MAX_SINGLE_ROLL_PTS) {
      console.log('working')
      $('.errormessage').text('invalid amount of points for single roll (max is 10)')
    }
    if (firstBall + secondBall > 10) {
      $('.errormessage').text('invalid amount of points for single frame (max is 10)')
    }
  }
});
