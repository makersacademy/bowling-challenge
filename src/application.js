player = new Player;

function calculateTotalPoints() {
  var sum = 0;
  for (i = 0; i < player.score.length; i++) {
    $("#score" + i).val(player.score[i]);
    sum += player.score[i];
  }
  $("#total").val(sum);
  frames = player.score.length + 1;
  if(frames < 11) {
    $('#frames').html('Frame ' + frames);
  }
  else
  {
    $('#frames').html("Game over!");
    $("input:radio").attr('disabled',true);
  }
}

$(document).ready( function () {
  var x = 0;
  var frames = 0;

  $('#button-group1 input').click(function () {
    var pins = $("form input[type=radio]:checked").val();
    if(player.firstHit == null) {
      player.firstBowl(pins);
      $('#hits' + x).val(pins);
      x ++;
      if(pins == 10) {
        calculateTotalPoints();
        $('#hits' + x).val("X");
        x ++ ;
      }
    }
    else {
      player.secondBowl(pins);
      $('#hits' + x).val(pins);
      x ++;
      calculateTotalPoints();
    }
    $("input:radio").removeAttr("checked");
  });

});

