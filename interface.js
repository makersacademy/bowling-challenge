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

        for (var i = 10; i > (10-parseInt(pins)); i--) {
        $("#pins-" + i).hide();
      }
           console.log(currentFrame.nextRoll())

           $('#confirm').hide()
           $('#edit').hide()
         }else if (currentFrame.roll === 2) {
           $('#current-roll').text('1')
           console.log(currentFrame.play2(parseInt(pins)))

          currentFrame.nextRoll()
          console.log(currentFrame.bonusAward());
          $('#scores').hide();
          $('#confirm').show()
          $('#edit').show()
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
     ShowNextFrameMessage();
     AppendScorecard();
   });

    function ShowNextFrameMessage() {
      $('#edit').hide();
      $('#confirm').hide();
      $('#next').show();
      $('#next').text('Please pick the next frame you wish to record')
    }

    function AppendScorecard() {
      var index = $('select#current-frame').val();
      $('#scorecard').append('<tr><td>' + (parseInt(index) + 1) +
      '</td><td>' + currentFrame.rollOne + '</td><td>' +
      currentFrame.rollTwo + '</td><td>' + score.currentTotalScore + '</td></tr>')

    }










})
