'use strict';

describe('Game', function() {

    var game;

    beforeEach(function() {
        game = new Game();
    });

    var bowlMany = function(n, pins) {
        for (var i = 0; i < n; i++) {
            game.bowl(pins)
        }
    }

    var bowlSpare = function() {
        game.bowl(5);
        game.bowl(5);
    }

    var bowlStrike = function() {
        game.bowl(10);
    }

    it('should handle a perfect game', function() {
        bowlMany(12, 10);
        expect(game.score()).toEqual(300);
    });

    it("should handle all ones", function() {
        bowlMany(20, 1);
        expect(game.score()).toEqual(20);
    });

    it("should handle gutter game", function() {
        bowlMany(20, 0);
        expect(game.score()).toEqual(0);
    });

    it("should handle all ones", function() {
        bowlMany(20, 1);
        expect(game.score()).toEqual(20);
    });

    it("should handle one spare", function() {
        bowlSpare();
        game.bowl(3);
        game.bowl(0);
        bowlMany(16, 0);
        expect(game.score()).toEqual(16);
    });

    it("should handle one strike", function() {
        bowlStrike();
        game.bowl(3);
        game.bowl(4);
        bowlMany(16, 0);
        expect(game.score()).toEqual(24);
    });
//
//     it('exists', function() {
//         expect(game).not.toBeUndefined();
//     });
//
//     it('starts on frame 1', function() {
//         expect(game._currentFrame).toEqual(1);
//     });
//
//     it('allows the player to bowl', function() {
//         expect(game.bowl).not.toBeUndefined(); //TODO make a better test using spyOnObj
//     });
//
//     it('records the end of each frame', function() {
//         game.bowl(7);
//         game.bowl(2)
//         expect(game.bowl(2)).toEqual(game.nextFrame());
//     });
//
//     it('records the scores of each frame on the scorecard', function() {
//         game.bowl(7);
//         game.bowl(2);
//         expect(game._scorecard[0][0]).toBe(7);
//         expect(game._scorecard[0][1]).toBe(2);
//     });
//
//     it('ends after frame 10', function() {
//         for(var i = 1; i <= 10; i++) {
//             game.bowl(2);
//             game.bowl(4);
//         }
//         // debugger;
//         expect(game.isEnded()).toBe(true);
//     })
//
//     it('raises an error if you try to bowl after all 10 frames have finished', function() {
//         game._currentFrame = 11;
//         expect(function(){ game.bowl(2); }).toThrowError("The game has ended")
//     })
//
//
});
