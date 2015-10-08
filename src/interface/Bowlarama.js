var game = new Game(Frame);

$('#bowl').click(function(){
  game.bowl();
  scoreRefresh();
});


scoreRefresh = function(){
  game.frameArray.forEach(function(frame, index) {
    $('#first-' + String(index)).text(frame.firstRollScore);
    $('#second-' + String(index)).text(frame.secondRollScore);
    $('#total-' + String(index)).text(frame.totalScore);
    if (index === 9) $('#third-9').text(frame.thirdRollScore);
  });

  var gameTotal = game.totalAllFrames();
  $('#game-total').text(gameTotal);
}


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

createHTMLTable();

