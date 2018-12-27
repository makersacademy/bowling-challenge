$(document).ready(function () {

  var game = new Game();

  for (let i = 0; i < 11; i += 1) {
    $('#score' + i).click(function () {
      markInput(i);
      frScore();
      finalFrScore();
      accumScore();
      // disableButtons(i);
    })
  };

  function markInput(i){
    var cur_frame = game.cur_frame;
    var cur_roll = game.cur_roll;
    $('#frame' + cur_frame + "_r" + cur_roll).text(game.knockDown(i));
  }

  function frScore(){
    for (let i = 1; i < 10; i++) {
      if($.trim($('#frameScore' + i).html())=='') {
        $('#frameScore' + i).text(game.frameScore(i));
      }
    } 
  }

  function finalFrScore() {
    if (!game.gameRecord[9]) { return }
    $('#frameScore10').text(game.finalFrScore())
  }

  function accumScore(){
    for (let i = 1; i <= 10; i++) {
      $('#totalScore' + i).text(game.accumScore(i));
    }
  }


  // function disableButtons (num) {
  //   var to_disable = 11 - num;
  //   console.log(to_disable)
  //   for (let i = to_disable; i <= 11; i++) {
  //     $('#score' + i).hide();
  //   }
  // }

  // $("#hide").click(function(){
  //   var cur_roll = game.cur_roll;
  //   if (cur_roll == 1) {$("#score0").hide();}
  //   else {$("#score0").show();}
  // });

})