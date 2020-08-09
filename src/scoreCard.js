$(document).ready(function() {
  const game = new Game()
  console.log(game)

  $('#submit').click(function(){
    const frame = new Frame();
    const firstBall = parseInt($('#ball-1').val())
    const secondBall = parseInt($('#ball-2').val())
    frame.firstRoll(firstBall);
    frame.secondRoll(secondBall);
    $(`#${game.currentFrame}.first-bowl`).text(firstBall)
    $(`#${game.currentFrame}.second-bowl`).text(secondBall)
    game.addFrame(frame)
    console.log(game)
  });
});
