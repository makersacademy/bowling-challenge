function Player (){
  this.scorecard = [];
  this.points = 0;
  this.bonus = 0;
  this.firstbowl = 0;
  this.secondbowl = 0;
  this.frames = 0;
  this.strike = false;
  this.spare = false;
};

Player.prototype.bowl1 = function(pins) {
  this.firstbowl = pins;
  this.frames ++;
  if (pins == 10) {
    this.strike = true;
    this.bonus += pins;
  };
  this.tracker();
};

Player.prototype.bowl2 = function(pins) {
  this.secondbowl = pins;
  if(this.firstbowl == 10) throw 'Strike, wait for next frame!'
  if(this.firstbowl + pins == 10) {
    this.spare = true;
    this.bonus = pins + this.firstbowl;
  }
  this.tracker();
};

Player.prototype.tracker = function() {
  var position = (this.frames -1);
  var total = (this.firstbowl + this.secondbowl + this.bonus);

  if (this.strike) {
    this.strike = false;
    this.bonus += this.firstbowl + this.secondbowl;
    if ((this.frames == 1) || (this.frames == 2)) {
      this.scorecard[position] = 0;

    } else {
        this.scorecard[this.frames - 3] = this.bonus;
      };

  } else if (this.spare) {
    this.spare = false;
    if (this.frames == 1) {
      this.bonus =+ this.firstbowl + this.secondbowl;
      this.scorecard[position] = 0;
    } else {
      this.bonus =+ this.firstbowl + this.secondbowl;
      this.scorecard[position] = this.bonus;
    };
  } else {
    this.scorecard[position] = total;
  };
};