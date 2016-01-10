function CurrentFrame() {
  this.shotCount = 1;
  this.first = 0
}

CurrentFrame.prototype.shotOne = function() {
  this.first = Math.floor(Math.random() * 11);
  this.countShots();
  console.log("You hit " + this.first + " pins!");
  return this.first;
};



CurrentFrame.prototype.countShots = function() {
  if (this.shotCount === 1 && this.first === 10) {
    this.shotCount = 1;
  } else if(this.shotCount === 1){
    this.shotCount += 1;
  }  else {
    this.shotCount = 1;
  }
}
