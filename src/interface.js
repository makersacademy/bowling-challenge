$(document).ready(function() {
  var bowlingFrame = new BowlingFrame();
  var game = new Game(bowlingFrame);
  var frameNumber = 1;
  //
  // $('#bowl-button').click(function() {
  //   if (game.currentFrame.rollNumber === 2) {
  //     var $score = game.bowl(game.currentFrame);
  //     $('#scoreboard').append(
  //       `<tr id="${frameNumber}"><td>${frameNumber}</td><td>${
  //         game.currentFrame.rollNumber
  //       }</td><td>${$score}</td><td>${game.scoreboard.score(
  //         game.currentFrame
  //       )}</td></tr>`
  //     );
  //     frameNumber += 1;
  //     game.createNewFrame();
  //   } else {
  //     console.log('first');
  //     var $score = game.bowl(game.currentFrame);
  //     $('#scoreboard').append(
  //       `<tr id="${frameNumber}"><td>${frameNumber}</td><td>${game.currentFrame
  //         .rollNumber - 1}</td><td>${$score}</td></tr>`
  //     );
  //   }
  // });

  $('.buttons')
    .children()
    .click(function(e) {
      console.log(e.target.attributes.id.nodeValue);
      if (game.currentFrame.rollNumber === 1) {
        var $score = game.currentFrame.firstRoll(
          parseInt(e.target.attributes.id.nodeValue)
        );
        $('#scoreboard').append(
          `<tr id="${frameNumber}"><td>${frameNumber}</td><td>${game
            .currentFrame.rollNumber - 1}</td><td>${$score}</td></tr>`
        );
      } else {
        var $score = game.currentFrame.secondRoll(
          parseInt(e.target.attributes.id.nodeValue)
        );
        $('#scoreboard').append(
          `<tr id="${frameNumber}"><td>${frameNumber}</td><td>${
            game.currentFrame.rollNumber
          }</td><td>${$score}</td><td>${game.scoreboard.score(
            game.currentFrame
          )}</td></tr>`
        );
        frameNumber += 1;
        game.createNewFrame();
      }
    });
});
