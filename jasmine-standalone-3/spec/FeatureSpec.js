'use strict';

describe('Feature Test:', function () {

  var plane;
  var airport;

  beforeEach(function(){
     plane = new Plane();
     airport = new Airport();
   });

   it('planes can be instructed to land at an airport', function(){
     airport.land(plane);
     expect(airport.planes).toContain(plane);
   });

   it('planes can be instructed to take off', function(){
     airport.land(plane);
     airport.takeOff(plane);
     expect(airport.planes).not.toContain(plane);
 });

});
