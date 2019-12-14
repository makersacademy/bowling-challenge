'use strict';
describe('Bowling', function() {

    var bowling;

    beforeEach(function() {
      bowling = new Bowling
    });

    it('records number of pins knocked over', function() {
      expect(bowling.pinNumber(5)).toEqual(5)
    });

    it('records a roll number for a given frame, when pin numbers are passed in', function(){
      expect(bowling.rollNumber(2)).toEqual(1)
    });

});
