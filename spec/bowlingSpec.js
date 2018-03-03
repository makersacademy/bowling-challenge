describe ('Bowling', function() {

    var bowling;

    beforeEach(function() {
        bowling = new Bowling();
    });

    it("returns 0 score for a new game", function() {
        expect(bowling.gameScore()).toEqual(0);
    });

    it("returns the correct score for 10, 10, 7, 3", function() {
        var testPins = [10, 10, 7, 3];
        testPins.forEach(element => {
            bowling.roll(element);
        });
        expect(bowling.gameScore()).toBe(57);
    });

    it("returns the correct score for 10, 10", function() {
        var testPins = [10, 4, 5];
        testPins.forEach(element => {
            bowling.roll(element);
        });
        expect(bowling.gameScore()).toBe(28);
    });

    it("returns 30 for consecutive 2 strikes", function() {
        var testPins = [10, 10];
        testPins.forEach(element => {
            bowling.roll(element);
        });
        expect(bowling.gameScore()).toEqual(30);
    });

    it("returns 44 for 1 spare + 1 strike + next frame of 5 & 2", function() {
        var testPins = [5, 5, 10, 5, 2];
        testPins.forEach(element => {
            bowling.roll(element);
        });
        expect(bowling.gameScore()).toEqual(44);
    });

    it("gutter game when player never hits a pin",function() {
        for (var i = 0; i < 20;i++) {
            bowling.roll(0);
        }
        expect(bowling.gameScore()).toEqual(0);
    });


    it("should give correct score for a no-strike and no-spare game", function() {
        for (var i = 0; i < 20; i++) {
            bowling.roll(1);
        }
        expect(bowling.gameScore()).toEqual(20);
    });

});
