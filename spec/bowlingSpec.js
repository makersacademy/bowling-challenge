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

    it("should throw an error if pins passed are out of range", function() {
        var error = "Pins should be between 0 and 10 (both inclusive); got 11 pins";
        expect(function() { bowling.roll(11); }).toThrow(Error(error));
    });
    
});