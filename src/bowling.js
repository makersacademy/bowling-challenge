function BowlingScorecard() {

  this.history = [
    [null,null],
    [null,null],
    [null,null],
    [null,null],
    [null,null],
    [null,null],
    [null,null],
    [null,null],
    [null,null],
    [null,null,null]
  ];
  this.frameScore = [null,null,null,null,null,null,null,null,null,null];
  this.totalScore = 0;
  this.endofgame = false;

};

var obj1 = {"coord":{"lon":-0.13,"lat":51.51},"sys":{"type":1,"id":5089,"message":0.3493,"country":"GB","sunrise":1433216867,"sunset":1433275755},"weather":[{"id":311,"main":"Drizzle","description":"rain and drizzle","icon":"09d"},{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"base":"stations","main":{"temp":288.64,"pressure":1006,"humidity":93,"temp_min":286.95,"temp_max":290.15},"visibility":5000,"wind":{"speed":8.2,"deg":220,"var_beg":190,"var_end":250,"gust":13.4},"clouds":{"all":75},"dt":1433247736,"id":2643743,"name":"London","cod":200};


var obj2 = {"spike":{"status":"hungry","pockets":{items:["phone","key"]}}}

manipuateJSON = function() {
  var coachname = "spike"
  alert(obj2[coachname].pockets.items[0]);

}


BowlingScorecard.prototype.nextBall = function(points){
  for (var frame = 0; frame < 9; frame++) {
    for (var go = 0; go < 2; go++) {
      if ( this.history[frame][go] == null ) {
            this.history[frame][go] = points;

            if ((this._isFrameStrike(frame)) && (go === 0)) {
              this.history[frame][1] = 0;
              this._updateStrikeBonus(10,0,frame);
            }
            if (go === 0 ) this._updateSpareBonus(points,frame);
            if (go === 1 ) this._updateFrameScore(this.history[frame][0],points,frame);
            if (go === 1 ) this._updateStrikeBonus(this.history[frame][0],points,frame);
            points = null;
            break;
      }; //if
    }; //for
    if ( points == null ) break;
  }; // for

  if (points != null) {
    if ( this.history[9][0] == null ) {
      this.history[9][0] = points;
    }
    else if ( this.history[9][1] == null ) {
      this.history[9][1] = points;
      if (this.history[9][0] + this.history[9][1] < 10) { // don't get a third go.
        endofgame = true;
        this._updateFrameScore(this.history[9][0],this.history[9][1],9);
      };
    }
    else if ( (this.history[9][2] == null) && !endofgame ) {
      this.history[9][2] = points;
      if (( this.history[9][0] === 10) && ( this.history[9][1] != 10)){
        this.frameScore[9] = 10 + this.history[9][1]*2 + this.history[9][2]*2;
      }
      else if (( this.history[9][0] === 10) && ( this.history[9][1] === 10)){
        this.frameScore[9] = 20 + 10 + this.history[9][2]*3;
      }
      else if (this.history[9][0] + this.history[9][1] === 10){
        this.frameScore[9] = 10 + this.history[9][2]*2;
      };
    }
    else {
      throw "end of game"
    };
  }; //if

  this._updateScore();
};

BowlingScorecard.prototype._updateFrameScore = function(ball1,ball2,frame){
  if (ball1 + ball2 != 10) this.frameScore[frame] = ball1 + ball2
};

BowlingScorecard.prototype._updateSpareBonus = function(points,frame){
  if (frame > 0) {
    if (((this.history[frame-1][0] + this.history[frame-1][1]) === 10) && ( this.history[frame-1][0] != 10 ) ) this.frameScore[frame-1] = 10 + points;
  };
};

BowlingScorecard.prototype._updateStrikeBonus = function(ball1,ball2,frame){
  if (frame > 0 ) { if (this._isFrameStrike(frame-1) && !this._isFrameStrike(frame)) { this.frameScore[frame-1] = 10 + ball1 + ball2 }; };
  if (frame > 1 ) { if (this._isFrameStrike(frame-1) && this._isFrameStrike(frame-2)) { this.frameScore[frame-2] = 10 + 10 + ball1; };
  };
};

BowlingScorecard.prototype._updateScore = function(){
  this.totalScore = 0;
  for (var frame = 0; frame < 10; frame++) {
    this.totalScore += this.frameScore[frame];
  }
};

BowlingScorecard.prototype._isFrameStrike = function(frame){
  return this.history[frame][0] === 10;
};



