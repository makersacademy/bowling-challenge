var Frame = function () {
  this.score = {}
}

Frame.prototype.add = function (ball, score) {
  this.score[ball] = score
}