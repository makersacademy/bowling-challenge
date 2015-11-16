'use strict';

describe("Airport", function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    plane = jasmine.createSpy('plane');
    weather = { isStormy: function(){} };
    airport = new Airport(weather);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  describe("when airport is full", function() {

    it("cannot land a plane", function() {
      for (var i=0; i<20; i++) {
        airport.instructToLand(plane);}
        expect(function() { airport.instructToLand(plane) }).toThrowError("airport is full")
    });
  });

  describe('under normal conditions', function(){
    beforeEach(function(){
      spyOn(weather,'isStormy').and.returnValue(false);
    });

    it('can clear planes for landing', function(){
      airport.instructToLand(plane);
      expect(airport.planes()).toEqual([plane]);
    });

    it("instructs plane to take off", function() {
      airport.instructToLand(plane);
      airport.instructToTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });

  });

  describe('when weather is stormy', function() {
    beforeEach(function(){
      spyOn(weather,'isStormy').and.returnValue(true);
    });

    it('can instruct plane not to take-off', function(){
      expect(function() { airport.instructToTakeOff(plane); }).toThrowError('cannot take-off in stormy weather');
    });
    it('can instruct plane not to land', function(){
      expect(function() { airport.instructToLand(plane); }).toThrowError('cannot land in stormy weather');
    });
  });
});
