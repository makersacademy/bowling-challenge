function Airport () {
  this.capacity = 2;
  this.listLandedPlanes = [];
  this.weather = new Weather ();
};



Airport.prototype.landedPlane = function (plane) {
  if(this.isBadWeather () === true){
    throw ('The plane can\'t land due to stormy weather');
  }
  else if(plane.isLanded === true) {
    throw ('The plane is already in the airport');
  }
  else {
    this.listLandedPlanes.push(plane)
    plane.landPlane ();
  }
};

Airport.prototype.confirmsLanded = function (plane) {
  return 'The plane has landed';
};

Airport.prototype.takenOffPlane = function (plane) {
  if(this.isBadWeather () === true){
    throw ('The plane can\'t take off due to stormy weather');
  }
  else {
  this.listLandedPlanes.splice(this.listLandedPlanes.indexOf(plane), 1 )
  plane.takesOff ();
}
};

Airport.prototype.confirmsTakeOff = function (plane) {
  return 'The plane has taken off';
};

Airport.prototype.fullCapacity = function () {
  if (this.listLandedPlanes.length >= this.capacity) {
    throw ('The airport is full, the plane can\'t land');
  };
};

Airport.prototype.isBadWeather = function () {
  return this.weather.isStormy;
};
