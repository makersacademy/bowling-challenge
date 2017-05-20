function Roll() {
  this.pins1 = 0;
  this.pins2 = 0;
}

Roll.prototype.play = function(index) {
  if (index == 1) {
    this.pins1 = Math.floor(Math.random() * 11);
    return this.pins1;
  }
  if (index == 2) {
    this.pins2 = Math.floor(Math.random() * (11 - this.pins1));
    return this.pins2;
  }
};
