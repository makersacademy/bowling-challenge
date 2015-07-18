var game = function() {
  var frameNumber = 0;
  this.gameTotal = 0;
  this.frames = [frame1 = new frame,
                 frame2 = new frame,
                 frame3 = new frame,
                 frame4 = new frame,
                 frame5 = new frame,
                 frame6 = new frame,
                 frame7 = new frame,
                 frame8 = new frame,
                 frame9 = new frame,
                 frame10 = new tenthFrame];

  game.prototype.addScore = function(score) {
    try{
    this.frames[frameNumber].scoreInput(score);
    }
    catch(e){
      alert("You have already entered two scores")
    }
    var prevFrame = frameNumber-1;
    if(prevFrame >= 0){
      if(this.frames[frameNumber].strike == false && this.frames[frameNumber].full && this.frames[prevFrame].strike == true){
        for(n = frameNumber; n > 0 ; n--){
          if(this.frames[n-1].stike == false) {break;}
          this.frames[n-1].total += this.frames[n].total;
        }
      }

      if(this.frames[prevFrame].spare == true && this.frames[frameNumber].full){
        this.frames[prevFrame].total += this.frames[frameNumber].scores[0]     
      }
      }
    if(this.frames[frameNumber].full){
      nextFrame();
    }
  };

  game.prototype.totalCalc = function() {
    for(n = 0; n < 10; n ++){
      console.log("Frame Number:" + (n+1));
      console.log(this.frames[n].total)
      console.log(this.frames[n].spare)
      console.log(this.frames[n].full)
      console.log(this.frames[n].strike)
      this.gameTotal += this.frames[n].total
    }
  };
  

  var nextFrame = function() {
    frameNumber += 1;
    return "Frame Number " + (frameNumber + 1);
  };

  var prevFrame = function() {
    frameNumber -= 1;
    return "Frame Number " + (frameNumber + 1);
  };



};
