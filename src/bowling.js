function Bowling(){
  this.framesTally = [];
  this.playing = true;
  this.framesNumber = 0;
}


//if roll 9 times, then strike, then one more game then
//playing = !playing


Bowling.prototype.checkPlaying = function(){
  console.log(this.framesTally[9][0] + this.framesTally[9][1]);
  

  if (this.framesNumber === 10){
    if ((this.framesTally[9][0] + this.framesTally[9][1]) < 10){
      this.playing = false;
    }
  };

  if (this.framesNumber === 11){
    if ((this.framesTally[10][0] + this.framesTally[10][1]) < 10){
      this.playing = false;
    }
  }

  if (this.framesNumber === 12){
    if ((this.framesTally[11][0] + this.framesTally[11][1]) < 10){
      this.playing = false;
    }
  }

  if (this.framesNumber === 13){
    this.playing = false;
  }

};


Bowling.prototype.total = function(){
  
    this.roll_review(); //should this be a function (instead of on a prototype?)

    //flatten the framesTally - an array of array
    var framesTally = this.framesTally;
    
    var unpackedTally = framesTally.reduce(function(a,b){
    a.concat(b); 
    return a.concat(b);
    });

    console.log(unpackedTally);
    
    //add all scores in the framesTally together
    var total = 0;

    for(i=0; i<unpackedTally.length; i++){
      total += unpackedTally[i];
    };

    return total;

};


Bowling.prototype.roll = function(bowlOne,bowlTwo){
  this.framesTally.push([bowlOne,bowlTwo]);
  this.framesNumber += 1;

  console.log(this.framesTally);
};

Bowling.prototype.roll_review = function(){
  var framesTally = this.framesTally;  
  //if a strike occured in second last frame, repeat the last frame in frameTally
  if((framesTally[framesTally.length - 2][0]) === 10){
      return framesTally.push(framesTally[framesTally.length-1]);
  //if a spare happend in second last frame, push another array with the first bowl of last frame repeated
  } else if ((framesTally[framesTally.length - 2][0])+(framesTally[framesTally.length - 2][1]) === 10){
      return framesTally.push(framesTally[framesTally.length-1][0]);
  } else {
    return 0
  }
};



