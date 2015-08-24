var BowlingScorer = function() {
  this.total = 0;
  this.runningTotals = [];
  this.firstshot = null;
  this.spare = false;
  this.strike = false;
  this.doubleStrike = false;
  this.frameNo = 1;
};

BowlingScorer.prototype.addPins = function(pins,frameNo) {
  this.total += pins;
  this.runningTotals[frameNo] += pins;
};

BowlingScorer.prototype.spareAdd = function(pins) {
  this.addPins(pins,(this.frameNo-2));
  this.spare = false
};

BowlingScorer.prototype.strikeAdd = function(pins) {
  this.addPins(pins,(this.frameNo-2))
  this.strike = false
};

BowlingScorer.prototype.doubleStrikeAdd = function(pins) {
  this.addPins(pins+10,this.frameNo-3)
  this.doubleStrike = false
};

BowlingScorer.prototype.bowl = function(pins) {
  if(pins>=0&&pins<=10&&(pins%1===0)&&(this.firstshot)&&(this.frameNo<=10)) {
    var frame = pins + this.firstshot;
    if(frame<=10) {
      if(this.strike) {
        this.strikeAdd(frame);
      }
      this.addPins(frame,(this.frameNo-1));
      if(frame===10) {
        this.spare = true;
      }
      this.frameNo += 1;
    }
    this.firstshot = null;
  } else if(pins>=0&&pins<=10&&(pins%1===0)&&(this.frameNo<=10)) {
    if(this.spare) {
      this.spareAdd(pins);
    } else if(this.doubleStrike) {
      this.doubleStrikeAdd(pins);
    }

    if(pins===10) {
      if(this.strike) {
        this.doubleStrike = true;
      }
      this.strike = true;
      this.addPins(pins,(this.frameNo-1))
      this.frameNo += 1
      return pins
    }
    return this.firstshot = pins;
  } else if(pins>=0&&pins<=10&&(pins%1===0)&&(this.frameNo<=11)&&(this.spare||this.strike)) {
    if(this.doubleStrike) {
      this.doubleStrikeAdd(pins)
    }
    if(this.spare) {
      this.spareAdd(pins);
      this.frameNo += 2;
    } else if(this.strike) {
      if(pins===10) {
        this.doubleStrike = true;
      }
      this.strikeAdd(pins)
      this.frameNo += 1
    }
  } else if(pins>=0&&pins<=10&&(pins%1===0)&&(this.frameNo<=12)&&(this.doubleStrike)) {
    this.doubleStrikeAdd(0);
    this.frameNo += 1
  }
};

// First attempt didn't work, ^^ is my second, keeping this for reference
// I'll probably check what I did wrong at some point.

// BowlingScorer.prototype.bowl = function(pins) {
//   if(pins>=0&&pins<=10&&(pins%1===0)&&(this.firstshot)&&(this.frameNo<=10)) {
//     var frame = pins + this.firstshot;
//     if(frame<=10) {
//       if(this.strike) {
//         this.total += frame;
//         this.runningTotals[this.frameNo-2] += frame
//         this.strike = false;
//       }
//       this.total += frame;
//       this.runningTotals[this.frameNo-1] = this.total
//       this.firstshot = null;
//       if(frame = 10) {
//         this.spare = true;
//       }
//       this.frameNo += 1;
//       return pins;
//     }
//     this.firstshot = null;
//   } else if(pins>=0&&pins<=10&&(pins%1===0)&&(this.frameNo<=10)) {
//     if(this.spare) {
//       this.total += pins;
//       this.runningTotals[this.frameNo-2] += pins
//       this.spare = false;
//     } else if(this.doubleStrike) {
//       this.total += this.doubleStrikeTotal + pins;
//       this.runningTotals[this.frameNo-3] += this.doubleStrikeTotal + pins
//       this.doubleStrike = false
//       this.doubleStrikeTotal = null
//     }
//     if(pins===10) {
//       if(this.strike) {
//         this.doubleStrike = true;
//         this.doubleStrikeTotal = 10;
//       }
//       this.strike = true;
//       this.total += pins;
//       this.runningTotals[this.frameNo-1] = this.total
//       this.frameNo += 1;
//       return pins;
//     }
//     return this.firstshot = pins;
//   } else if(pins>=0&&pins<=10&&(pins%1===0)&&(this.spare||this.strike)&&(this.frameNo<=11)) {
//     if(this.doubleStrike) {
//       this.total += this.doubleStrikeTotal + pins;
//       this.runningTotals[this.frameNo-3] += this.doubleStrikeTotal + pins
//       this.doubleStrike = false
//       this.doubleStrikeTotal = null
//     } else if (this.spare) {
//       this.total += pins
//       console.log(this.runningTotals)
//       return pins
//     }
//     if (this.strike) {
//       if(pins===10) {
//         if(this.strike) {
//           this.doubleStrike = true;
//         }
//         this.strike = true;
//         this.total += pins;
//         this.frameNo += 1;
//         console.log(this.runningTotals)
//         return pins;
//       } else {
//         this.total += pins
//         if (!this.strike) {
//           this.frameNo += 1
//         }
//       }
//     }
    
//   } else if(pins>=0&&pins<=10&&(pins%1===0)&&this.doubleStrike&&(this.frameNo<=12)) {
//     this.total += pins;
//     this.frameNo += 1;
//     console.log(this.runningTotals)
//   }
// };