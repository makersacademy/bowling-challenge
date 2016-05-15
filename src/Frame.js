function Frame(){
  this._count = 1;
  this.roll = 1;
  this.pins = 10;
  this.current = [];
  this.log = [];
}

  Frame.prototype.getCount = function(){
    return this._count;
  };

  Frame.prototype.next = function(){
    this.log.push(this.current);
    this.current = [];
    this.roll = 1;
    this._count ++;
  };

Frame.prototype.newRoll = function(){
  this.roll ++;
};

Frame.prototype.bowl = function(pins){
  this.current.push(pins);
  if (this.roll === 1) {
    this.newRoll();
  } else if (this.roll === 2) {
    this.next();
  }
};


// Frame.prototype.
