'use strict';

function Plane() {
}

Plane.prototype.land = function(airport) {
  airport.instructToLand(this);
  this._location = airport;
};

Plane.prototype.takeoff = function(airport) {
  this._location.instructToTakeOff();
};
