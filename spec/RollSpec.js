'use strict';

describe('Roll', function(){
  var roll;

  beforeEach(function(){
    roll = new Roll;
  });

  describe('new', function(){

    it('should create an instance of Roll', function(){
      expect(roll instanceof Roll).toBe(true);
    });

  });

});
