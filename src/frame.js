'use strict';

var Frame = function(id) {
  this._id = id;
};

Frame.prototype.getID = function() {
  return this._id;
};
