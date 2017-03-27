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

var score1, score2, score3, score4, score5, score6, score7, score8, score9, score10
function roll(rollScore) {

  game.play(rollScore);

  $('#f1r1').html(game.getFrames()[0].getRolls()[0].getPinsKnocked());
  $('#f1r2').html(function(){
    if(game.getFrames()[0].hasStrike()){
      return 'x'
    }else if(game.getFrames()[0].isSpare()) {
      return '/'
    }else {
      return game.getFrames()[0].getRolls()[1].getPinsKnocked()
    }
  });

  if(game.getFrames()[0].isDone()){
    console.log(game.getTotalScore())
    score1 = score1 || game.getTotalScore();
    console.log(score1)
    $('#f1score').html(score1);
  }

  $('#f2r1').html(game.getFrames()[1].getRolls()[0].getPinsKnocked());
  $('#f2r2').html(function(){
    if(game.getFrames()[1].hasStrike()){
      return 'x'
    }else if(game.getFrames()[1].isSpare()) {
      return '/'
    }else {
      return game.getFrames()[1].getRolls()[1].getPinsKnocked()
    }
    });

  if(game.getFrames()[1].isDone()){
    score2 = score2 || game.getTotalScore();
    $('#f2score').html(score2);
  }

  $('#f3r1').html(game.getFrames()[2].getRolls()[0].getPinsKnocked());
  $('#f3r2').html(function(){
    if(game.getFrames()[2].hasStrike()){
      return 'x'
    }else if(game.getFrames()[2].isSpare()) {
      return '/'
    }else {
      return game.getFrames()[2].getRolls()[1].getPinsKnocked()
    }
    });

  if(game.getFrames()[2].isDone()){
    score3 = score3 || game.getTotalScore();
    $('#f3score').html(score3);
  }

  $('#f4r1').html(game.getFrames()[3].getRolls()[0].getPinsKnocked());
  $('#f4r2').html(function(){
    if(game.getFrames()[3].hasStrike()){
      return 'x'
    }else if(game.getFrames()[3].isSpare()) {
      return '/'
    }else {
      return game.getFrames()[3].getRolls()[1].getPinsKnocked()
    }
    });

  if(game.getFrames()[3].isDone()){
    score4 = score4 || game.getTotalScore();
    $('#f4score').html(score4);
  }

  $('#f5r1').html(game.getFrames()[4].getRolls()[0].getPinsKnocked());
  $('#f5r2').html(function(){
    if(game.getFrames()[4].hasStrike()){
      return 'x'
    }else if(game.getFrames()[4].isSpare()) {
      return '/'
    }else {
      return game.getFrames()[4].getRolls()[1].getPinsKnocked()
    }
    });

  if(game.getFrames()[4].isDone()){
    score5 = score5 || game.getTotalScore();
    $('#f5score').html(score5);
  }

  $('#f6r1').html(game.getFrames()[5].getRolls()[0].getPinsKnocked());
  $('#f6r2').html(function(){
    if(game.getFrames()[5].hasStrike()){
      return 'x'
    }else if(game.getFrames()[5].isSpare()) {
      return '/'
    }else {
      return game.getFrames()[5].getRolls()[1].getPinsKnocked()
    }
    });

  if(game.getFrames()[5].isDone()){
    score6 = score6 || game.getTotalScore();
    $('#f6score').html(score6);
  }

  $('#f7r1').html(game.getFrames()[6].getRolls()[0].getPinsKnocked());
  $('#f7r2').html(function(){
    if(game.getFrames()[6].hasStrike()){
      return 'x'
    }else if(game.getFrames()[6].isSpare()) {
      return '/'
    }else {
      return game.getFrames()[6].getRolls()[1].getPinsKnocked()
    }
    });

  if(game.getFrames()[6].isDone()){
    score7 = score7 || game.getTotalScore();
    $('#f7score').html(score7);
  }

  $('#f8r1').html(game.getFrames()[7].getRolls()[0].getPinsKnocked());
  $('#f8r2').html(function(){
    if(game.getFrames()[7].hasStrike()){
      return 'x'
    }else if(game.getFrames()[7].isSpare()) {
      return '/'
    }else {
      return game.getFrames()[7].getRolls()[1].getPinsKnocked()
    }
    });

  if(game.getFrames()[7].isDone()){
    score8 = score8 || game.getTotalScore();
    $('#f8score').html(score8);
  }

  $('#f9r1').html(game.getFrames()[8].getRolls()[0].getPinsKnocked());
  $('#f9r2').html(function(){
    if(game.getFrames()[8].hasStrike()){
      return 'x'
    }else if(game.getFrames()[8].isSpare()) {
      return '/'
    }else {
      return game.getFrames()[8].getRolls()[1].getPinsKnocked()
    }
    });

  if(game.getFrames()[8].isDone()){
    score9 = score9 || game.getTotalScore();
    $('#f9score').html(score9);
  }

  $('#f10r1').html(game.getFrames()[9].getRolls()[0].getPinsKnocked());
  $('#f10r2').html(game.getFrames()[9].getRolls()[1].getPinsKnocked());
  $('#f10r3').html(game.getFrames()[9].getRolls()[2].getPinsKnocked());

if(game.getFrames()[9].isDone()){
  score10 = score10 || game.getTotalScore();
  $('#f10score').html(score10);
}


}

$('#newgame').click(function(){
  window.location.reload(true);
});
