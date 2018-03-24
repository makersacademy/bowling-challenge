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

  $('#pins-0').click(function() {
    if (currentFrame.roll === 1) {
      console.log(currentFrame.play1(0))
      console.log(currentFrame.nextRoll())
      console.log(currentFrame)
    }else if (currentFrame.roll === 2) {
      console.log(currentFrame.play2(0))
      console.log(currentFrame)
      console.log(currentFrame.nextRoll())
    }
  });

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
      console.log($(this).val())
      console.log('hello')
      console.log(this.val)
    });

  })










})
