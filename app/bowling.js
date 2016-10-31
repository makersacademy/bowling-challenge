
$("document").ready(function() {
  var frameNo = 1;
  var ball = 1;
  var firstGo;
  var secondGo;
  var frameTotal;
  var game = {frame:[], total: 0};
  
  var randomAngle = function() {
    // var angle = Math.floor(Math.random() * 21) - 10;
    // $("#throwAngle").val(angle);
  };

  var bonusForStrike = function() {
    var strikeFrame = game.frame[frameNo - 2];
    game.total += frameTotal;
    strikeFrame[0]['frameTotal'] += frameTotal;
    $("#frame" + (frameNo - 2) + " #ball3").text(strikeFrame[0]['frameTotal']); 
  };

  var bonusForSpareOrStrike = function(){
    console.log('bonus for spare or strike');
    var spareFrame = game.frame[frameNo - 1];
    game.total += frameTotal;
    spareFrame[0]['frameTotal'] += frameTotal;
    if(spareFrame[1] != 10) {
      $("#frame" + (frameNo - 1) + " #ball3").text(spareFrame[0]['frameTotal']);
    }
  };

  var checkBonus = function() {
    if(frameNo > 2 && game.frame[frameNo - 2][1] === 10) {
      bonusForStrike();
    }
    if(frameNo > 1 && game.frame[frameNo - 1][0]['frameTotal'] === 10) {
      bonusForSpareOrStrike();
    }
  }
  
  randomAngle()

  $("#bowl").click(function() {
    var slider = 10 - Math.abs($("#throwAngle").val());
    var cellOne = $("#frame" + frameNo + " #ball1");
    var cellTwo = $("#frame" + frameNo + " #ball2");
    var cellFrameTot = $("#frame" + frameNo + " #ball3");
    if(frameNo < 11) {
      if(ball === 1) {
        firstGo = slider;
        cellOne.text(firstGo);
        if(firstGo === 10) {
          second = 0;
          frameTotal = firstGo
          game.frame[frameNo] = [{'frameTotal': frameTotal}, firstGo, ];
          checkBonus();
          game.total += firstGo;
          console.log(game);
          frameNo++;
          randomAngle();
        } else {
          randomAngle();
          ball++;
        }
      } else if(ball === 2 ) {
        secondGo = slider - firstGo < 1 ? 0 : slider - firstGo;
        frameTotal = firstGo + secondGo;
        cellTwo.text(secondGo);
        if(frameTotal < 10) {
          cellFrameTot.text(frameTotal);
        }
        game.frame[frameNo] = [{'frameTotal': frameTotal}, firstGo, secondGo];
        checkBonus();
        game.total += frameTotal;
        console.log(game);
        ball = 1;
        frameNo++;
        randomAngle();
      }
    }
  });
});