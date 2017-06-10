function Frame () {
  this.number = undefined;
  this.roles = [];

};

Frame.prototype.add = function (role) {
  this.roles.push(role);
};
