$('#play').click(function(){
  alert('You clicked Play');
});

$('#getscore').click(function(){
  alert('You clicked Get Score');
});

var game;

$(document).ready(function() {
  game = new Game();
});


function roll(rollScore) {
  alert(`Clicked ${rollScore}`);
  game.play(rollScore);
  $('#f1r1').html(game.getFrames()[0].getRolls()[0].getPinsKnocked());
  $('#f1r2').html(game.getFrames()[0].getRolls()[1].getPinsKnocked());
  $('#f2r1').html(game.getFrames()[1].getRolls()[0].getPinsKnocked());
  $('#f2r2').html(game.getFrames()[1].getRolls()[1].getPinsKnocked());
  $('#f3r1').html(game.getFrames()[2].getRolls()[0].getPinsKnocked());
  $('#f3r2').html(game.getFrames()[2].getRolls()[1].getPinsKnocked());
  $('#f4r1').html(game.getFrames()[3].getRolls()[0].getPinsKnocked());
  $('#f4r2').html(game.getFrames()[3].getRolls()[1].getPinsKnocked());
  $('#f5r1').html(game.getFrames()[4].getRolls()[0].getPinsKnocked());
  $('#f5r2').html(game.getFrames()[4].getRolls()[1].getPinsKnocked());
  $('#f6r1').html(game.getFrames()[5].getRolls()[0].getPinsKnocked());
  $('#f6r2').html(game.getFrames()[5].getRolls()[1].getPinsKnocked());
  $('#f7r1').html(game.getFrames()[6].getRolls()[0].getPinsKnocked());
  $('#f7r2').html(game.getFrames()[6].getRolls()[1].getPinsKnocked());
  $('#f8r1').html(game.getFrames()[7].getRolls()[0].getPinsKnocked());
  $('#f8r2').html(game.getFrames()[7].getRolls()[1].getPinsKnocked());
  $('#f9r1').html(game.getFrames()[8].getRolls()[0].getPinsKnocked());
  $('#f9r2').html(game.getFrames()[8].getRolls()[1].getPinsKnocked());
  $('#f10r1').html(game.getFrames()[9].getRolls()[0].getPinsKnocked());
  $('#f10r2').html(game.getFrames()[9].getRolls()[1].getPinsKnocked());
  $('#f10r3').html(game.getFrames()[9].getRolls()[2].getPinsKnocked());
  var score = game.getTotalScore();
  $('#f10score').html(score);
}

$('#newgame').click(function(){
  window.location.reload(true);
});
