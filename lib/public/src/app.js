var frame = new Frame;
var currentThrow = 1;
var remainder = 10;
var maxScore;

var currentScore = function() {
  $('#total_score').text(game.totalScore);
};

var latestBowl = function() {
  if (frame.lastBowl === 10) {
    $('#bowl' + (currentThrow)).text('X');
    currentThrow += 1;
    $('#bowl' + (currentThrow)).hide();
    currentThrow += 1;
    console.log(game.gameArray.length);
  } else if (((currentThrow) % 2 === 0) && game.previousFrame()[0] + game.previousFrame()[1] === 10) {
    $('#bowl' + (currentThrow)).text('/');
    currentThrow += 1;
  } else {
    $('#bowl' + (currentThrow)).text(frame.lastBowl);
    currentThrow += 1;
  }
};

var addFrame = function() {
  $('#frame' + (game.gameArray.length)).text(game.totalScore);
};

var addPreviousFrame = function(update) {
  for (var i = (game.gameArray.length - update), n = (game.gameArray.length); i < n; i++)
  {
    $('#frame' + (i)).text(game.totalScore);
  };
};

var hideButtons = function() {
  for (var i = 10, n = (remainder - frame.lastBowl); i > n; i--)
  {
    $('#button' + (i)).hide();
  };
};

var showButtons = function() {
  $('.button').show();
};

var potentialScore = function() {
  for (var i = 0, n = (10 - game.gameArray.length); i <= n; i++)
  {
    maxScore = (i * 30);
  };
  $('#potential_score').text(maxScore + game.totalScore);
};

$(document).ready(function() {

  $('.button').click(function() {
    console.log($(this).text());
    var theScore = parseInt($.trim($(this).text()));
    frame.bowl(theScore);
    latestBowl();
    currentScore();
    hideButtons();
    if ((currentThrow - 1) % 2 === 0) {
      addFrame();
      showButtons();
      potentialScore();
    };
  });

});
