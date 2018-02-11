console.log("Atty helped with the JQuery")

$( document ).ready(function() {

  var game = new Game();
  game.start(10);


  //     for (var i = 1; i <= 10; i ++){
  //       $('#r'+i).text(game.frames[i - 1].bowls[0]);
  //       $('#r2').text(game.frames[i - 1].bowls[1]);
  //       $('#r3').text(game.frames[i - 1].bowls[2]);
  //     };
  //   };

  $( "#b0" ).click(function() {
      var arrayFrame = game.currentFrame-1
      var frame = game.currentFrame
      var roll = (game.frames[arrayFrame].isRoll)
      game.roll(0)
      $( "#r" + (arrayFrame + 1) + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
      displaysScore(roll,frame)
    });

  $( "#b1" ).click(function() {
      var arrayFrame = game.currentFrame-1
      var frame = game.currentFrame
      var roll = (game.frames[arrayFrame].isRoll)
      game.roll(1)
      $( "#r" + (arrayFrame + 1) + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
      displaysScore(roll,frame)
    });

  $( "#b2" ).click(function() {
      var arrayFrame = game.currentFrame-1
      var frame = game.currentFrame
      var roll = (game.frames[arrayFrame].isRoll)
      game.roll(2)
      $( "#r" + (arrayFrame + 1) + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
      displaysScore(roll,frame)
    });

  $( "#b3" ).click(function() {
    var arrayFrame = game.currentFrame-1
    var frame = game.currentFrame
    var roll = (game.frames[arrayFrame].isRoll)
    game.roll(3)
    $( "#r" + (arrayFrame + 1) + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
    displaysScore(roll,frame)
  });

  $( "#b4" ).click(function() {
    var arrayFrame = game.currentFrame-1
    var frame = game.currentFrame
    var roll = (game.frames[arrayFrame].isRoll)
    game.roll(4)
    $( "#r" + (arrayFrame + 1) + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
    displaysScore(roll,frame)
  });

  $( "#b5" ).click(function() {
    var arrayFrame = game.currentFrame-1
    var frame = game.currentFrame
    var roll = (game.frames[arrayFrame].isRoll)
    game.roll(5)
    $( "#r" + (arrayFrame + 1) + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
    displaysScore(roll,frame)
  });

  $( "#b6" ).click(function() {
    var arrayFrame = game.currentFrame-1
    var frame = game.currentFrame
    var roll = (game.frames[arrayFrame].isRoll)
    game.roll(6)
    $( "#r" + (arrayFrame + 1) + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
    displaysScore(roll,frame)
  });

  $( "#b7" ).click(function() {
    var arrayFrame = game.currentFrame-1
    var frame = game.currentFrame
    var roll = (game.frames[arrayFrame].isRoll)
    game.roll(7)
    $( "#r" + (arrayFrame + 1) + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
    displaysScore(roll,frame)
  });

  $( "#b8" ).click(function() {
    var arrayFrame = game.currentFrame-1
    var frame = game.currentFrame
    var roll = (game.frames[arrayFrame].isRoll)
    game.roll(8)
    $( "#r" + (arrayFrame + 1) + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
    displaysScore(roll,frame)
  });

  $( "#b9" ).click(function() {
    var arrayFrame = game.currentFrame-1
    var frame = game.currentFrame
    var roll = (game.frames[arrayFrame].isRoll)
    game.roll(9)
    $( "#r" + (arrayFrame + 1) + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
    displaysScore(roll,frame)
  });

  $( "#b10" ).click(function() {
    var arrayFrame = game.currentFrame-1
    var frame = game.currentFrame
    var roll = (game.frames[arrayFrame].isRoll)
    game.roll(10)
    $( "#r" + (arrayFrame + 1) + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
    afterFrame(frame);
  });

      //   $('#roll-form').submit(function(evt) {
      //     evt.preventDefault();
      //     var pinsDown = Number($('#pins-down').val());
      //     game.currentMove(pinsDown);
      //     updateFrames();
      //     updateTotalScore();
      //   });

      $('#newgame').click(function() {
        location.reload();
      });

      function afterFrame(frame) {
        for (var j = 1; j <= frame; j ++){
          game.calculateTotal(j);
          $('#f' + j).text(game.runningTotal);
        };
      };

      function setVariables() {
        var arrayFrame = game.currentFrame-1
        var frame = game.currentFrame
        var roll = (game.frames[arrayFrame].isRoll)
      };

      function displaysScore(roll,frame) {
        if (roll === 2) {
          afterFrame(frame);
        } else if (frame === 10 && roll === 3) {
          afterFrame(frame);
        }
      };
});
