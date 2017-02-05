'use strict';

describe('Shot', function() {
    var shot;
    
    beforeEach(function() {
        shot = new Shot();
    });
    
    it("#bowl returns an integer", function() {
        spyOn(Math, 'random').and.returnValue(0.5);
        expect(shot.bowl(10)).toEqual(5);
    });
})