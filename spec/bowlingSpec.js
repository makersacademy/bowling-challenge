'use strict';

describe ('Bowling',function(){

    var bowling;
    var frame;

    beforeEach(function() {
        bowling = new Bowling();
    });


    it("should return 0 score for a new game", function() {
        expect(bowling.gameScore()).toEqual(0);
    });

    it("should return the correct score for 10, 10, 7, 3", function() {
        var pins = [10, 10, 7, 3];
        pins.forEach(element => {
            bowling.roll(element);
        });
        expect(bowling.gameScore()).toBe(30);
    });
    
});