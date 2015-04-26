var Game = function() {
  this.frame = 1;
  this.ball = 1;
  this.scorePerBowl = [];
}

Game.prototype.bowl = function(knockedDown) {

  var self = this;
  function formatInput() {
    if(knockedDown === 10){
      return 'X';
    } else if(self.ball === 2 && (self.scorePerBowl[self.scorePerBowl.length-1] + knockedDown === 10)) {
      return knockedDown + '/';
    } else {
      return knockedDown;
    }
  }

  this.scorePerBowl.push(formatInput());

  if(this.ball === 2) { this.frame += 1 };

  if(this.ball === 1 && knockedDown === 10) {
    this.frame += 1
  } else if(this.ball === 1){
    this.ball = 2
  } else {
    this.ball = 1
  };
};

Game.prototype.score = function() {

  var self = this;
  var total = 0;

  function twoStrikeBonus(i) {
    return self.scorePerBowl[i-1] === 'X' && self.scorePerBowl[i-2] === 'X';
  }

  function oneStrikeBonus(i) {
    return self.scorePerBowl[i-1] === 'X' || self.scorePerBowl[i-2] === 'X';
  }

  function partialBonus(i) {
    var previousValue = self.scorePerBowl[i-1]
    if(typeof previousValue === 'undefined'){
      return false
    } else if(typeof previousValue === 'number'){
      return false
    } else {
      return previousValue.indexOf("/") > -1
    }
  }

  function tripleScore(i) {
    total += sanitiseScore(i,3);
  }

  function doubleScore(i) {
    total += sanitiseScore(i,2);
  }

  function singleScore(i) {
    total += sanitiseScore(i,1);
  }

  function sanitiseScore(i,num) {
    var arrayValue = self.scorePerBowl[i]
    if(self.scorePerBowl[i] === 'X') {
      return 10 * num;
    } else if(typeof arrayValue === 'number') {
      return self.scorePerBowl[i] * num;
    } else {
      return parseInt(arrayValue) * num;
    }
  }


  for (var i = 0; i < this.scorePerBowl.length; i++){
    if(twoStrikeBonus(i)) {
        tripleScore(i);
    } else if(oneStrikeBonus(i)) {
        doubleScore(i);
    } else if(partialBonus(i)){
        doubleScore(i);
    } else {
        singleScore(i);
    }
  }
  return total;
};

