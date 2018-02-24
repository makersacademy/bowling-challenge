$(document).ready(function() {
  var bowlingFrame = new BowlingFrame();
  var game = new Game(bowlingFrame);
  var frameNumber = 1;
  $('#player-name-submit').click(function() {
    var $name = $('#player-name').val();
    $('#player').append('welcome, ' + $name);
  });

  $('#bowl-button').click(function() {
    if (game.frameOne.rollNumber === 2) {
      var $score = game.bowl(game.frameOne);
      $('#scoreboard').append(
        `<tr id="${frameNumber}"><td>${frameNumber}</td><td>${
          game.frameOne.rollNumber
        }</td><td>${$score}</td><td>${game.scoreboard.score(
          game.frameOne
        )}</td></tr>`
      );
    } else {
      console.log('first');
      var $score = game.bowl(game.frameOne);
      $('#scoreboard').append(
        `<tr id="${frameNumber}"><td>${frameNumber}</td><td>${game.frameOne
          .rollNumber - 1}</td><td>${$score}</td></tr>`
      );
    }
  });
});
