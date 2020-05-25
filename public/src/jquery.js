$(document).ready(function() {

  var game = new Game();
  game.create(Frame);

    setScores = function(){
      $('#frame1shot1').html(game.frames[0].firstroll || 0);
      $('#frame1shot2').html(game.frames[0].secondroll || 0);
      $('#frame2shot1').html(game.frames[1].firstroll || 0);
      $('#frame2shot2').html(game.frames[1].secondroll || 0);
      $('#frame3shot1').html(game.frames[2].firstroll || 0);
      $('#frame3shot2').html(game.frames[2].secondroll || 0);
      $('#frame4shot1').html(game.frames[3].firstroll || 0);
      $('#frame4shot2').html(game.frames[3].secondroll || 0);
      $('#frame5shot1').html(game.frames[4].firstroll || 0);
      $('#frame5shot2').html(game.frames[4].secondroll || 0);
      $('#frame6shot1').html(game.frames[5].firstroll || 0);
      $('#frame6shot2').html(game.frames[5].secondroll || 0);
      $('#frame7shot1').html(game.frames[6].firstroll || 0);
      $('#frame7shot2').html(game.frames[6].secondroll || 0);
      $('#frame8shot1').html(game.frames[7].firstroll || 0);
      $('#frame8shot2').html(game.frames[7].secondroll || 0);
      $('#frame9shot1').html(game.frames[8].firstroll || 0);
      $('#frame9shot2').html(game.frames[8].secondroll || 0);
      $('#frame10shot1').html(game.frames[9].firstroll || 0);
      $('#frame10shot2').html(game.frames[9].secondroll || 0);
      $('#frame10shot3').html(game.frames[9].thirdShot || 0);
      $('#frame1').html(parseInt(game.frames[0].score) || 0);
      $('#frame2').html(game.frames[1].score || 0);
      $('#frame3').html(game.frames[2].score || 0);
      $('#frame4').html(game.frames[3].score || 0);
      $('#frame5').html(game.frames[4].score || 0);
      $('#frame6').html(game.frames[5].score || 0);
      $('#frame7').html(game.frames[6].score || 0);
      $('#frame8').html(game.frames[7].score || 0);
      $('#frame9').html(game.frames[8].score || 0);
      $('#frame10').html(game.frames[9].score || 0);
    };

    setScores();



    $('#submit').on('click', function() {
      event.preventDefault();
      enterScore();
      setScores();
    });

    console.log(game)

    var enterScore = function(){
      var score = $('#hit').val();
      $('#hit').val('');
      player.bowl(score, game.frames[0]);
    };

  });