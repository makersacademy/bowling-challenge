function Bowling () {
   
    this._scorecard = []
    this._turn = []
    this._count = 1
    this._scores = []
    this._score = 0
};

Bowling.prototype.turn = function(x, y){
    this._turn.push(x, y);
  };

Bowling.prototype.reset = function(){
  this._scorecard = [];
  this._turn = [];
  this._count = 1;
  this._scores = [];
  this._score = 0;
  };

Bowling.prototype.addTurn = function(turn){
  if (turn[0] === "X") {
    this._scorecard.push([10, 0]);
  } else if (turn[1] === "/") {
    var a = parseInt(turn[0], 10)
    var b = (10 - a)
    this._scorecard.push([a, b]);
  }else if (turn.length == 3) {
    var a = parseInt(turn[0], 10)
    var b = parseInt(turn[1], 10)
    var c = parseInt(turn[2], 10)
    this._scorecard.push([a, b, c])
  } else {
    var a = parseInt(turn[0], 10)
    var b = parseInt(turn[1], 10)
    this._scorecard.push([a, b])
    };
  // this.scoreCalculatorPins(this._scorecard[this._count - 1]);
  this._count ++;
  this._turn = [];
  console.log(this._scorecard)
  this.scoreTotaller(this._scorecard)
  // console.log(this._scores);
  };
  
Bowling.prototype.scoreTotaller = function(array) {  
  if (this._count == 11) {
    this.scoreCalculator(array)
  };
};
  
Bowling.prototype.scoreCalculatorPins = function(turn) {  
    this._scores.push(turn[0] + turn[1])
};

Bowling.prototype.scoreCalculator = function(scorecardarray) {  
  var x = this.scorefirst8(scorecardarray);
  var y = this.scorelast2(scorecardarray);
  console.log(y.reduce(myTot))
  console.log(x.reduce(myTot))
  this._score = (x.reduce(myTot)+y.reduce(myTot));
};

Bowling.prototype.scorefirst8 = function(arr1) {
  var points = []
  var i = 2
  do {if ((arr1[i - 2][0] == 10) && (arr1[i - 1][0] == 10)) {
          points.push(arr1[i-2][0] + arr1[i-1][0] + arr1[i][0])
  } else if (arr1[i - 2][0] == 10) {
          points.push(arr1[i-2][0] + arr1[i-1][0] + arr1[i-1][1])
  } else if ((arr1[i - 2][0] != 10) && (arr1[i-2].reduce(myTot)) == 10) {
          points.push(arr1[i-2][0] + arr1[i-2][1] + arr1[i-1][0]) 
  }else{
          points.push(arr1[i-2].reduce(myTot))
  };
  console.log(points.reduce(myTot))
    i += 1
  }
   while (i < 10);
   return points
};

Bowling.prototype.scorelast2 = function(arr1) {
  var points = []
  var i = 10
  do {if ((arr1[i - 2][0] == 10) && (arr1[i - 1][0] == 10)) {
          points.push(arr1[i-2][0] + arr1[i-2][0] + arr1[i-1][1])
  } else if (arr1[i - 2][0] == 10) {
          points.push(arr1[i-2][0] + arr1[i-1][0] + arr1[i-1][1])
  } else if((arr1[i - 2][0] != 10) && ((arr1[i-2].reduce(myTot)) == 10)) {
          points.push(arr1[i-2][0] + arr1[i-2][1] + arr1[i-1][0]) 
  }else{
          points.push(arr1[i-2].reduce(myTot))
  }
        
      i += 1
}
while (i < 11);
points.push(arr1[9].reduce(myTot))
return points
};



function myTot(total, num) {
  return total + num;
}

