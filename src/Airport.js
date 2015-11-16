'use strict';

function Airport(capacity, weather) {
  this._weather = typeof weather !== 'undefined'? weather : new Weather();
  this._hangar = [];
  if (capacity === undefined) {this.capacity = 20;
  }
}

Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.instructToLand = function(plane) {
  if (this._weather.isStormy()) {throw new Error('cannot take-off in stormy weather');}
  if (this._hangar.length === this.capacity) {throw new Error("airport is full");}
    this._hangar.push(plane);
};

Airport.prototype.instructToTakeOff = function(plane) {
  if (this._weather.isStormy()) {throw new Error('cannot take-off in stormy weather');}
    this._hangar = [];
};
