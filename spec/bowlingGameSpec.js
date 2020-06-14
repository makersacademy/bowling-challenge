'use strict'

describe("Game", function(){
    let game
    beforeEach(function(){
        game = new Game();
    });
    it("always starts with a score of 0", function(){
        expect(game.roll).toEqual(0);
    });

    it("is a strike if roll_1 = 10", function(){
        expect(game.isStrike()).toEqual(false);
    });

    it("is a spare if roll_1 + roll_2 = 10", function(){
        expect(game.isStrike()).toEqual(false);
    });





});
