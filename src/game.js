var Game = function() {
  this.frames = [];

 Game.prototype.add_frame = function(frame){
   if(this.frames.length >= 10){
     throw new Error('Each game has 10 frames');
   }else{
     return this.frames.push(frame);
 }
 }

 Game.prototype.finalScore = function(){
   var score = 0;
   this.frames.forEach(function(frame, index){
     score += frame.score_no_bonus();
   });
   return score;
 }


 }
