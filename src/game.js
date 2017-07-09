function Game() {
   this.total = 0;
   this.frames = [];
   this.framesLeft = 10;
 }

 Game.prototype.addFrame = function(frame){
   if (this.framesLeft > 0) {
     this.frames.push(frame);
     this.framesLeft -= 1;
   }
   else {
     return "Game over";
   }
 }
