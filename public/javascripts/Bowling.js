function Bowling () {
    this._scorecard = []
    this._count = 1
    this._listOfScores = []
    this._score = 0
    
};

Bowling.prototype.reset = function(){
  this._scorecard = [];
  this._count = 1;
  this._listOfScores = [];
  this._score = 0;
  };

Bowling.prototype.addTurn = function(turn){
    var a = parseInt(turn[0], 10)
    var b = parseInt(turn[1], 10)
    var c = parseInt(turn[2], 10)
  if (((turn[0] === "X") && (turn[1]==="X")) && (turn[2] === "X")){
    this._scorecard.push([10, 10, 10])
  } else if (((turn[0] != "X") && (turn[1]!="X")) && (turn[2] === "X")) {
    this._scorecard.push([a, b, 10])
  }else if ((turn[0] === "X") && (turn[1]==="X")) {
    this._scorecard.push([10, 10, c])
  } else if ((turn[0] === "X") && (turn[2]==="X")) {
      
      this._scorecard.push([10, b, 10])
  } else if (turn[0] === "X") {
    this._scorecard.push([10, 0]);
  } else if (turn[1] === "/") {
    var d = (10 - a)
    this._scorecard.push([a, d]);
  }else if (turn.length == 3) {
    this._scorecard.push([a, b, c])
  } else {
    this._scorecard.push([a, b])
    };

  this._count ++;
  this.scoreTotaller(this._scorecard);
  };
  
Bowling.prototype.scoreTotaller = function(array) {  
  if (this._count == 11) {
    this.scoreCalculator(array)
  } else {
    this._score = "CALC IN PROG"
  }
};
  

Bowling.prototype.scoreCalculator = function(scorecardarray) {  
  var x = this.scorefirst8(scorecardarray);
  var y = this.scorelast2(scorecardarray);
  this._score = (x.reduce(myTot)+y.reduce(myTot));
};


Bowling.prototype.checkArray = function(array) {
  
}

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
    i += 1
    
    this._listOfScores.push(points.reduce(myTot))
  }
   while (i < arr1.length);
   return points
  
};

Bowling.prototype.scorelast2 = function(arr1) {
  var points = []
  var i = 10
  do {if ((arr1[i - 2][0] == 10) && (arr1[i - 1][0] == 10)) {
          points.push(arr1[i-2][0] + arr1[i-1][0] + arr1[i-1][1])
  } else if (arr1[i - 2][0] == 10) {
          points.push(arr1[i-2][0] + arr1[i-1][0] + arr1[i-1][1])
  } else if((arr1[i - 2][0] != 10) && ((arr1[i-2].reduce(myTot)) == 10)) {
          points.push(arr1[i-2][0] + arr1[i-2][1] + arr1[i-1][0]) 
  }else{
          points.push(arr1[i-2].reduce(myTot))
  }
  this._listOfScores.push(this._listOfScores[this._listOfScores.length-1] + points.reduce(myTot))
      i += 1
}
while (i < 11);
points.push(arr1[9].reduce(myTot))

this._listOfScores.push(this._listOfScores[this._listOfScores.length-1] + arr1[9].reduce(myTot))
return points
};


function myTot(total, num) {
  if (Number.isInteger(num)) {
  return total + num;
  };
};

