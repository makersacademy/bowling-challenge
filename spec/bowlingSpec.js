'use strict'

describe('Score', function() {
    var score;
    var frame;

    beforeEach(function () {
        score = new Score([10]);
        frame = jasmine.createSpyObj('frame', ['rolls', 'score', 'number']);
        // frame = {
        //     property: "
        // }
    });

    describe('isStrike', function() {
        it('returns true if score at the beginning of rolls is 10', function() {
            score = new Score([10]);
            expect(score._isStrike()).toBe(true);
        });

        it('returns false otherwise', function() {
            score = new Score([7]);
            expect(score._isStrike()).toBe(false);
        });
    });

    describe('isSpare', function() {
        it('returns true if sum of two first scores is 10', function() {
            score = new Score([7, 3]);
            expect(score._isSpare()).toBe(true);
        });

        it('returns false otherwise', function() {
            score = new Score([7, 2]);
            expect(score._isSpare()).toBe(false);
        });
    });

    describe('frame', function() {
        it('Stores a new frame in frames', function() {
            spyOn(score, '_createFrame').and.returnValue(frame);
            score._frame('irrelevant');
            expect(score.frames[0]).toBe(frame);
        });
    });

    describe('frameScore', function() {
        it('returns sum of array passed as argument if frames is empty', function() {
            expect(score._frameScore([1, 2])).toBe(3);
        });

        it('adds previous frame score to array sum if frames not empty', function() {
            frame.score.and.returnValue(3);
            score.frames[0] = frame;
            score._frameScore([1, 2]);

            expect(score._frameScore([1, 2])).toBe(6);
        });
    });



    describe('strike', function() {
    });

    describe('spare', function() {
    });

    describe('noBonus', function() {
    });

    describe('frameScore', function() {
    });

    describe('frameNumber', function() {
    });

    describe('score', function() {
    });

    describe('plays', function() {
    });
});
