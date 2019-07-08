'use strict';

// $(document).ready(function () {
//   scorecard = new Scorecard;
//   $('#title');
//   $('#buttons');
//   $('#scorecard');
//   buttons(0);
//     });
//   });
// });


$(document).ready(function () {
  game = new Game();
  var firstRoll;
  var runScore;
  pinHit = function (pins) {
    if (isRollValid(pins) == false) {
      return;
    }
    isGameOver();
    game.roll(pins);
    frameScore();
    totalScore();
  };

  frameScore = function () {
    frame1.innerHTML = game.frameScore['1'];
    frame2.innerHTML = game.frameScore['2'];
    frame3.innerHTML = game.frameScore['3'];
    frame4.innerHTML = game.frameScore['4']
    frame5.innerHTML = game.frameScore['5']
    frame6.innerHTML = game.frameScore['6']
    frame7.innerHTML = game.frameScore['7']
    frame8.innerHTML = game.frameScore['8']
    frame9.innerHTML = game.frameScore['9']
    frame10.innerHTML = game.frameScore['10']
  };

  totalScore = function () {
    runScore = game.runningTotal;
    for (i = 0; i < game.frameNumber; i++) {
      if (runScore[i]) {
        this["marker" + i].innerHTML = runScore[i];
      }
    }
  };

  isRollValid = function (pins) {
    comments.innerHTML = "";
    firstRoll = game.firstRollScore();
    if (game.rollNumber == 2 && (pins + firstRoll[0]) > 10) {
      comments.innerHTML = 'Invalid Roll - there are only ten pins!';
      return false;
    }
  };

  isGameOver = function () {
    if (game.gameover === true) {
      var elems = document.getElementsByClassName("btn-primary");
      for (i = 0; i < 11; i++) {
        elems[i].disabled = true;
      }
      marker0.innerHTML = game.runningTotal[-1];
      gameover.innerHTML = 'Game Over!';
      yourscore.innerHTML = 'Your score: ' + " " + game.runningTotal[-1];
      playagain.innerHTML = '<button type="button" onclick="newGame()"  class="btn btn-secondary">Play Again!</button>'
    } else {
      return;
    }
  };

  newGame = function () {
    delete window.game;
    location.reload();
  }

});
function Game() {
  this.pinCount = 10;
  this.frameNumber = 1;
  this.rollNumber = 1;
  this.gameover = false;
  this.frameScore = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] };
  this.totalScore = [];
  this.runningTotal = [];
  this.bonus = { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '' };
  this.bonusNextFrame = { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '' };
}
Game.prototype.throw = function (pinsHit) {
  this.rollNumber++;
  this.pinCount -= pinsHit;
};

Game.prototype.roll = function (pinsHit) {
  this.isRollValid(pinsHit);
  if (this.frameNumber == 10) {
    this.finalFrame(pinsHit);
    return;
  };
  if (pinsHit === 10 && this.rollNumber === 1) {
    this.frameScore[this.frameNumber].push("X");
    this.bonus[this.frameNumber] = 'Strike';
    this.bonusNextFrame[this.frameNumber + 1] = 'StrikeFrame';
    this.nextFrame(pinsHit);
    return pinsHit;
  } else if ((pinsHit + this.firstRollScore()[0]) === 10 && this.rollNumber > 1) {
    this.frameScore[this.frameNumber].push("/");
    this.bonus[this.frameNumber] = 'Spare';
    this.bonusNextFrame[this.frameNumber + 1] = 'SpareFrame';
    this.nextFrame();
    return pinsHit;
  }
  else {
    this.throw(pinsHit);
    this.frameScore[this.frameNumber].push(pinsHit)
    if (this.isFrameComplete()) {
      this.nextFrame();
    } else {
      return pinsHit;
    }
  }
};


Game.prototype.isFrameComplete = function () {
  if (this.rollNumber > 2) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.nextFrame = function () {
  var spareBonus = this.firstRollScore();
  this.frameNumber++;
  this.rollReset();
  this.calculateScore();
  this.sumGame();
  this.calculateBonus(this.totalScore, spareBonus);
  if (this.over()) {
    console.log("Game Over")
    console.log("Final Score" + " " + this.sumGame())
    return;
  }
};

Game.prototype.calculateBonus = function (scores, spareBonus) {
  if (this.bonusNextFrame[this.frameNumber - 1] === 'StrikeFrame') {
    this.totalScore[this.frameNumber - 3] += this.totalScore[this.frameNumber - 2];
  } else if (this.bonusNextFrame[this.frameNumber - 1] === 'SpareFrame') {
    this.totalScore[this.frameNumber - 3] += spareBonus[0];
  }
};

Game.prototype.rollReset = function () {
  this.rollNumber = 1;
  this.pinCount = 10;
};

Game.prototype.firstRollScore = function () {
  return this.frameScore[this.frameNumber].slice(0, 1)
};

Game.prototype.calculateScore = function () {
  if (this.bonus[this.frameNumber - 1] === 'Strike') {
    var total = 10;
  } else if (this.bonus[this.frameNumber - 1] === 'Spare') {
    var total = 10;
  }
  else {
    var total = this.frameScore[this.frameNumber - 1][0] + this.frameScore[this.frameNumber - 1][1];
  }
  this.totalScore.push(total)
  return total
};

Game.prototype.finalFrame = function (pinsHit) {
  if (pinsHit === 10 && this.rollNumber === 1) {
    this.frameScore[this.frameNumber].push("X");
    this.bonus[this.frameNumber] = 'Strike';
    this.bonusNextFrame[this.frameNumber + 1] = 'StrikeFrame';
    this.rollNumber++;
    this.calculateScore();
    this.calculateBonus(this.totalScore);
  } else if ((pinsHit + this.firstRollScore()[0]) === 10 && this.rollNumber > 1) {
    this.frameScore[this.frameNumber].push("/");
    this.bonus[this.frameNumber] = 'Spare';
    this.bonusNextFrame[this.frameNumber + 1] = 'SpareFrame';
    this.calculateScore();
    this.calculateBonus(this.totalScore);
  } else {
    this.throw();
    this.frameScore[this.frameNumber].push(pinsHit)
    if (this.isFrameComplete()) {
      this.nextFrame();
    } else {
      return pinsHit;
    }
  }
};

Game.prototype.isRollValid = function (pinsHit) {
  if (pinsHit > this.pinCount) {
    throw new Error("only 10 pins per frame");
    return false;
  } else if (this.frameNumber > 10) {
    this.gameover = true;
    throw new Error("Game Over");
    return false;
  } else {
    return true;
  }
};

Game.prototype.over = function () {
  if (this.frameNumber > 10) {
    return true;
  }
}

Game.prototype.sumGame = function () {
  var runTotal = 0;
  for (var i = 0; i < this.totalScore.length; i++) {
    runTotal += this.totalScore[i];
  }
  this.runningTotal.push(runTotal);
  return runTotal;
}
