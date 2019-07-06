function Frame() {
  this.frame_number = 1;
};

Frame.prototype.calculateFrame = function (roll) {
    console.log(roll)
    return Math.ceil(roll().length / 2);
};
