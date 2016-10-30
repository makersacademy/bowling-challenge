var Frame = require('../lib/Frame.js');

describe('Frame', function() {
    var frame;

    beforeEach(function() {
        frame = new Frame();
    });

    describe('initialization', function() {
        it('total frame score starts at zero', function() {
            expect(frame.totalScore()).toEqual(0);
        });
    })
    
    describe('keeping score', function() {
        it('takes a score for first bowl', function() {
            frame.bowl(5);
            expect(frame.totalScore()).toEqual(5);
        });
        it('takes a score for second bowl', function() {
            frame.bowl(5);
            frame.bowl(3);
            expect(frame.totalScore()).toEqual(8);
        });
    });

    describe('strikes and spares', function() {
        it('reports it is not a strike at start of game', function() {
            expect(frame.isAStrike()).toBe(false);
        });
        it('reports it is not a spare at start of game', function() {
            expect(frame.isASpare()).toBe(false);
        });
        it('reports it is a strike when first bowl scores 10', function() {
            frame.bowl(10);
            expect(frame.isAStrike()).toBe(true);
            expect(frame.isASpare()).toBe(false);
        });
        it('reports it is a spare when total score after two bowls is 10', function() {
            frame.bowl(5);
            frame.bowl(5);
            expect(frame.isASpare()).toBe(true);
        });
    });
});