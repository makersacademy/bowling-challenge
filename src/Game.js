function Game(){
   this.frames = [];

Game.prototype.start = function() {
  for (var i=0; i < 10; i ++){
    this.frames[i] = new Frame();
  };
};
};
   //each Game game contains 10 frames
