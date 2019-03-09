describe('game', function() {

    beforeEach(function() {
        game = new Game();
        console.log(game);
    });

    it('has 10 frames', function() {
        expect(game.frames.length).toEqual(10);
    });

    // it('has a score that is the total of the frame scores', function() {
    //     frameSpy = jasmine.createSpy('frame');;  // TO DO mock the frame.total
    //     framesSpies = [];
    //     for (var i =0; i < 10; i++) {
    //         framesSpy.push(frameSpy);
    //     }
    //     spyOn(game, "initializeFrames").and.returnValue(framesSpies);
    //     expect(game.totalScore).toEqual(20);
    // });
});