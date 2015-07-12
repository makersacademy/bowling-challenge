function Bowling(){
  this.framesTally = [];

}


Bowling.prototype.total = function(){
  var framesTally = this.framesTally
  
  var unpackedTally = framesTally.reduce(function(a,b){
  a.concat(b); 
  return a.concat(b);
  });

  console.log(unpackedTally);

  var total = 0;

  for(i=0; i<unpackedTally.length; i++){
    total += unpackedTally[i];
  }

  return total;
};

  
  // unpacked.reduce(function(a,b){
  //   return a + b;
  // });


Bowling.prototype.roll = function(bowlOne,bowlTwo){
  this.framesTally.push([bowlOne,bowlTwo]);
  console.log(this.framesTally);
};



//Only three frames are being played.  All of the rolls in the frames are added up.
//


//while the total franes are under 4
//receive the results for the 1st and 2nd attempt for a frame
//upon the third attempt, return the sum of all attemps

//the results are saved in an object

// while (frameNumber < 4){
          
//   Bowling.prototype.bowl = function(a,b){

//     var score_tally = {bowl1: a, bowl2: b} 

//     var result = a + b;
//     console.log(result);
//     total += result;
//     console.log(total);
    
//   };
//   frameNumber ++;
  
// };


// var counter = 1; 
// var frameNumber = 0;
// var total = 0;

          
// Bowling.prototype.frame = function(a,b) {
//   // body...
// };






  // Bowling.prototype.bowl = function(a,b){

  //   while (frameNumber < 4){
    
  //     var score_tally = {bowl1: a, bowl2: b} 

  //     var result = a + b;
  //     console.log(result);
  //     total += result;
  //     console.log(total);
      
  //     frameNumber ++;
  //   };
  // };
  



