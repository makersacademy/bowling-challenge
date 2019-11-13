"use scrict";
function BowlingBoard () {
  this.frameList = [];
  this.currentFrame;

  BowlingBoard.prototype.startNewFrame = function(){
    this.frameList.push(new Frame());
    this.currentFrame = this.frameList[this.frameList.length-1];
    return this.whichFrameAndRoll();
  }

  // BowlingBoard.prototype.updateCurrentFrame = ()=>{
  //   this.currentFrame.updateFrameResult();
  // }

  BowlingBoard.prototype.whichFrameAndRoll = function(){
    var frameNumber = this.frameList.length;
    var rollNumber = this.currentFrame.score.length;

    if(this.currentFrame.result === "strike" && frameNumber == 10){
      return "Frame #" + frameNumber + " Bonus roll #" + rollNumber;
    }

    if(this.currentFrame.result === "spare" && frameNumber == 10){
      return "Frame #" + frameNumber + " Bonus roll #1";
    }

    return "Frame #" + frameNumber + " Roll #" + (rollNumber+1);
  }

  BowlingBoard.prototype.updateBonus = function(){
    var numberOfFrames = this.frameList.length;
    for(var i = 0; i < numberOfFrames; i++){
      var repeatTime;
      var currentFrame = this.frameList[i];

      if(currentFrame.result === "normal"){continue;}
      else if(currentFrame.result === "strike"){
        repeatTime = 2;
      }
      else{
        repeatTime = 1;
      }

      if(currentFrame.result === "strike" && currentFrame.bonus.length == 2){return;}
      if(currentFrame.result === "spare" && currentFrame.bonus.length == 1){return;}

      this.searchAndAddBonus(currentFrame, this.frameList.slice(i+1, numberOfFrames), repeatTime);
      if(currentFrame.bonus.length != repeatTime){
        currentFrame.resetBonus();
      }
    }
  }

  BowlingBoard.prototype.searchAndAddBonus = function(targetFrame, searchedFrames, repeatTime){
    var currentFrame;
    for(var i = 0; i < searchedFrames.length; i++){
      currentFrame = searchedFrames[i];
      for(var j = 0; j < currentFrame.score.length; j++){
        if(targetFrame.bonus.length == repeatTime){
          return;
        }
        targetFrame.setBonus(currentFrame.score[j]);
      }
    }
  }

  BowlingBoard.prototype.calculateSubTotal = function(){
    var result = this.frameList.map(function(element){
      return element.calculateTotalScore();
    });

    return result;
  }

  BowlingBoard.prototype.calculateTotal = function(){
    var subtotal = this.calculateSubTotal();
    console.log(subtotal);
    return subtotal.reduce((a,b)=>a+b, 0);
  }

  BowlingBoard.prototype.proceed = function(){
    if(this.currentFrame.result === "normal" && this.currentFrame.score.length == 2){
      if(this.frameList.length == 10){
        return 1;
      }
      else{
        this.startNewFrame();
        return 0;
      }
    }
    else if(this.currentFrame.result != "normal"){
      if(this.frameList.length == 10){  //last frame
        if(this.currentFrame.score.length + this.currentFrame.bonus.length == 3){
          debugger;
          return 1;
        }
        else if(this.currentFrame.score.length == 2 && this.currentFrame.score[1] != 10 && this.currentFrame.result == "strike"){
          debugger;
          return 1;
        }
        else{
          return 0;
        }
      }
      else{
        this.startNewFrame();
        return 0;
      }
    }
    else{return 0}


  }







}
