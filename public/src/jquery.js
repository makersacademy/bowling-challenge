$(document).ready(function() {
  var i = 0 ;
  var score = 0;
  var game = new Game();
  game.create(Frame);

  $('.pins').on('click',function() {
    var id = $(this).attr('id')
    score = parseInt(id)
    enterScore();
 });

 $('#button').on('click',function() {
  $('#total_last').text(game.score());

});
  function enterScore(){
    game.frames[i].receiveShot(score)
    $('#frame' + (i+1) + 'shot1').text(game.frames[i].firstroll || 0);
    $('#frame' + (i+1) + 'shot2').text(game.frames[i].secondroll || 0);
    $('#frame' + (i+1)).text(game.frames[i].score|| 0);
    if ( game.frames[i].secondroll !== null || game.frames[i].isStrike() ) {return i++;}
  };

 
  });