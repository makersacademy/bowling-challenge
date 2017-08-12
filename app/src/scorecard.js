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
    10:[]
  };
}

function add(a, b) {
    return a + b;
}

Scorecard.prototype.score = function() {
  return this._totalscore;
};

Scorecard.prototype.roll = function(amount, frame) {
  frametotal = this._framescores[frame].reduce(add, 0);
  if(frametotal + amount > 10) {
    throw new Error("Frame score cannot be higher than 10!");
  } else {
    this._framescores[frame].push(amount);
    this._totalscore += amount;
  }
};
