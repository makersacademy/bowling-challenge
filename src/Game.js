'use strict';

function Game(){
  this._frames = [
    {1: [roll1, roll2]},
    {2: [roll1, roll2]},
    {3: [roll1, roll2]},
    {4: [roll1, roll2]},
    {5: [roll1, roll2]},
    {6: [roll1, roll2]},
    {7: [roll1, roll2]},
    {8: [roll1, roll2]},
    {9: [roll1, roll2]},
    {10: [roll1, roll2]}
  ];
  this._score = 0;
};

Game.prototype.frames = function(){
  return this._frames.length;
};
//
// Game.prototype.score = function(){
//
// };
//
// Game.prototype.frame = function(){
//
// };

Game.prototype.create = function(){
  Game.new;
};
