'use strict';

var Plane = function(){};

Plane.prototype.land = function(airport) {
  airport.clearForLanding(this);
};
