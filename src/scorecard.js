function Scorecard() {
  this._totalscore = 0;
  this._framescores = {
    1:[],
    2:[],
    3:[],
    4:[],
    5:[],
    6:[],
    7:[],
    8:[],
    9:[],
    10:[],
    11:[],
    12:[]
  };
  this._framestates = {
    1:[],
    2:[],
    3:[],
    4:[],
    5:[],
    6:[],
    7:[],
    8:[],
    9:[],
    10:[],
    11:[]
  };
}

function add(a, b) {
    return a + b;
}

Scorecard.prototype.score = function() {
  return this._totalscore;
};

Scorecard.prototype.roll = function(amount, frame) {
  if(frame === "gameover") {
    return;
  }
  if(frame === 12) {
    this._framescores[frame].push(amount);
    return this._totalscore += amount;
  }
  if(frame === 11) {
    this._framescores[frame].push(amount);
    if(this._framescores[10][0] === 10) {
      this._totalscore += amount;
    }
    return this._totalscore += amount;
  }
  frametotal = this._framescores[frame].reduce(add, 0);
  if(frametotal + amount > 10) {
    throw new Error("Frame score cannot be higher than 10!");
  } else {
    this._framescores[frame].push(amount);
    this._totalscore += amount;
    if(this._framestates[frame - 1] === "spare" && this._framescores[frame].length === 1) {
      this._totalscore += amount;
    }
    if(this._framestates[frame - 1] === "strike") {
      this._totalscore += amount;
    }
    if(this._framestates[frame - 2] === "strike" && this._framestates[frame - 1] === "strike" && this._framescores[frame].length === 1) {
      this._totalscore += amount;
    }
  }
};

Scorecard.prototype.setspare = function(frame) {
  this._framestates[frame] = "spare";
  this._framescores[frame][1] = "/";
};

Scorecard.prototype.setstrike = function(frame) {
  this._framestates[frame] = "strike";
  this._framescores[frame][1] = "X";
};
