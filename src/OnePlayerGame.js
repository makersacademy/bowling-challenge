var OnePlayerGameFile = (function() {
  'use strict';
  var Frame = FrameFile.Frame;
  var OnePlayerGame = function() {
    this.frame1 = new Frame(this);
    this.frame2 = new Frame(this);
    this.frame3 = new Frame(this);
    this.frame4 = new Frame(this);
    this.frame5 = new Frame(this);
    this.frame6 = new Frame(this);
    this.frame7 = new Frame(this);
    this.frame8 = new Frame(this);
    this.frame9 = new Frame(this);
    this.frame10 = new Frame(this, 'tenth frame');
    this.latestActiveFrame = this.frame1;
    this.frame1.activate();
    this.frame1.setPriorScore(0);
    this.frames = [this.frame1, this.frame2, this.frame3, this.frame4, this.frame5, this.frame6, this.frame7, this.frame8, this.frame9, this.frame10];
    this.score = 0;
    this.gameData = {
      box1  : this.frame1.box1(),
      box2  : this.frame1.box2(),
      box3  : this.frame2.box1(),
      box4  : this.frame2.box2(),
      box5  : this.frame3.box1(),
      box6  : this.frame3.box2(),
      box7  : this.frame4.box1(),
      box8  : this.frame4.box2(),
      box9  : this.frame5.box1(),
      box10 : this.frame5.box2(),
      box11 : this.frame6.box1(),
      box12 : this.frame6.box2(),
      box13 : this.frame7.box1(),
      box14 : this.frame7.box2(),
      box15 : this.frame8.box1(),
      box16 : this.frame8.box2(),
      box17 : this.frame9.box1(),
      box18 : this.frame9.box2(),
      box19 : this.frame10.box1(),
      box20 : this.frame10.frame10Box2(),
      box21 : this.frame10.frame10Box3(),
      score1  : this.frame1.totalScore(),
      score2  : this.frame2.totalScore(),
      score3  : this.frame3.totalScore(),
      score4  : this.frame4.totalScore(),
      score5  : this.frame5.totalScore(),
      score6  : this.frame6.totalScore(),
      score7  : this.frame7.totalScore(),
      score8  : this.frame8.totalScore(),
      score9  : this.frame9.totalScore(),
      score10 : this.frame10.totalScore(),
      player_score_box: this.getScore(),
    };
  };

  OnePlayerGame.prototype._activeFrames = function() {
    return this.frames.filter(function(frame) {
      return frame.isActive();
    });
  };

  OnePlayerGame.prototype._nextInactiveFrameIndex = function() {
    var highestActiveFrame = this._activeFrames()[this._activeFrames().length - 1];
    return this.frames.indexOf(highestActiveFrame) + 1;
  };


  OnePlayerGame.prototype._completedFrames = function() {
    return this.frames.filter(function(frame) {
      return frame.isComplete();
    });
  };

  OnePlayerGame.prototype._nextIncompleteFrameIndex = function() {
    var latestCompletedFrame = this._completedFrames()[this._completedFrames().length - 1];
    return this.frames.indexOf(latestCompletedFrame) + 1;
  };

  OnePlayerGame.prototype.setScore = function(points) {
    this.score = points;
  };
  OnePlayerGame.prototype.getScore = function() {
    return this.score;
  };

  OnePlayerGame.prototype.passOnScore = function(score) {
    if (this._nextIncompleteFrameIndex() === 10) { return; }
    this.frames[this._nextIncompleteFrameIndex()].setPriorScore(score);
  };

  OnePlayerGame.prototype.roll = function(pinsKnockedOver) {
    this._activeFrames().forEach(function(frame) {
      frame.processRoll(pinsKnockedOver);
    });
  };



  OnePlayerGame.prototype.activateNextFrame = function() {
    if (this.frame10.isActive()) { return; }
    this.frames[this._nextInactiveFrameIndex()].activate();
  };

    
    

  return { OnePlayerGame: OnePlayerGame };
}());
