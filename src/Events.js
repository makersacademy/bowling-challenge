$(document).ready(function(){
  var game = new Game();
  var roll1_1 = document.getElementById("roll-1.1");
  var roll1_2 = document.getElementById("roll-1.2");
  var roll2_1 = document.getElementById("roll-2.1");
  var roll2_2 = document.getElementById("roll-2.2");
  var roll3_1 = document.getElementById("roll-3.1");
  var roll3_2 = document.getElementById("roll-3.2");
  var roll4_1 = document.getElementById("roll-4.1");
  var roll4_2 = document.getElementById("roll-4.2");
  var roll5_1 = document.getElementById("roll-5.1");
  var roll5_2 = document.getElementById("roll-5.2");
  var roll6_1 = document.getElementById("roll-6.1");
  var roll6_2 = document.getElementById("roll-6.2");
  var roll7_1 = document.getElementById("roll-7.1");
  var roll7_2 = document.getElementById("roll-7.2");
  var roll8_1 = document.getElementById("roll-8.1");
  var roll8_2 = document.getElementById("roll-8.2");
  var roll9_1 = document.getElementById("roll-9.1");
  var roll9_2 = document.getElementById("roll-9.2");
  var roll10_1 = document.getElementById("roll-10.1");
  var roll10_2 = document.getElementById("roll-10.2");


  $("#total-score").text(game.totalScore());

  $('table').on('change','select', function() {

    if ($(this).attr('id') === 'roll-1.1') {
      $(this).hide();
      $(this).parent().html(this.value);
      $("#round-1").text(roll1_1.value);
    }

    if ($(this).attr('id') === 'roll-1.2') {
      game.roll(parseInt(roll1_1.value),parseInt(roll1_2.value));
      $(this).hide();
      $(this).parent().html(this.value);
      $("#round-1").text(game.frameScore(1));
      $("#total-score").text(game.totalScore());
    }
  });

});
