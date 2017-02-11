'use strict';

function Game() {
   this._frame= [];
   this._new_game = [];
}

Game.prototype.createFrame = function(throw1, throw2) {
  return this._frame.push(throw1, throw2);
}

Game.prototype.frameScore = function(frame){
  return frame[0] + frame[1]
}

Game.prototype.strikes = function(frame) {
  return frame[0] === 10;
}

Game.prototype.spare = function(frame) {
  return frame[0] !== 10 && (frame[0] + frame[1]) === 10;
}

Game.prototype.gameSize = function(game){
  if (game.length > 10) {
    return game.slice(0,10);
  } else {
    return game;
  }
  return this.gameScoreComplex(game);
}

Game.prototype.gameScoreOrdinary = function(game) {
     var flatten_array = game.reduce(function(a, b){
     return a.concat(b);
  });
    var final_score = flatten_array.reduce(function(a,b){
        return a + b;
  });
  return final_score;
};

Game.prototype.gameScoreComplex = function(game){
  for (var i = 0; i < 9; i++) {
    if (this.strikes(game[i])) {
     game[i].push(game[i+1][0], game[i+1][1]);

    } else if (this.spare(game[i])){
       game[i].push(game[i+1][0]);
    } else {
      game[i];
    }
  }
  return this.gameScoreOrdinary(game);
};
