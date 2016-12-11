//

function Frame() {}

Frame.prototype.inputFirstThrow = function(number) {
    this.frameScore = [number];
};

Frame.prototype.inputSecondThrow = function(number) {
  this.frameScore.push(number);
};

Frame.prototype.inputThirdThrow = function(number) {
  this.frameScore.push(number);
}
