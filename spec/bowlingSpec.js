'use strict';
describe('Bowling', function() {

    var bowling;

    beforeEach(function() {
      bowling = new Bowling
    });

    it('records number of pins knocked over', function() {
      expect(bowling.pinNumber(5)).toEqual(5)
    });

});
