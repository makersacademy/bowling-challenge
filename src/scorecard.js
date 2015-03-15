var Scorecard = function(content) {
  this.frameRecord = [];
  this.totals = [];
  this.DEFAULT_FRAMES = 10;
  this.currentTurn = 0;
  this.maxTurns = 20;
  for (var i = 0; i < this.DEFAULT_FRAMES; i++) {
    this.frameRecord.push(new content);
  };
};

Scorecard.prototype.updateTotal = function() {
  if (this.frameRecord[this.getCurrentFrame()].strike === true || this.frameRecord[this.getCurrentFrame()].spare === true) {
    this.totals.push(10);
  } else {
    this.totals.push(this.frameRecord[this.getCurrentFrame()].result);  
  };
};

Scorecard.prototype.bowl = function(pinsKnockedOver) {
  if (this.currentTurn === 20 && this.totals[9] === 10) {
    this.totals[9] += pinsKnockedOver;
    if (this.frameRecord[this.getCurrentFrame() - 1].strike === true) {
      this.totals[this.getCurrentFrame() - 1] += pinsKnockedOver;
    }
    this.currentTurn ++
  } else if (this.currentTurn === 21 && this.frameRecord[this.getCurrentFrame()].strike === true) {
    this.totals[9] += pinsKnockedOver;
    this.currentTurn ++
  } else if (this.currentTurn < this.maxTurns) {
    if (this.checkEven(this.currentTurn) === true && pinsKnockedOver === 10) this.currentTurn +=1;
    if (this.getCurrentFrame() > 0 && this.frameRecord[this.getCurrentFrame() - 1].strike === true) {
        this.totals[this.getCurrentFrame() - 1] += pinsKnockedOver;
        if (this.getCurrentFrame() > 1 && this.frameRecord[this.getCurrentFrame() - 2].strike === true) {
          if (this.frameRecord[this.getCurrentFrame()].firstBowl === null) this.totals[this.getCurrentFrame() - 2] += pinsKnockedOver;
        }
    }
    if (this.getCurrentFrame() > 0 && this.frameRecord[this.getCurrentFrame() - 1].spare === true) {
      if (this.frameRecord[this.getCurrentFrame()].firstBowl === null) this.totals[this.getCurrentFrame() - 1] += pinsKnockedOver;
    }
    this.frameRecord[this.getCurrentFrame()].receiveBowl(pinsKnockedOver);
    if (this.checkEven(this.currentTurn) != true) this.updateTotal();
    this.currentTurn += 1;
  };
};

Scorecard.prototype.getCurrentFrame = function() {
  if (this.currentTurn >= 20) return 9;
  if (this.checkEven(this.currentTurn) === true) return (this.currentTurn) / 2;
  return (this.currentTurn - 1) / 2;
};

Scorecard.prototype.checkEven = function(number) {
  if (number % 2 === 0) return true;
};

Scorecard.prototype.currentTotal = function() {
  return this.totals.reduce(function (total, num) { return total + num });
};