$ (document).ready(function(){
  var bowling = new Bowling ();

   
  $('#roll').click(function(){
    bowling.pinsKnockedOver();
     bowling.check();
     bowling.spare();
     bowling.settingRollsPerGame();
    $('#score').html(bowling.score());
    $('#pins').html(bowling.pins)
    $('#secondThrow').html(bowling.secondThrow)
    $('#thirdThrow').html(bowling.thirdThrow)
  });

  // $('#roll').click(function(){
  //   bowling.pinsKnockedOver();
  //   $('#pins').html(bowling.pinsKnockedOver());
  // });

  $('#score').html(bowling.score());





});
