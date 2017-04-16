function bowlGame(game, balls){
  for(var i = 0; i <= balls.length -1 ; i++){
    game.bowl(balls[i]);
  }
}

function fuzzGame(game){
  while(!game.gameComplete()){
    game.bowl(Math.round(Math.random() * (game._getCurrentFrame()._getPins())));
  }
}
