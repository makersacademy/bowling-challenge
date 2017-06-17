var Game = function() {
  var DEFAULT_SCORE = 0;
  this.score = DEFAULT_SCORE;
  this.frames = [];

 Game.prototype.finalScore = function(){
   return this.score;
 }

 Game.prototype.add_frame = function(frame){
   if(this.frames.length >= 10){
     throw new Error('Each game has 10 frames');
   }else{
     this.frames.push(frame);
 }
 }


 }
