var game = new Game(Frame);

$('#bowl').click(function(){
   var i = game.frameIndex;
  var ballIndex = game.frameArray[i].ballsRolled();
  var pins = game.frameArray[i].pinsRemaining;
  var currentFrame = game.frameArray[i];

  var score = game.bowl();
  scoreRefresh();

  if (score === pins && i == 9) {
    celebrateLastFrame(ballIndex, currentFrame);
  } else if (score === pins) {
    celebrate(ballIndex);
  };

});

$('#game-switch').click(function(){
  $('.bowling-controls').toggle();
});

$('.manual-input').click(function(){
  var elementID = this.id;
  var roll = parseInt(elementID);

  var i = game.frameIndex;
  var ballIndex = game.frameArray[i].ballsRolled();
  var pins = game.frameArray[i].pinsRemaining;
  var currentFrame = game.frameArray[i];

  var score = game.bowl(roll);
  scoreRefresh();

  if (score === pins && i == 9) {
    celebrateLastFrame(ballIndex, currentFrame);
  } else if (score === pins) {
    celebrate(ballIndex);
  };

});

$('#reset').click(function(){
  game = new Game(Frame);
  scoreReset();
  styleReset();
});

$('#bowl').hover(
  function() {
    $('#bowl').css({
      'font-size': '100px',
      'border': '10px solid #E6D830',
      'padding-bottom': '10%'
    });
    $('.face').toggle();
  }, function() {
    $('#bowl').css({
      'font-size': '-webkit-xxx-large',
      'border': '10px solid white',
      'padding-bottom': '0'
    });
    $('.face').toggle();
});

$('#reset').hover(
  function() {
    $('#reset').css({
      'font-size': '30px',
      'border': '10px solid #E6D830'
    });
  }, function() {
    $('#reset').css({
      'font-size': 'inherit',
      'border': '10px solid white'
    });
});

$('#game-switch').hover(
  function() {
    $('#game-switch').css({
      'font-size': '30px',
      'border': '10px solid #E6D830'
    });
  }, function() {
    $('#game-switch').css({
      'font-size': 'inherit',
      'border': '10px solid white'
    });
});

$('.manual-input').hover(
  function(id) {
    var elementID = this.id;
    $('#' + elementID).css({
      'font-size': '25px',
      'border': '3px solid #E6D830'
    });
  }, function(id) {
    var elementID = this.id;
    $('#' + elementID).css({
      'font-size': 'large',
      'border': '3px solid white'
    });
});

styleReset = function(){
  $('.roll').attr('style', 'background-color: none')
}

scoreReset = function(){
  $('.roll').empty();
  $('.individual-total').empty();
  $('#game-total').empty();
}

scoreRefresh = function(){
  var gameTotal = 0

  game.frameArray.forEach(function(frame, index) {
    var firstRoll = firstRollDisplay(frame);
    var secondRoll = secondRollDisplay(frame);
    var thirdRoll = thirdRollDisplay(frame);
    var total = totalDisplay(frame);

    $('#first-' + String(index)).text(firstRoll);
    if (firstRoll === 'X') $('#first-' + String(index)).attr('style', 'background-color: #FFAAAA');

    $('#second-' + String(index)).text(secondRoll);
    if (secondRoll === 'X' || secondRoll === '/') $('#second-' + String(index)).attr('style', 'background-color: #FFAAAA');

    if (index === 9) {
      $('#third-9').text(thirdRoll);
      if (thirdRoll === 'X' || thirdRoll === '/') $('#third-9').attr('style', 'background-color: #FFAAAA');
    };

    $('#total-' + String(index)).text(total);

    if (total > 0) gameTotal += total;
  });

  $('#game-total').text(gameTotal);
}

firstRollDisplay = function(frame) {
  if (frame.ballsRolled() < 1) return '';
  if (frame.balls[0] === 10) return 'X';
  return frame.balls[0];
};

secondRollDisplay = function(frame) {
  if (frame.ballsRolled() < 2) return '';
  if (frame.isSpare()) return '/';
  if (frame.isLastFrame && frame.balls[1] === 10) return 'X';
  return frame.balls[1];
};

thirdRollDisplay = function(frame) {
  if (frame.ballsRolled() < 3) return '';
  if (frame.balls[2] === 10 && frame.balls[1] > 0) return 'X';
  if (frame.totalScore() === 20 && frame.balls[2] > 0) return '/';
  return frame.balls[2];
};

totalDisplay = function(frame) {
  if (frame.ballsRolled() === 3) return frame.totalScore();
  if (!frame.isComplete()) return '';
  if (frame.isAwaitingBonus()) return '';
  return frame.totalScore();
};

celebrate = function(ballIndex) {
  var shout = "SPARE!";
  if (ballIndex === 0) {
    shout = "STRIKE!";
  };

  $('#celebration').text(shout);
  $('#celebration').animate({'font-size': '200px'},'slow');
  $('#celebration').animate({'font-size': '0'},'slow')
};

celebrateLastFrame = function(ballIndex, frame) {
  var shout = "SPARE!";
  if (ballIndex === 0) {
    shout = "STRIKE!";
  } else if (ballIndex === 1 && frame.balls[0] === 10) {
    shout = "STRIKE!"
  } else if (ballIndex === 2 && (frame.balls[0] + frame.balls[1])%10 ===0) {
    shout = "STRIKE!"
  };

  if (game.totalAllFrames() === 300) shout = "PERFECT GAME!"

  $('#celebration').text(shout);
  $('#celebration').animate({'font-size': '200px'},'slow');
  $('#celebration').animate({'font-size': '0'},'slow')
};

createHTMLTable = function(){
  var htmlString = tableHeadingGenerator() + tableContentGenerator()
  $('#frame-display').html(htmlString);
};

tableHeadingGenerator = function(){
  var htmlString = "<table id='score'><tr>"
  for (var i = 1; i <= 10; i++) {
    var heading = '<th>Frame ' + String(i) + '</th>'
    htmlString += heading
  };
  htmlString += '<th>Total Score</th></tr>'
  return htmlString;
};

tableContentGenerator = function(){
  var htmlString = '<tr>'
  for (var i = 0; i <= 9; i++) {
    var forLastFrame = "";
    if (i === 9) forLastFrame = "<td class='roll' id='third-9'></td>";

    var content = "<td><table class='frame-table'><tr>" + forLastFrame +
      "<td class='roll' id='second-" + String(i) +
      "'></td><td class='roll' id='first-" + String(i) +
      "'></td></tr><tr><td class='individual-total' id='total-" + String(i) + "'></td></tr></table></td>"


    htmlString += content
  };

  htmlString += "<td><table class='frame-table'><td id='game-total'></td></tr></table>"
  return htmlString;
};

insertPinImages = function(){
  $('.manual-input').each(function(index) {
    for (var i = index; i > 0; i--) {
      $('#' + index).append("<img class='pin-image' src='images/bowlingpin.png'/>")
    };
  });
};

insertPinImages();
createHTMLTable();

