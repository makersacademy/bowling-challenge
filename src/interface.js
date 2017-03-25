$ (document).ready(function(){
  var bowling = new Bowling ();

  // $('#pins').html(bowling.pinsKnockedOver());

  $('#roll').click(function(){
    bowling.pinsKnockedOver();
    bowling.check();
    bowling.settingRollsPerGame();
    $('#pins').html(bowling.score());
  });


  $('#score').html(bowling.score());





});
