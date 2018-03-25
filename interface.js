$(document).ready(function() {
  var score = new Score;
  var game = new Game;
  var currentFrame;
  game.start();
  var roll = 1


  $('#confirm').hide()
  $('#edit').hide()

  $('#current-frame').change(function() {
    var index = $('select#current-frame').val();
    console.log(index)
    currentFrame = game._allFrames[index];
    console.log(currentFrame)
    $('#frame').text(parseInt(index) + 1);
    console.dir(index);
  });
    console.log($('body'));

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
           $('#confirm').hide()
           $('#edit').hide()
         }else if (currentFrame.roll === 2) {
           $('#current-roll').text(currentFrame.roll)
           console.log(currentFrame.play2(parseInt(pins)))

          currentFrame.nextRoll()
          console.log(currentFrame.bonusAward());
          $('#confirm').show()
          $('#edit').show()

        }
           console.log(currentFrame)
          $('#edit').click(function() {
            for (var i = 0; i <=10; i++) {
           $("#pins-" + i).show();
           $('#edit').hide()
           $('#confirm').hide()
         }
          })



    });

  })










})
