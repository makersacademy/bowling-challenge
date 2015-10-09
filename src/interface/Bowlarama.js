var game = new Game(Frame);

$('#bowl').click(function(){
  game.bowl();
  scoreRefresh();
});

$('#bowl').hover(
  function() {
    $('#bowl').attr('style', 'font-size: 100px');
    $('#sad-face').hide();
    $('#happy-face').show();
  }, function() {
    $('#bowl').attr('style', 'font-size: -webkit-xxx-large');
    $('#sad-face').show();
    $('#happy-face').hide();
});

$('#game-switch').click(function(){
  $('.bowling-controls').toggle();
  game.toggleManualRandomInput();
});

$('.manual-input').click(function(){
  var elementID = this.id;
  var roll = parseInt(elementID);
  game.bowl(roll);
  scoreRefresh();
});

$('#reset').click(function(){
  if (game.isManualGame) $('.bowling-controls').toggle();
  game = new Game(Frame);
  scoreReset();
  styleReset();
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
  if (frame.firstRollScore === 10) return 'X';
  return frame.firstRollScore;
};

secondRollDisplay = function(frame) {
  if (frame.firstRollScore + frame.secondRollScore === 10 && frame.secondRollScore > 0) return '/';
  if (frame.isLastFrame && frame.secondRollScore === 10) return 'X';
  return frame.secondRollScore;
};

thirdRollDisplay = function(frame) {
  if (frame.thirdRollScore === 10 && frame.secondRollScore > 0) return 'X';
  if (frame.totalScore === 20 && frame.thirdRollScore > 0) return '/';
  return frame.thirdRollScore;
};

totalDisplay = function(frame) {
  if (frame.rollsTaken === 3) return frame.totalScore;
  if (frame.rollsTaken === 2 && frame.totalScore < 10) return frame.totalScore;
  if (frame.rollsTaken === 0 || (frame.rollsTaken === 1 && frame.totalScore < 10)) return '';
  if (frame.isStrike || frame.isSpare) return '';
  return frame.totalScore;
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

