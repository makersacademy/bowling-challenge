'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    plane = jasmine.createSpy('plane', ['land']);
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
  });

  describe('under normal conditions',function(){
    beforeEach(function(){
      
    });
    it('airport has no planes by default', function(){
      expect(airport.planes()).toEqual([]);
    });

    it('airport can clear for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

    it('airport can clear for take off', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });

  describe('under stormy conditions',function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });
    it('does not clear planes for landing', function(){
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during the storm');
    });
    it('does not clear planes for takeoff', function(){
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during the storm');
    });
  });
});
