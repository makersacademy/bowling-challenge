'use strict';

describe('Bowling', function(){
    var bowling;

    beforeEach(function(){
        bowling = new Bowling();
    });

    describe('Initial game setup', function(){
        it('begins with a score of 0', function(){
            expect(bowling.getCurrentScore()).toEqual(0);
        });

        it('starts with 0 rolls', function(){
            expect(bowling.rolls).toEqual([])
        });
    });

    describe('Playing a game', function(){
        it('updates the rolls array when ball is rolled once', function(){
            bowling.rollBall(8);
            expect(bowling.rolls).toEqual([8]);
        });
        
        it('updates the rolls array when the ball is rolled multiple times', function(){
            bowling.rollBall(5);
            bowling.rollBall(2);
            expect(bowling.rolls).toEqual([5, 2])
        });

        it('calculates the the score', function(){
            bowling.rollBall(7);
            bowling.rollBall(3);
            bowling.calculateScore();
            expect(bowling.score).toEqual(10);
        });

        it('chunks the array into pairs', function(){
            bowling.rollBall(7);
            bowling.rollBall(2);
            bowling.rollBall(5);
            bowling.rollBall(4);
            bowling.makeFrame();
            expect(bowling.frame).toEqual([ [7, 2], [5, 4] ])
        });

        it('adds 0 to frame if first roll is 10', function(){
            bowling.rollBall(10);
            bowling.makeFrame();
            expect(bowling.frame).toEqual([[10, 0]])
        });

        it('checks', function(){
            bowling.rollBall(0);
            bowling.rollBall(10);
            bowling.makeFrame();
            expect(bowling.frame).toEqual([[0, 10], [0]])
        });
    });
});