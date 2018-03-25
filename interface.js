$(document).ready(function() {
  var score = new Score;
  var game = new Game;
  var currentFrame;
  game.start();




  $('#confirm').hide()
  $('#edit').hide()

  $('#current-frame').change(function() {
    var index = $('select#current-frame').val();
    console.log(index)
    currentFrame = game._allFrames[index];
    console.log(currentFrame)
    $('#frame').text(parseInt(index) + 1);
    console.dir(index);
    for (var i = 0; i <=10; i++) {
    $("#pins-" + i).show();
   }
    $('#edit').hide();
    $('#confirm').hide();

  });

  $('[id*=pins]').each(function() {
    $(this).on("click", function(){
      var pins = $(this).val()
      if (currentFrame.roll === 1) {
        $('#current-roll').text(currentFrame.roll)
        console.log(currentFrame.play1(parseInt(pins)))

        for (var i = 10; i > (10-parseInt(pins)); i--) {
        $("#pins-" + i).hide();
      }
           console.log(currentFrame.nextRoll())

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

          $('#edit').unbind('click').click(function() {
            DisplayButtons()

         });

         $('#confirm').unbind('click').click(function() {
           console.log(currentFrame)
           console.log(score.totalScore(currentFrame));
           console.log(score.giveBonus(currentFrame));
           DisplayButtons()
         });

         $('#see-score').text(score.seeScore())


         function DisplayButtons() {
           for (var i = 0; i <=10; i++) {
           $("#pins-" + i).show();
          }
           $('#edit').hide();
           $('#confirm').hide();

         }
    });

  })










})
