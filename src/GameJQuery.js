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
      var frame = game.currentFrame
      var arrayFrame = frame-1
      var roll = (game.frames[arrayFrame].isRoll)
      game.roll(0)
      var firstRoll = game.frames[arrayFrame].bowls[roll-1]
      console.log(game.frames[arrayFrame].bowls[roll-1])
      $( "#r" + frame + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
      displaysScore(roll,frame)
      if (roll === 1) {
        for (var i = 10; i > (10-firstRoll); i--)
        $("#b" + i).hide();
      }
    });

  $( "#b1" ).click(function() {
      var frame = game.currentFrame
      var arrayFrame = frame-1
      var roll = (game.frames[arrayFrame].isRoll)
      game.roll(1)
      var firstRoll = game.frames[arrayFrame].bowls[roll-1]
      $( "#r" + frame + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
      displaysScore(roll,frame)
      if (roll === 1) {
        for (var i = 10; i > (10-firstRoll); i--)
        $("#b" + i).hide();
      }
    });

  $( "#b2" ).click(function() {
      var frame = game.currentFrame
      var arrayFrame = frame-1
      var roll = (game.frames[arrayFrame].isRoll)
      game.roll(2)
      var firstRoll = game.frames[arrayFrame].bowls[roll-1]
      $( "#r" + frame + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
        displaysScore(roll,frame)
        hidePins(roll,firstRoll)
    });

  $( "#b3" ).click(function() {
      var frame = game.currentFrame
      var arrayFrame = frame-1
      var roll = (game.frames[arrayFrame].isRoll)
      game.roll(3)
      var firstRoll = game.frames[arrayFrame].bowls[roll-1]
      $( "#r" + frame + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
        displaysScore(roll,frame)
        hidePins(roll,firstRoll)
    });

  $( "#b4" ).click(function() {
      var frame = game.currentFrame
      var arrayFrame = frame-1
      var roll = (game.frames[arrayFrame].isRoll)
      game.roll(4)
      var firstRoll = game.frames[arrayFrame].bowls[roll-1]
      $( "#r" + frame + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
        displaysScore(roll,frame)
        hidePins(roll,firstRoll)
    });

  $( "#b5" ).click(function() {
      var frame = game.currentFrame
      var arrayFrame = frame-1
      var roll = (game.frames[arrayFrame].isRoll)
      game.roll(5)
      var firstRoll = game.frames[arrayFrame].bowls[roll-1]
      $( "#r" + frame + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
        displaysScore(roll,frame)
        hidePins(roll,firstRoll)
    });

  $( "#b6" ).click(function() {
      var frame = game.currentFrame
      var arrayFrame = frame-1
      var roll = (game.frames[arrayFrame].isRoll)
      game.roll(6)
      var firstRoll = game.frames[arrayFrame].bowls[roll-1]
      $( "#r" + frame + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
        displaysScore(roll,frame)
        hidePins(roll,firstRoll)    });

  $( "#b7" ).click(function() {
      var frame = game.currentFrame
      var arrayFrame = frame-1
      var roll = (game.frames[arrayFrame].isRoll)
      game.roll(7)
      var firstRoll = game.frames[arrayFrame].bowls[roll-1]
      $( "#r" + frame + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
        displaysScore(roll,frame)
        hidePins(roll,firstRoll)
  });

  $( "#b8" ).click(function() {
      var frame = game.currentFrame
      var arrayFrame = frame-1
      var roll = (game.frames[arrayFrame].isRoll)
      game.roll(8)
      var firstRoll = game.frames[arrayFrame].bowls[roll-1]
      $( "#r" + frame + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
        displaysScore(roll,frame)
        hidePins(roll,firstRoll)
  });

  $( "#b9" ).click(function() {
      var frame = game.currentFrame
      var arrayFrame = frame-1
      var roll = (game.frames[arrayFrame].isRoll)
      game.roll(9)
      var firstRoll = game.frames[arrayFrame].bowls[roll-1]
      $( "#r" + frame + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
        displaysScore(roll,frame)
        hidePins(roll,firstRoll)
  });

  $( "#b10" ).click(function() {
      var frame = game.currentFrame
      var arrayFrame = frame-1
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

      // function fillsInBowl() {
      //   // var frame = game.currentFrame
      //   // var arrayFrame = frame-1
      //   // var roll = (game.frames[arrayFrame].isRoll)
      //   // var firstRoll = game.frames[arrayFrame].bowls[roll-1]
      //   console.log(game.frames[arrayFrame].bowls[roll-1])
      //   $( "#r" + frame + roll ).text(game.frames[arrayFrame].bowls[roll-1]);
      //   displaysScore(roll,frame)
      //   hidePins(roll,firstRoll)
      // };

      function displaysScore(roll,frame) {
        if (roll === 2) {
          afterFrame(frame);
        } else if (frame === 10 && roll === 3) {
          afterFrame(frame);
        }
      };

      function hidePins(roll,firstRoll) {
        if (roll === 1) {
          for (var i = 10; i > (10-firstRoll); i--)
          $("#b" + i).hide();
        }
        if (roll != 1) {
          for (var i = 10; i >= 0; i--)
          $("#b" + i).show();
        }
      };
});
