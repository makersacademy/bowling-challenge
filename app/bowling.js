
$("document").ready(function() {
  var frame = 1;
  var ball = 1;
  var firstGo;
  var secondGo;
  var frameTotal;
  var game = {'total': 0};
  
  var randomAngle = function() {
    var angle = Math.floor(Math.random() * 21) - 10;
    $("#throwAngle").val(angle);
  };
  
  randomAngle()

  $("#bowl").click(function() {
    var slider = 10 - Math.abs($("#throwAngle").val());
    var cellOne = $("#frame" + frame + " #ball1");
    var cellTwo = $("#frame" + frame + " #ball2");
    var cellFrameTot = $("#frame" + frame + " #ball3");
    console.log(ball);
    if(ball === 1) {
      firstGo = slider;
      cellOne.text(firstGo);
      if(firstGo === 10) {
        second = 0;
        cellFrameTot.text(firstGo);
        game['frame' + frame] = [{'frameTotal': firstGo}, firstGo, ];
        game.total += firstGo;
        console.log(game);
        frame++;
        randomAngle();
      } else {
        randomAngle();
        ball++;
      }
    } else if(ball === 2 ) {
      secondGo = slider - firstGo < 1 ? 0 : slider - firstGo;
      frameTotal = firstGo + secondGo;
      cellTwo.text(secondGo);
      cellFrameTot.text(frameTotal);
      game['frame' + frame] = [{'frameTotal':frameTotal}, firstGo, secondGo];
      game.total += frameTotal;
      console.log(game);
      ball = 1;
      frame++;
      randomAngle();
    }
  });
});