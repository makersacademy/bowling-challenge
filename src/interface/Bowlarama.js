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


createFrameTable = function(){
  var htmlString = tableHeadingGenerator() + tableDataGenerator()
  $('#frame-display').html(htmlString);
};

tableHeadingGenerator = function(){
  var htmlString = '<table><tr>'
  for (var i = 1; i <= 10; i++) {
    var heading = '<th>Frame ' + String(i) + '</th>'
    htmlString += heading
  };
  htmlString += '<th>Total Score</th></tr>'
  return htmlString;
};

tableDataGenerator = function(){
  var htmlString = '<tr>'
  for (var i = 0; i <= 9; i++) {
    var forLastFrame = "";
    if (i === 9) forLastFrame = "<td id='third-9'></td>";

    var data = "<td><table class='frame-table'><tr><td id='first-" + String(i) + "'></td><td id='second-" + String(i) + "'></td>" +
      forLastFrame + "</tr>" +
      "<tr><td>Total:</td><td id='total-" + String(i) + "'></td></tr></table></td>"


    htmlString += data
  };

  htmlString += "<td><table><td id='game-total'></td></tr></table>"
  return htmlString;
};

createFrameTable();

