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
    console.log(game)
  });

  $('#submit-bonus').click(function(){
    const bonusBall = parseInt($('#ball-3').val())
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
      if (!finalframe._isNotEligibleForBonus()) {
        _addBonusbox()
        game.currentFrame --
      }
    game.addFrame(finalframe)    
  }

  function _addBonusbox () {
    if (isLastFrame()){
      $('#ball-1').addClass('hidden')
      $('#ball-2').addClass('hidden')
      $('#ball-3').removeClass('hidden')
      $('#submit-bonus').removeClass('hidden')
      $('#submit').addClass('hidden')
    }
  }

  
  

  function _checkFrameValidity(firstBall, secondBall, bonus) {
    console.log(firstBall)
    if (firstBall > MAX_SINGLE_ROLL_PTS || secondBall > MAX_SINGLE_ROLL_PTS|| bonus > MAX_SINGLE_ROLL_PTS) {
      console.log('working')
      $('.errormessage').text('invalid amount of points for single roll (max is 10)')
    }
    else if (firstBall + secondBall > 10) {
      $('.errormessage').text('invalid amount of points for single frame (max is 10)')
    } 
    else {$('.errormessage').empty()}
  }
});
