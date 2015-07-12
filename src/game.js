var game = function() {
  this.frameNumber = 0;
  this.frames = [frame1 = new frame,
                 frame2 = new frame,
                 frame3 = new frame,
                 frame4 = new frame,
                 frame5 = new frame,
                 frame6 = new frame,
                 frame7 = new frame,
                 frame8 = new frame,
                 frame9 = new frame,
                 frame10 = new frame];

  game.prototype.addScore = function(score) {
    try{
    this.frames[this.frameNumber].scoreInput(score);
    }
    catch(e){
      alert("You have already entered two scores")
    }
  };

  game.prototype.nextFrame = function() {
    this.frameNumber += 1;
    return "Frame Number " + (this.frameNumber + 1);
  };


};
