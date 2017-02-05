'use strict';

function Game() {
   this._frame= [];
   this._new_game = Array(10).fill(this._frame);
}


Game.prototype.createFrame = function(throw1, throw2) {
  return this._frame.push(throw1, throw2);
}

Game.prototype.frameScore = function(frame){
  return frame[0] + frame[1]
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
   if (game[i][0] === 10) {
    var arr = game[i].push(game[i+1][0], game[i+1][1]);
   }
  }
  return arr;
  console.log(arr);
};

Game.prototype.strikes = function(game){
  for (var i = 0; i < 10; i++) {
    if (game[i][0] === 10){return game[i]}
    else {return []}
  }
};

Game.prototype.spare = function(game){
  for (var i = 0; i < 10; i++) {
    if (game[i][0] !==10 && (game[i][0] + game[i][1] === 10)){return game[i]}
    else {return []}
  }
};


Game.prototype.checkGame = function(game){
  var game_with_strike = this.strikes(game);
  var game_with_spare = this.spare(game);
  if (game_with_strike.length !== 0 || game_with_spare.length !== 0)
  {this.gameScoreComplex(game);}
  else
  {this.gameScoreOrdinary(game);}
};
