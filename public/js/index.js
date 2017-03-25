$('#play').click(function(){
  alert('You clicked Play');
});

$('#getscore').click(function(){
  alert('You clicked Get Score');
});

function roll(rollScore) {
  alert(`Clicked ${rollScore}`);
  var game = new Game();
  game.play(rollScore);
  var score = game.getTotalScore();
  //console.log(score);
  document.getElementById("f10score").innerHTML = rollScore;
}

$('#newgame').click(function(){

});
