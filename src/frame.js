function Frame () {
  this.number = undefined;
  this.roles = [];
  this.score = undefined;

};

Frame.prototype.add = function (role) {
  this.roles.push(role);
};

Frame.prototype.calculateScore = function () {
  this.score = this.roles[0].points + this.roles[1].points;
};
