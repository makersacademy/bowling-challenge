function Roll(pinsknockedtotal) {
  this.pinsknockedtotal = null;
}

Roll.prototype.play = function(pinsKnockedDown) {
  this.pinsknockedtotal = pinsKnockedDown;
};
