function Game() {

  this._player = 'Hugo';
  this._score = 0;
  this._scoreSheet = [];
  this._frameAndGo = [1, 1];
  this._wasStrike = false;
  this._wasSpare = false;

  Game.prototype.frameAndGo = function() {
    return this._frameAndGo;
  };

  Game.prototype.go = function(go) {
    // set the _wasSpare and _wasStrike
    this.setup();
    this._frameAndGo[1] === 1 ? this.firstGo(go) : this.secondGo(go);
    this.frameAndGoChange(go);
  };

  Game.prototype.player = function() {
    return this._player;
  };

  Game.prototype.score = function() {
    return this._score;
  };


  this.add = function(value) {
    this._score = this._score + value;
  };

  this.firstGo = function(go) {
    this.setup();
    if ((this._wasStrike) || (this._wasSpare)) this.add(go);
    this.add(go);
    this._scoreSheet.push([go, null]);
  };

  this.frameAndGoChange = function(go) {
    if ((this._frameAndGo[1] === 2) || (go === 10)) {
      this._frameAndGo[0] += 1;
      this._frameAndGo[1] = 1;
    } else {
      this._frameAndGo[1] += 1;
    }
  };

  this.secondGo = function(go) {
    console.log("it's the second go and _wasStrike is: " + this._wasStrike + " and go is:" + go);
    if (this._wasStrike) this.add(go);
    if ((go + this._scoreSheet[this._scoreSheet.length - 1][0]) === 10) this._wasSpare = true;
    this.add(go);
    this._scoreSheet[this._scoreSheet.length - 1][1] = go;

  };

  this.setup = function() {
    this.setValueConditions();
  };

  this.setValueConditions = function() {
    this.setWasStrike();
    this.setWasSpare();
  };

  this.setWasStrike = function() {
    if (this._scoreSheet.length !== 0) {
      if (this._scoreSheet[this._scoreSheet.length - 1][0] === 10) {
        console.log("the score sheet: " + this._scoreSheet);
        this._wasStrike = true;
      } else {
        this._scoreSheet.forEach(function(element) {
          console.log("The score sheet" + element);

        })
        this._wasStrike = false;
      }
    }
  };

  this.setWasSpare = function() {
    // if ((this._scoreSheet[_scoreSheet.length - 1][0] !== 10))
  };
};
