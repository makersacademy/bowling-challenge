'use strict';

describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport(1);
    plane = jasmine.createSpy('plane');
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
});

// describe('instructs a plane to', function() {
//   it('land', function() {
//     airport.land(plane);
//     expect(airport.planes).toContain(plane);
//   });
//
//   it('take_off', function() {
//     airport.take_off(plane);
//     expect(airport.planes).not.toContain(plane);
//   });
// });
//
// describe('prevent planes landing when', function() {
//   it('is full', function() {
//     airport.land(plane);
//     expect(function() {airport.land(plane);}).toThrowError('Cannot land: airport is full');
//   });
// });
