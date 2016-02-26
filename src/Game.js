function Game(){
  this.log = [];
  this.roll = 0;
  this.scoreCalls = 0;
  this.bonusArray = []
  this.scores = {}
  this.extraRolls = 0
}

Game.prototype.score = function(result){
  this.scoreCalls++;
  var scoreTotal = Object.keys(this.scores).length;
  this.scores[scoreTotal+1] = result
  this.tenthSpare();
  this.tenthStrike(result);
  if (this.isGameOver() && this.extraRolls > 0) {
    this.extraRolls -= 1
    this.calcScore(result);
  }
  if (this.isGameOver() && this.extraRolls === 0) {
    throw "start new game"
  }
  this.calcScore(result);
};

Game.prototype.total = function(){
  var arr = flatten(this.log);
  var sum = 0;
  for (i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum;
};


Game.prototype.strike = function () {
  var num = this.scoreCalls
  this.bonusArray.push(num)
  this.log.push([10, 0]);
};

Game.prototype.strikeCalc = function () {
  var bonus = 0;
  var array = this.bonusArray;
  var scores = this.scores;
  array.forEach(function(i) {
    for (var j in scores)  {
      if (parseInt(j) === i) {
        var num = parseInt(j)
        bonus += scores[num+1];
        bonus += scores[num+2];
      }
    }
  })
  return bonus;
};

Game.prototype.spareCalc = function () {
  var bonus = 0;
  var array = this.log;
  for(var i = 0; i < array.length; i++) {
    if (array[i][0] !== 10) {
      var sum = array[i][0] + array[i][1]
      if (sum === 10) {
        bonus += array[i+1][0]
      }
    }
  }
  return bonus;
};

Game.prototype.tenthStrike = function (result) {
  if (this.log.length === 9 && result === 10) {
      this.strike();
      this.extraRolls = 2;
    }
};

Game.prototype.tenthSpare = function () {
  var array = this.log;
  for(var i = 0; i < array.length; i++) {
    if (i === 10) {
      if (array[i][0] != null && array[i][1] != null) {
        var sum = array[i][0] + array[i][1]
        if (sum === 10) {
          this.extraRolls = 1;
        }
      }
    }
  }
};

Game.prototype.isGameOver = function () {
  var array = this.log;
  for(var i = 0; i < array.length; i++) {
    if (i === 10) {
      if (array[i][0] != null && array[i][1] != null) {
        return true
      }
    }
  }
};

Game.prototype.calcScore = function (result) {
  if (this.roll < 2) {
    if (this.log === undefined || this.log.length === 0) {
      if (result === 10) {
        this.strike();
      } else {
        this.log.push([result]);
        this.roll += 1
      }
    } else {
      this.log[this.log.length-1].push(result);
      this.roll += 1
    }
  } else if (result === 10){
      this.strike();
  } else {
      this.log.push([result]);
      this.roll = 1
  }
};

function flatten(arr) {
  var flat = arr.reduce(function(a, b) {
    return a.concat(b);
  }, []);
  return flat
}
