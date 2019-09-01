function Bowling () {
    this._scorecard = []
    this._count = 1
    this._accumulatingScoreArray = []
    this._score = 0
    
};

Bowling.prototype.reset = function(){
  this._scorecard = [];
  this._count = 1;
  this._accumulatingScoreArray = [];
  this._score = 0;
  this._check = true
  };

Bowling.prototype.addTurn = function(turn){
    var a = turn[0]
    var b = turn[1]
    var c = turn[2]

    if (Number.isInteger(b) == false) {
      b = 10 - a
    }

    if (a == 10 && this._count != 10) {
      b = 0
    }

   if (turn.length == 3) {
      this._scorecard.push([a, b, c])
  } else {
    this._scorecard.push([a, b])
    };


  this._count ++;
  if (this._count > 4) {
    console.log((this.scorefirst8(this._scorecard)).reduce(myTot))
  }

  this.scoreTotaller(this._scorecard);
  };


  
Bowling.prototype.scoreTotaller = function(arrayOfScores) {  
  if (this._count == 11) {
    var x = this.scorefirst8(arrayOfScores);
    var y = this.scorelast2(arrayOfScores);
    this._score = (x.reduce(myTot)+y.reduce(myTot));
  } else {
    this._score = "CALC IN PROG"
  }
};

Bowling.prototype.scoreCalculator = function(arrayOfScores) {  
  var x = this.scorefirst8(arrayOfScores);
  var y = this.scorelast2(arrayOfScores);
  this._score = (x.reduce(myTot)+y.reduce(myTot));
};

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

