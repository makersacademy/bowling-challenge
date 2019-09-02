function Bowling () {
    this._scorecard = []
    this._count = 1
    this._accumulatingScoreArray = []
    this._score = 0
    this._gameover = false
    // this._move = 'normal'
    // this._acc = []
};

Bowling.prototype.reset = function(){
  this._scorecard = [];
  this._count = 1;
  this._accumulatingScoreArray = [];
  this._score = 0;
  // this._gameover = false
  };

Bowling.prototype.addTurn = function(turn){
    var a = turn[0]
    var b = turn[1]
    var c = turn[2]

    if (Number.isInteger(b) == false) {
      b = 10 - a
      // this._move = 'spare'
    }

    // if (((a + b) == 10) && (a !=10) ) {
      
    //   this._move = 'spare'
    // }

    if (a == 10 && this._count != 10) {
      b = 0
    //   this._move = 'strike'
    }

   if (turn.length == 3) {
      this._scorecard.push([a, b, c])
      this._gameover = true
  } else {
    this._scorecard.push([a, b])
    // this._move = 'normal'
    };


  if (this._count < 10) {
     this._count ++;
  } else {
     this._count = 'FINITO'
  }

  // if (this._count > 4) {
  //   console.log((this.scorefirst8(this._scorecard)).reduce(myTot))
  // }

  this.scoreTotaller(this._scorecard)
  // this.scoreCalc(this._scorecard, turn)
  // console.log(this._acc)
  // console.log(this._accumulatingScoreArray[this._accumulatingScoreArray.length-1])
 };



  
Bowling.prototype.scoreTotaller = function(arrayOfScores) {  
  if (this._count == 'FINITO') {
    var x = this.scorefirst8(arrayOfScores);
    var y = this.scorelast2(arrayOfScores);
    this._score = (x.reduce(myTot)+y.reduce(myTot));
    // this._gameover = true
  } else {
    this._score = "CALC IN PROG"
  }
};

// Bowling.prototype.scoreCalc = function(array, turn) {
// if (this._move == 'normie'){
//   this._acc.push(turn.reduce(myTot));
// } else if (((this._move == 'strike')||(this._move == 'spare'))&&(this._count > 3)) {
//   this.scorefirst8(array)
//   this._acc.push(this._accumulatingScoreArray[this._accumulatingScoreArray.length-1]);
// } else if (this._move == 'normie') {
//     console.log(this._acc);
// };
  
// };

Bowling.prototype.scorefirst8 = function(arrayOfScores) {
  var points = []
  var i = 2
  do {if ((arrayOfScores[i - 2][0] == 10) && (arrayOfScores[i - 1][0] == 10)) {
          points.push(arrayOfScores[i-2][0] + arrayOfScores[i-1][0] + arrayOfScores[i][0])
  } else if (arrayOfScores[i - 2][0] == 10) {
          points.push(arrayOfScores[i-2][0] + arrayOfScores[i-1][0] + arrayOfScores[i-1][1])
  } else if ((arrayOfScores[i - 2][0] != 10) && (arrayOfScores[i-2].reduce(myTot)) == 10) {
          points.push(arrayOfScores[i-2][0] + arrayOfScores[i-2][1] + arrayOfScores[i-1][0]) 
  }else{
          points.push(arrayOfScores[i-2].reduce(myTot))
  };
    i += 1
    
    this._accumulatingScoreArray.push(points.reduce(myTot))
  }
   while (i < arrayOfScores.length);
   return points
  
};

Bowling.prototype.scorelast2 = function(arrayOfScores) {
  var points = []
  var i = 10
  do {if ((arrayOfScores[i - 2][0] == 10) && (arrayOfScores[i - 1][0] == 10)) {
          points.push(arrayOfScores[i-2][0] + arrayOfScores[i-1][0] + arrayOfScores[i-1][1])
  } else if (arrayOfScores[i - 2][0] == 10) {
          points.push(arrayOfScores[i-2][0] + arrayOfScores[i-1][0] + arrayOfScores[i-1][1])
  } else if((arrayOfScores[i - 2][0] != 10) && ((arrayOfScores[i-2].reduce(myTot)) == 10)) {
          points.push(arrayOfScores[i-2][0] + arrayOfScores[i-2][1] + arrayOfScores[i-1][0]) 
  }else{
          points.push(arrayOfScores[i-2].reduce(myTot))
  }
  this._accumulatingScoreArray.push(this._accumulatingScoreArray[this._accumulatingScoreArray.length-1] + points.reduce(myTot))
      i += 1
}
while (i < 11);
points.push(arrayOfScores[9].reduce(myTot))
console.log(arrayOfScores[9])
this._accumulatingScoreArray.push(this._accumulatingScoreArray[this._accumulatingScoreArray.length-1] + arrayOfScores[9].reduce(myTot))
return points
};


function myTot(total, num) {
  if (Number.isInteger(num)) {
  return total + num;
  };
};

