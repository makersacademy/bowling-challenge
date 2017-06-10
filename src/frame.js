function Frame () {
  this.roles = [];
};

Frame.prototype.add = function (role) {
  this.roles.push(role);
};
