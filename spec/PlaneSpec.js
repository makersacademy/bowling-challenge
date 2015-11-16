'use strict';

describe('Plane', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['instructToLand','instructToTakeOff'])
  });

  it('can land at an airport', function(){
    plane.land(airport);
    expect(airport.instructToLand).toHaveBeenCalledWith(plane);
  });

  it('can take off from an airport', function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.instructToTakeOff).toHaveBeenCalledWith();
  });
});
