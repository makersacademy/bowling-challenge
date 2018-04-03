$(document).ready(function() {
  var score = new Score;
  var game = new Game;
  var currentFrame;
  game.start();



  $('#scores').hide();
  $('#confirm').hide()
  $('#edit').hide()

  function DisplayButtons() {
    for (var i = 0; i <=10; i++) {
      $("#pins-" + i).show();
    }
    $('#scores').show();
    $('#edit').hide();
    $('#confirm').hide();

  }

  $('#current-frame').change(function() {
    var index = $('select#current-frame').val();
    console.log(index)
    currentFrame = game._allFrames[index];
    console.log(currentFrame)
    $('#frame').text(parseInt(index) + 1);
    console.dir(index);
    DisplayButtons();
    $('#next').hide();

  });

  $('[id*=pins]').each(function() {
    $(this).on("click", function(){
      var pins = $(this).val()

      if (currentFrame.roll === 1) {
        $('#current-roll').text('2')
        console.log(currentFrame.play1(parseInt(pins)))
         console.log(currentFrame.nextRoll())
           if ($('select#current-frame').val() === '9' && currentFrame.rollOne === 10) {
             $('#scores').show();
           }else{

             for (var i = 10; i > (10-parseInt(pins)); i--) {
             $("#pins-" + i).hide();
            }
           }



           $('#confirm').hide();
           $('#edit').hide();

         }else if (currentFrame.roll === 2) {
           $('#current-roll').text('1')
           console.log(currentFrame.play2(parseInt(pins)))
             if ($('select#current-frame').val() === '9' && currentFrame.rollTwo === 10){
               $('#frame').text('final');
               $('#scores').show();
               console.log(true);
               $('#confirm').hide()
               $('#edit').hide()
               $('#current-roll').text('Bonus roll for two strikes in final frame')

               $('[id*=pins]').each(function() {
                 $(this).on("click", function(){
                   var pins = $(this).val()
                   score.tenthTwoStrikes(parseInt(pins));
                   $('#scores').hide();
                   $('#confirm').show()
                   $('#edit').hide()
                   currentFrame.roll = 3
                 });
               });

             } else {


          currentFrame.nextRoll()
          console.log(currentFrame.bonusAward());
          $('#scores').hide();
          $('#confirm').show()
          $('#edit').show()
        }
    };

    $('#edit').unbind('click').click(function() {
      DisplayButtons();
      $('#next').hide();

   });
 });

});

   $('#confirm').unbind('click').click(function() {
     console.log(currentFrame)
     console.log(score.totalScore(currentFrame));
     console.log(score.giveBonus(currentFrame));
     AppendScorecard();
     if (currentFrame.roll === 3) {
       $('#extra-points').text('You were awarded bonus points')
       GameOver()
     }else if ($('select#current-frame').val() === '9') {
       GameOver()
     }else{

     ShowNextFrameMessage();
   }
   });

    function ShowNextFrameMessage() {
      $('#edit').hide();
      $('#confirm').hide();
      $('#next').show();
      $('#next').text('Please pick the next frame you wish to record')
    }

    function AppendScorecard() {
      var index = $('select#current-frame').val();
      $('#scorecard').append('<tr><td id="row-' + index + '-1">' + (parseInt(index) + 1) +
      '</td><td id="row-' + index + '-2">' + currentFrame.rollOne + '</td><td id="row-' + index + '-3">' +
      currentFrame.rollTwo + '</td><td id="row-' + index + '-4">' + score.currentTotalScore + '</td></tr>')

    }

    function GameOver() {
      $('#scores').hide();
      $('#confirm').hide()
      $('#edit').hide()
      $('#over').text('GAME OVER!')
    }













})
