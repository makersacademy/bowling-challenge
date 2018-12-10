'use strict';

function GameScorer() {
  this.total = 0
};

// update score methods


GameScorer.prototype.calculateFirstBowlScore = function(game, frameScorer) {
  if(game.isFirstStrikeTrue()) {
    this.totalPlusAmount(frameScorer.firstBowlScore)
    }
  if(game.isSecondStrikeTrue()) {
    this.totalPlusAmount(frameScorer.firstBowlScore)
    }
  if(game.isSpareTrue()) {
    this.totalPlusAmount(frameScorer.firstBowlScore)
    }
    this.totalPlusAmount(frameScorer.firstBowlScore)
  };

GameScorer.prototype.calculateSecondBowlScore = function(game, frameScorer) {
  if(game.isFirstStrikeTrue()) {
    this.totalPlusAmount(frameScorer.secondBowlScore)
    }
  this.totalPlusAmount(frameScorer.secondBowlScore)
};

GameScorer.prototype.totalPlusAmount = function(amount) {
  this.total += amount;
};
