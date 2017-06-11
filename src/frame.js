function Frame () {
  this.number = undefined;
  this.roles = [];
  this.score = undefined;

};

Frame.prototype.add = function (role) {
  this.checkInRangeOfRegularScore(role);
  this.roles.push(role);
};

Frame.prototype.calculateScore = function () {
  this.score = this.roles[0].points + this.roles[1].points;
};

Frame.prototype.play = function () {
  for(var i = 0; i<2; i++) {
    var role = new Role();
    var userInput = prompt("How many pins did you knock down?");
    var knockedDownPins = Number(userInput)
    role.addPoints(knockedDownPins);
    this.add(role);
  };
  this.calculateScore();
};

Frame.prototype.checkInRangeOfRegularScore = function (role) {
  if (this.roles.length === 1) {
    console.log(this.roles[0].points);
    if (this.roles[0].points + role.points > 10) {
      throw Error("Max total regular points are 10");
    };
  };
};
