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
     score += game.calculateStrikeBonus(index);
   });
   return score;
 };

  Game.prototype.calculateSpareBonus = function(index){
    if(this.frames[index].is_spare()){
      if(index + 1 < this.frames.length){
        return this.frames[index + 1].rolls[0];
      }else{
        return this.frames[index].rolls[2];
      }
    }
    return 0;
  };

  Game.prototype.calculateStrikeBonus = function(index){
    if(this.frames[index].is_strike()){
      if(index + 1 < this.frames.length){
        return (this.frames[index + 1].rolls[0] + this.frames[index + 1].rolls[1]);
      }else{
        return this.frames[index].rolls[2];
      }
    }
    return 0;
  };






 }
