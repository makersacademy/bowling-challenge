'use strict';

describe('Feature: ', function() {
    var game;
    var frame;

    beforeEach(function() {
        game = new Game();
        frame = game._frame;
    });

    // it('I can take my first turn and knock some pins down', function(){
    //     expect(frame._currentTurn).toEqual(0);
    //     game.bowl(8);
    //     expect(frame._score[0]).toEqual(8);
    // });
    //
    // it('I can take my second turn and knock some pins down', function(){
    //     expect(frame._currentTurn).toEqual(0);
    //     game.bowl(3);
    //     expect(frame._score[0]).toEqual(3);
    //     expect(frame._currentTurn).toEqual(1);
    //     game.bowl(6);
    //     expect(frame._score[1]).toEqual(6);
    // });
    //
    // it('I can fail to knock any pins down (gutter ball)', function(){
    //     game.bowl(0);
    //     expect(frame._score[0]).toEqual(0);
    // });
    //
    // it('I can get a spare', function(){
    //     game.bowl(8);
    //     game.bowl(2);
    //     expect(frame._score[2]).toEqual('/');
    // });
    //
    // it('I can get a strike', function(){
    //     game.bowl(10);
    //     expect(frame._score[2]).toEqual('X');
    // });
    //
    // it('I can check the scoreboard', function() {
    //     game.bowl(6);
    //     game.bowl(3);
    //     expect(game.scoreboard()).toContain("Frame 1: 6,3");
    // });
    //
    // describe('Finishing a game', function() {
    //
    //     it('I can finish a game', function() {
    //         for(var i = 1; i <= 10; i++) {
    //             game.bowl(2);
    //             game.bowl(4);
    //         }
    //         expect(function(){ game.bowl(2); }).toThrowError("The game has ended")
    //     });
    //
    //     it('I can bowl a gutter game (hit no pins...ever)', function(){
    //         for(var i = 1; i <= 10; i++) {
    //             game.bowl(0);
    //             game.bowl(0);
    //         }
    //         expect(game._score).toEqual(0);
    //     });

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

    it('I can bowl a perfect game', function() {
        bowlMany(12, 10);
        // debugger;
        expect(game.score()).toEqual(300);
    });

    it("should handle all ones", function() {
        bowlMany(20, 1);
        // debugger;
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

    // });

});
