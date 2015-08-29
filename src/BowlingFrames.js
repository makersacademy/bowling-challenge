function BowlingFrame() {
  this.subFrame = [0,0];
};

BowlingFrames = {
  list: []
};

var prepareGame = function() {
  for(var i=0; i < 10; i++){
    BowlingFrames.list[i] = new BowlingFrame();
  };
};