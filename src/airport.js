'use strict';

var Airport = function(capacity) {
  this._hangar = [];
  this.capacity = capacity;
};

var plane = "plane";

Airport.prototype.planes = function() { return this._hangar; };

Airport.prototype.clearForLanding = function(plane){
  // if (this.planes.length >= this.capacity) {
  //   throw new Error('Cannot land: airport is full');
  // }
  this._hangar.push(plane);
};

// Airport.prototype.take_off = function(plane){
//   this.planes.pop(plane);
// };
