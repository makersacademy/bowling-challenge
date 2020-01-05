$(document).ready(() => {

  function setDisplay() {
    if(frameNum === 10) {

    } else {
      $(`#frame${frameNum}`).find('#roll1').text(game.frames[frameNum - 1].roll1())
      $(`#frame${frameNum}`).find('#roll2').text(game.frames[frameNum - 1].roll2())
    }
    setScore()
    frameNum = game.frameNum()
  };

  function setScore() {
    for (var i = completedFrames; i < frameNum; i++) {
      if(game.frames[i].closed()) {
        completedFrames++
        $(`#frame${i+1}`).find('#frame-score').text(game.totalScore(i+1))
      }
    };
  };

  game = new Bowling()
  var frameNum = 1
  var completedFrames = 0

  $('.knockDownPinsBtn').click(function (event) {
    pins = Number(this.value)
    game.roll(pins)
    setDisplay(pins)
  });
});
