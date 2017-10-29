function Game() {

  this._player = 'Hugo';
  this._score = 0;
  this._scoreSheet = [];
  this._frameAndGo = [1, 1];
  this._wasStrike = 0;
  this._wasSpare = false;
  this._max = false;

  Game.prototype.frameAndGo = function() {
    return this._frameAndGo;
  };

  Game.prototype.go = function(go) {
    this.setup(go);
    console.log("wasStrike = " + this._wasStrike + " and wasSpare = " + this._wasSpare);
    this.isFinalGo(go);
    if (this._frameAndGo[1] === 1) {
      this.firstGo(go);
    } else {
      this.secondGo(go);
    }
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
    console.log("Was strike : " + this._wasStrike);
    for (i = 0; i < this._wasStrike; i++) {
      this.add(go);
    }
    if (this._wasSpare) this.add(go);
    this.add(go);
    this._scoreSheet.push([go, 0]);
  };

  this.frameAndGoChange = function(go) {
    if ((this._frameAndGo[1] === 2) || (go === 10)) {
      this._frameAndGo[0] += 1;
      this._frameAndGo[1] = 1;
    } else {
      this._frameAndGo[1] += 1;
    }
  };

  this.isFinalGo = function(go) {
    if ((this._frameAndGo[0] === 10) && (this._score === 240)) this._max = true;
    if (this._max) {
      if ((this._frameAndGo[0] === 10) && (go === 10)) {
        this._wasStrike--;
      }
      if ((this._frameAndGo[0] === 11) && (go === 10)) {
        this._wasStrike--;
      }
      if ((this._frameAndGo[0] === 12) && (go === 10)) {
        this._wasStrike--;
      }
    }
  };

  this.secondGo = function(go) {
    for (i = 0; i < this._wasStrike; i++) {
      this.add(go);
    }
    this.add(go);
    this._scoreSheet[this._scoreSheet.length - 1][1] = go;
  };

  this.setup = function(go) {
    this.setValueConditions(go);
  };

  this.setValueConditions = function(go) {
    this.setWasStrike();
    this.setWasSpare(go);
  };

  this.setWasStrike = function() {
    var len = this._scoreSheet.length;
    if (len !== 0) {
      if (this._frameAndGo[1] === 1) {
        if (this._scoreSheet[this._scoreSheet.length - 1][0] === 10) this._wasStrike = 1;
        if (this._scoreSheet[this._scoreSheet.length - 1][0] !== 10) this._wasStrike = 0;
        if (len > 1) {
          if ((this._scoreSheet[this._scoreSheet.length - 1][0] === 10) && (this._scoreSheet[this._scoreSheet.length - 2][0] === 10)) this._wasStrike = 2;
          if ((this._scoreSheet[this._scoreSheet.length - 1][0] !== 10) && (this._scoreSheet[this._scoreSheet.length - 2][0] !== 10)) this._wasStrike = 0;
        }
      } else if (this._scoreSheet[this._scoreSheet.length - 2][0] === 10) {
        this._wasStrike = 1;
      }
    }
    // use this for checking which scores are in the score sheet array at any time
    this._scoreSheet.forEach(function(element) {
      element.forEach(function(el) {});
    });
  };

  this.setWasSpare = function() {
    var scores = this._scoreSheet;
    var len = scores.length;
    if (len !== 0) {
      if ((this._frameAndGo[1] === 1) && ((scores[len - 1][0] + scores[len - 1][1]) === 10) && (scores[len - 1][0] !== 10)) {
        this._wasSpare = true;
      } else {
        this._wasSpare = false;
      }
    }
  };
}
