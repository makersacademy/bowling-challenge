$(document).ready(function() {
  var score = new Score;
  var game = new Game;
  var currentFrame;
  game.start();
  var roll = 1


  $('#current-frame').change(function() {
    var index = $('select#current-frame').val();
    console.log(index)
    currentFrame = game._allFrames[index];
    console.log(currentFrame)
    $('#frame').text(parseInt(index) + 1);
  });

  // $('#pins-0').click(function() {
  //   if (currentFrame.roll === 1) {
  //     console.log(currentFrame.play1(0))
  //     console.log(currentFrame.nextRoll())
  //     console.log(currentFrame)
  //   }else if (currentFrame.roll === 2) {
  //     console.log(currentFrame.play2(0))
  //     console.log(currentFrame)
  //     console.log(currentFrame.nextRoll())
  //   }
  // });

  // $('#pins-1').click(function() {
  //   if (currentFrame.roll === 1) {
  //     console.log(currentFrame.play1(1))
  //     currentFrame.nextRoll()
  //     console.log(currentFrame)
  //   }else if (currentFrame.roll === 2) {
  //     console.log(currentFrame.play2(1))
  //     console.log(currentFrame)
  //     currentFrame.nextRoll()
  //   }
  // });
  //
  // $('#pins-2').click(function() {
  //   if (currentFrame.roll === 1) {
  //     console.log(currentFrame.play1(2))
  //     currentFrame.nextRoll()
  //     console.log(currentFrame)
  //   }else if (currentFrame.roll === 2) {
  //     console.log(currentFrame.play2(2))
  //     console.log(currentFrame)
  //     currentFrame.nextRoll()
  //   }
  // });
  //
  // $('#pins-3').click(function() {
  //   if (currentFrame.roll === 1) {
  //     console.log(currentFrame.play1(3))
  //     currentFrame.nextRoll()
  //     console.log(currentFrame)
  //   }else if (currentFrame.roll === 2) {
  //     console.log(currentFrame.play2(3))
  //     console.log(currentFrame)
  //     currentFrame.nextRoll()
  //   }
  //
  // })
  $('[id*=pins]').each(function() {
    $(this).on("click", function(){
      var pins = $(this).val()
      if (currentFrame.roll === 1) {
        $('#current-roll').text(currentFrame.roll)
        console.log(currentFrame.play1(parseInt(pins)))

        for (var i = 10; i > (10-parseInt(pins)); i--) {
        $("#pins-" + i).hide();
      }
           currentFrame.nextRoll()
           console.log(currentFrame)
         }else if (currentFrame.roll === 2) {
           $('#current-roll').text(currentFrame.roll)
           console.log(currentFrame.play2(parseInt(pins)))
           for (var i = 0; i <=10; i++) {
          $("#pins-" + i).show();
        }
           console.log(currentFrame)
           currentFrame.nextRoll()
         }

    });

  })










})
