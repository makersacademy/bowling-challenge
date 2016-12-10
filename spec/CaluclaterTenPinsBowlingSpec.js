'use strict';

describe ('Caluclater for Ten pins bowling', function(){

  var caluclater
  var pins

  beforeEach(function(){
    caluclater = new CaluclaterTenPinsBowling();
    pins = 5;
  });


  describe ('as a default', function(){

    it('should have scores', function(){
      expect( caluclater.scores ).toEqual([]);
    });

    it('should have roll', function(){
      expect( caluclater.roll ).toBe(1);
    });

    it('should have frame', function(){
      expect( caluclater.roll ).toBe(1);
    });

  });

  it ('should pass how many pins', function(){
    expect( caluclater.passScore(pins) ).toEqual(5);
  });


});
