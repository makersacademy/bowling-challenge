'use strict';

describe('Frame', function() {
    var frame;
    var roll;
    beforeEach(function() {
    	frame = new Frame();
        //roll = jasmine.createSpyObj('roll');
    });
    describe('roll', function() {
        it('returns a number between 0 and 10', function() {
        	frame.roll();
        	expect(frame.score()[0]).toBeLessThan(11);
        });
    });
});