BowlingGame = function() {
	this.frames = [];
	this.totalScore = 0;
};

BowlingGame.prototype = {
  setup: function() {
    this._addFrames();
    this._indexFrames();
    this._setupLastFrame();
  },
  calculateFrameBonusScores: function() {
  	for(var x = 0; x < this.frames.length - 2; x++) {
  		var currentFrame = this.frames[x];
  		currentFrame.calculateBonusScore();
  	}
	   this.frames[8].calculateFrameNineBonusScore();
  },
  calculateFrameTotalScores: function() {
  	this.frames.forEach(function(frame) {
  		frame.calculateTotalScore(); });
  },
  calculateGameTotalScore: function() {
  	this.calculateFrameBonusScores();
  	this.calculateFrameTotalScores();
  	for(var x = 0; x < this.frames.length; x++) {
  		this.totalScore += this.frames[x].totalScore;
  	}
  	return this.totalScore;
  },
  _addFrames: function() {
  	for(var i = 0; i < 10; i++) {
  		this.frames.push(new Frame(this));
  	}
  },

  _indexFrames: function() {
  	for(var x = 0; x < 10; x++) {
  		this.frames[x].number = x+1;
  	}
  },
  _setupLastFrame: function() {
  	this.frames[9].rollThreeScore = 0;
  },
  _rollPerfectGame: function() {
  	for(var x = 0; x < this.frames.length; x++) {
  		this.frames[x].rollOneScore = 10;
  	}
  	this.frames[9].rollTwoScore = 10;
  	this.frames[9].rollThreeScore = 10;
  },
  _rollGutterGame: function() {
  	for(var x = 0; x < this.frames.length; x++) {
  		this.frames[x].rollOneScore = 0;
  		this.frames[x].rollTwoScore = 0;
  	}
  },
};
