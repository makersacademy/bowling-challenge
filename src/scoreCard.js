$(document).ready(function() {
  const game = new Game()
  console.log(game)

  
  $('#submit').click(function(){
    if (!isLastFrame()) {
      enterNormalFrame()
    } else {enterFinalFrame()}
    updateScore()
    console.log(game)
  });

  function updateScore () {
    game.sharingInfoWithFrames();
    game.getFramesScores()
    $('.total').text(game.finalScore())
  }

  function isLastFrame() {
    return game.currentFrame === 9
  }

  function enterNormalFrame() {
    const frame = new Frame();
    const firstBall = parseInt($('#ball-1').val())
    const secondBall = parseInt($('#ball-2').val())
    frame.firstRoll(firstBall);
    frame.secondRoll(secondBall);
    $(`#${game.currentFrame}.first-bowl`).text(firstBall)
    $(`#${game.currentFrame}.second-bowl`).text(secondBall)
    game.addFrame(frame)
    _addBonusbox()
  }

  function enterFinalFrame() {
    const finalframe = new FinalFrame()
    const firstBall = parseInt($('#ball-1').val())
    const secondBall = parseInt($('#ball-2').val())
    const bonus = parseInt($('#ball-3').val())
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
});
