function Roll(pinsknockedtotal) {
  this.pinsknockedtotal = 0;
}

Roll.prototype.ball = function(pinsKnockedDown) {
  this.pinsknockedtotal = pinsKnockedDown;
};
