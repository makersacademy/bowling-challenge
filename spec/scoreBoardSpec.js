'use strict';
describe('ScoreBaord', function(){
        var game
    beforeEach(function(){
        game = new ScoreBoard();
    });
    it('should return score 0 to begin with', function() {
        rollMany(20, 0)
        expect(game.score()).toBe(0);
    })
    it('should return score 20 with 20 times 1 pin down', function() {
        rollMany(20, 1)
        expect(game.score()).toBe(20);
    })
    it('should return score 30 with stike at 1st frame and 18 times 1 pin down', function(){
        game.roll(10)
        rollMany(18, 1)
        expect(game.score()).toBe(30);
    })
    it('should return score 300 a perfect game',function() {
        rollMany(12, 10)
        expect(game.score()).toBe(300);
    })
    it('should return score 29 with spare at 1st frame', function(){
        game.roll(5)
        game.roll(5)
        rollMany(18, 1)
        expect(game.score()).toBe(29);
    })
    var rollMany = function(rolls, pins) {
        for (var i = 0; i<rolls; i++){
            game.roll(pins)
        }
    }
})

