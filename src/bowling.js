
function Bowling(){
  this.framesTally = []; //record of all scores
  this.playing = true;
  this.framesNumber = 0; //number of frames played
  this.bonusTally = [];
  this.gameTotal = 0;
  this.secondLastFrameTotal = 0;
  this.thirdLastFrameTotal = 0;
  this.bonusFlattenedTotal = 0;
}

//if roll 9 times, then strike, then one more game then
//playing = !playing

Bowling.prototype.checkPlaying = function(){

  lastFrame = this.framesTally[this.framesTally.length-1];

  if (this.framesNumber === 10){
    if ((lastFrame[0] + lastFrame[1]) < 10){
      this.playing = false;
      // return 'Last frame played'
    }
  }

  if (this.framesNumber === 11){
    if ((lastFrame[0] + lastFrame[1]) < 10){
      this.playing = false;
      // return 'Last frame played'
    }
  }

  if (this.framesNumber === 12){
    if ((lastFrame[0] + lastFrame[1]) < 10){
      this.playing = false;
      // return 'Last frame played'
    }
  }

  if (this.framesNumber === 13){
    this.playing = false;
    // return 'Last frame played'
  }
};

Bowling.prototype.total = function(){

//flatten array of arrays.  concat function needed due to array of array.
    var flattenedFirstTime = this.framesTally.reduce(function(x,y){
      return x.concat(y);
    });

    console.log(flattenedFirstTime);
  //this is to sum the flattened array
    var flattenedFinal = flattenedFirstTime.reduce(function(c,d){
      return c + d;
    });

    console.log(flattenedFinal);

  //flatten bonus array

    this.bonus_review();

    if (this.bonusTally.length > 0){

      var bonusFlattened = this.bonusTally.reduce(function(p,q){
        return p.concat(q);
      });

      this.bonusFlattenedTotal = bonusFlattened.reduce(function(f,g){
        return f + g;
      });
    }

    gameTotal = flattenedFinal+this.bonusFlattenedTotal;

    return gameTotal;
};

Bowling.prototype.roll = function(bowlOne,bowlTwo){

  if(this.playing === false){
    throw new Error('The game has ended');
  } else if ((bowlOne + bowlTwo) > 10) {
    throw new Error('Maximum pins are 10');
  }

  this.framesTally.push([bowlOne,bowlTwo]); //this pushes the next two bowls onto an array

  this.framesNumber += 1;

  this.checkPlaying();
};

Bowling.prototype.bonus_review = function(){
  var framesTally = this.framesTally;
  //if a strike occured in second last frame, repeat the last frame in bonusTally
  if (this.framesNumber > 1){
    if((framesTally[framesTally.length - 2][0]) === 10){
      this.bonusTally.push(framesTally[framesTally.length-1]);
    //if a spare happend in second last frame, push another array with the first bowl of last frame repeated
    } else if ((framesTally[framesTally.length - 2][0])+(framesTally[framesTally.length - 2][1]) === 10){
      this.bonusTally.push([framesTally[framesTally.length-1][0],0]);
    }
  }

  if (this.framesNumber > 2){
    if ((framesTally[framesTally.length - 1][0]) === 10  && (framesTally[framesTally.length - 2][0]) === 10 && (framesTally[framesTally.length - 3][0]) === 10 ){
        this.thirdLastFrameTotal = 30;
        this.bonusTally.push(10);
        console.log(this.bonusTally);

        console.log("3 tens occured");
    }
  }
};


//code to identify individual frame and sum
Bowling.prototype.frameSum = function(frame){

  var frameNo = frame-1;

  var selectedFrame = this.framesTally[frameNo];

  //calculates the 2nd last frame it was a strike or spare
  if (frameNo >= 1){
    if ((this.framesTally[frameNo-1][0])===10){
      this.secondLastFrameTotal = 10 + selectedFrame[0] + selectedFrame[1];

    } else if ((this.framesTally[frameNo-1][0]+this.framesTally[frameNo-1][1])===10){
      this.secondLastFrameTotal = 10 + selectedFrame[0];
      console.log(this.secondLastFrameTotal);
    } else {
      this.secondLastFrameTotal = this.framesTally[frameNo-1][0] + this.framesTally[frameNo-1][1];
    }
  }

  //result is sum of frame just bowled - does not call bonus

  var result = selectedFrame.reduce(function(x,y){
    return x + y;
  });

  return result;
};
