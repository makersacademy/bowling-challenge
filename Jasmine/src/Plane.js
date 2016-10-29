function Plane () {
this.isLanded = false;
};

Plane.prototype.landPlane = function () {
this.isLanded = true;
};

Plane.prototype.takesOff = function () {
this.isLanded = false;
};
