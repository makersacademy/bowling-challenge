$(document).ready(function() {
  const game = new Game()
  const finalframe = new FinalFrame()
  const MAX_SINGLE_ROLL_PTS = 10
  console.log(game)


  
  $('#submit').click(function(){
    const firstBall = parseInt($('#ball-1').val())
    const secondBall = parseInt($('#ball-2').val())
    _checkFrameValidity(firstBall, secondBall)
    if (!isLastFrame()) {
      enterNormalFrame(firstBall, secondBall);
    } else {enterFinalFrame(firstBall, secondBall)}
    updateScore()
    if (!finalframe._isNotEligibleForBonus()) {
      _addBonusForm()
      game.currentFrame --
    }

    console.log(game)
  });

  $('#submit-bonus').click(function(){
    const bonusBall = parseInt($('#ball-3').val())
    _checkBonusValidity(bonusBall)
    finalframe.bonusRoll(bonusBall)
    $(`#${game.currentFrame}.bonus-bowl`).text(bonusBall)
    updateScore()
    console.log(finalframe)
  })

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

  function enterFinalFrame(firstBall, secondBall) {
    finalframe.firstRoll(firstBall);
    finalframe.secondRoll(secondBall);
    $(`#${game.currentFrame}.first-bowl`).text(firstBall)
    $(`#${game.currentFrame}.second-bowl`).text(secondBall)
    game.addFrame(finalframe)    
  }

  function _addBonusForm () {
      $('#enter-frame').addClass('hidden')
      $('#bonus-form').removeClass('hidden')
  }

  function _checkFrameValidity(firstBall, secondBall) {
    if (_isSingleRollInvalid(firstBall, secondBall)) {
      $('.errormessage').text('invalid amount of points for single roll (max is 10)')
    }
    else if (_isFrameInvalid(firstBall, secondBall)) {
      console.log("frame invalid")
      $('.errormessage').text('invalid amount of points for single frame (max is 10)')
    }
    else {$('.errormessage').empty()};
  };

  function _checkBonusValidity(bonusBall) {
    if (_isBonusInvalid(bonusBall)) {
      console.log("right")
      $('.errormessage').text('invalid amount of points for bonus roll (max is 10)')
    }
  }

  function _isSingleRollInvalid(firstBall, secondBall) {
    return (firstBall > MAX_SINGLE_ROLL_PTS || secondBall > MAX_SINGLE_ROLL_PTS);
  };

  function _isFrameInvalid(firstBall, secondBall) {
    console.log(firstBall)
    return (firstBall + secondBall > MAX_SINGLE_ROLL_PTS);
  }

  function _isBonusInvalid(bonusBall) {
    return bonusBall > MAX_SINGLE_ROLL_PTS;
  }
});
