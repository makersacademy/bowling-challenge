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
        it('reports it is a spare when first bowl scores 0 and second bowl scores 10', function() {
            frame.bowl(0);
            frame.bowl(10);
            expect(frame.isASpare()).toBe(true);
        });
    });

    describe('completion', function() {
        it('reports the frame is not completed at start', function() {
            expect(frame.isComplete()).toBe(false);
        });
        it('reports the frame is not completed after first bowl if score is less than 10', function() {
            frame.bowl(5);
            expect(frame.isComplete()).toBe(false);
        });
        it('reports the frame is complete if first bowl is a strike', function() {
            frame.bowl(10);
            expect(frame.isComplete()).toBe(true);
        });
        it('reports the frame is complete after two bowls', function() {
            frame.bowl(0);
            frame.bowl(10);
            expect(frame.isComplete()).toBe(true);
        })
        it('reports the frame is complete after two gutter bowls', function() {
            frame.bowl(0);
            frame.bowl(0);
            expect(frame.isComplete()).toBe(true);
        })
    });
});