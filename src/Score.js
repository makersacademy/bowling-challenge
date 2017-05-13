var Score = function(player) {
  this.player = player ? player : new Player()
  this._scores = [];
  this._total = 0;
};

Score.prototype.round = function() {
  this._round = [];
  bowl = this.player.bowl()
  if(this.isStrike(bowl))
    { this._round.push('/');
      this._scores.push(this._round); }
  else
  { this._round.push(bowl);
    secondBowl = this.player.secondBowl();
    if(this.isSpare(bowl, secondBowl))
      {
        this._round.push('/')
        this._scores.push(this._round); }
    else {
      this._round.push(secondBowl);
      this._scores.push(this._round); }}
};

Score.prototype.isStrike = function(bowl) {
  return(bowl === 10)
};

Score.prototype.isSpare = function(bowl, secondBowl) {
  return(bowl + secondBowl === 10)
};

Score.prototype.totalCalculator = function() {
    total = []
    for (var index = 0; index < this._scores.length; index++) {
    if(this._scores[index].includes("/")) {
      if(this._scores[index][1]) {
        next = index + 1;
        sum = this._scores[next][0] + 10;
        total.push(sum);
      }
      else {
        next = index + 1;
        if(this._scores[next].includes("/")) {
          total.push(30);
        }
        else {
          sum = 10 + this._scores[next][0] + this._scores[next][1];
          total.push(sum)
        }
      }
    }
    else
      {sum = this._scores[index][0] + this._scores[index][1];
      total.push(sum); }}
    this._total = total.reduce(add, 0);
    function add(a,b) { return a + b; }
};
