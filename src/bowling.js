function Bowling(){
  this.framesTally = [];

}


Bowling.prototype.total = function(){
    
  this.roll_review(); //should this be a function (instead of on a prototype?)

  var framesTally = this.framesTally;
  //flatten the framesTally - an array of array
  var unpackedTally = framesTally.reduce(function(a,b){
  a.concat(b); 
  return a.concat(b);
  });

  console.log(unpackedTally);
  //add all scores in the framesTally together
  var total = 0;

  for(i=0; i<unpackedTally.length; i++){
    total += unpackedTally[i];
  }

  return total;
};


Bowling.prototype.roll = function(bowlOne,bowlTwo){
  this.framesTally.push([bowlOne,bowlTwo]);
  console.log(this.framesTally);
};

Bowling.prototype.roll_review = function(){
  var framesTally = this.framesTally;  
  //if the second last frame knocked over 10 pins
  if((framesTally[framesTally.length - 2][0]) === 10){

    // this.framesTally.push(this.framesTally.(this.framesTally.length)-1);
    return framesTally.push(framesTally[framesTally.length-1]);
  }
};



