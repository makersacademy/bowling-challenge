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
   var frames = this.frames;
   var game = this;
   frames.forEach(function(frame, index){
     score += frame.score_no_bonus();
     score += game.calculateSpareBonus(index);
   });
   return score;
 };


  Game.prototype.calculateSpareBonus = function(index){
    var frame = this.frames[index];
    var next_index = index + 1;
    if(frame.is_spare()){
      if(next_index < this.frames.length){
        return this.frames[next_index].rolls[0];
      }else{
        return frame.rolls[2];
      }
    }
    return 0;
  };


 }
