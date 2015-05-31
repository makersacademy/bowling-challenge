player = new Player;

$(document).ready( function () {
  var x = 0;
  var frames = 0;
  $('#button-group1 input').click(function () {
    var pins1 = $("form input[type=radio]:checked").val();
    player.firstBowl(pins1);
    if(pins1 == 10) {
      $('#hits' + x).val(pins1);
      $('#hits' + (x + 1)).val("X");
      var sum = 0;
      for (i = 0; i < player.score.length; i++) {
        $("#score" + i).val(player.score[i]);
        sum += player.score[i];
      }
    x += 2;
    $("#total").val(sum);
    frames = player.score.length + 1;
    $('#frames').html('Frame ' + frames);
    }
    else {
      $('#hits' + x).val(pins1);
      x ++;
    }
    $("input:radio").removeAttr("checked");
  });
    $('#button-group2 input').click(function () {
    var pins2 = $("form input[type=radio]:checked").val();
    player.secondBowl(pins2);
    $('#hits' + x).val(pins2);
    $("input:radio").removeAttr("checked");
    x ++;
    var sum = 0;
    for (i = 0; i < player.score.length; i++) {
      $("#score" + i).val(player.score[i]);
      sum += player.score[i];
    }
    $("#total").val(sum);
    frames = player.score.length + 1;
    $('#frames').html('Frame ' + frames);
  });

});

