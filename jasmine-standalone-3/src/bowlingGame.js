class Airport {

constructor(capacity) {
  this.capacity = capacity
  this.planes = [];
};


land(plane) {
  this.planes.push(plane);
  return this.planes;
};

takeOff(plane) {
  this.planes.pop();
};
};
