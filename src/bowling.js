// *** GREAT DIFFICULTY SAVING AN ARRAY TO VARIABLE
// var play = b.frameSelect(2);
// [3, 6]
// undefined
//
// play
// console.log(play)
// undefined
// ***



function Bowling(){
  this.framesTally = []; //record of all scores
  this.playing = true;
  this.framesNumber = 0; //number of frames played
}


//if roll 9 times, then strike, then one more game then
//playing = !playing

Bowling.prototype.checkPlaying = function(){

  lastFrame = this.framesTally[this.framesTally.length-1];


  if (this.framesNumber === 10){
    if ((lastFrame[0] + lastFrame[1]) < 10){
      this.playing = false;
      // return 'Last frame played'; this BREAKS THE TEST
    }
  }

  if (this.framesNumber === 11){
    if ((lastFrame[0] + lastFrame[1]) < 10){
      this.playing = false;
      // return 'Last frame played';
    }
  }

  if (this.framesNumber === 12){
    if ((lastFrame[0] + lastFrame[1]) < 10){
      this.playing = false;
      // return 'Last frame played';
    }
  }

  if (this.framesNumber === 13){
    this.playing = false;
    // return 'Last frame played';
  }
};

Bowling.prototype.total = function(){

    this.bonus_review(); //this calculates the bonus

    //flatten the framesTally - an array of array
    var framesTally = this.framesTally;

    var unpackedTally = framesTally.reduce(function(a,b){
    a.concat(b);
    return a.concat(b);
    });

    //add all scores in the framesTally together
    var total = 0;

    for(var i=0; i<unpackedTally.length; i++){
      total += unpackedTally[i];
    }

    return total;

};


Bowling.prototype.roll = function(bowlOne,bowlTwo){

  if(this.playing === false){
    throw new Error('The game has ended');
  }

  this.framesTally.push([bowlOne,bowlTwo]); //this pushes the next two bowls onto an array

  this.framesNumber += 1;

  this.total();

  this.checkPlaying();


};

Bowling.prototype.bonus_review = function(){
  var framesTally = this.framesTally;
  //if a strike occured in second last frame, repeat the last frame in frameTally
  if (this.framesNumber > 1){
    if((framesTally[framesTally.length - 2][0]) === 10){
      framesTally.push(framesTally[framesTally.length-1]);
    //if a spare happend in second last frame, push another array with the first bowl of last frame repeated
    } else if ((framesTally[framesTally.length - 2][0])+(framesTally[framesTally.length - 2][1]) === 10){
        framesTally.push([framesTally[framesTally.length-1][0],0]);
    }
  }
};


Bowling.prototype.frameSum = function(frame){
  var frameNo = frame-1;

  var selectedFrame = this.framesTally[frameNo];

  console.log(selectedFrame);

  var result = selectedFrame.reduce(function(x,y){
    return x + y;
  });

  return result;

};
