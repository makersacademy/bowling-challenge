"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bowling_1 = __importDefault(require("../bowling"));
describe('Bowling', () => {
    describe('.addScore', () => {
        it('should add a number array to the score array', () => {
            let bowling = new bowling_1.default();
            bowling.addScore([4, 5]);
            expect(bowling.scorecard.length).toEqual(1);
        });
        it('should add multiple number arrays to the score array', () => {
            let bowling = new bowling_1.default();
            bowling.addScore([3, 6]);
            bowling.addScore([6, 2]);
            bowling.addScore([9, 0]);
            expect(bowling.scorecard.length).toEqual(3);
            expect(bowling.scorecard[1]).toEqual([6, 2]);
        });
        it('should not allow arrays with a sum greater than 10 to be added', () => {
            let bowling = new bowling_1.default();
            bowling.addScore([6, 6]);
            expect(bowling.scorecard.length).toEqual(0);
            bowling.addScore([100, 0]);
            expect(bowling.scorecard.length).toEqual(0);
        });
        it('should not add any more arrays when the scorecard is 10 long already', () => {
            let bowling = new bowling_1.default();
            for (let i = 0; i < 12; i++) {
                bowling.addScore([4, 5]);
            }
            expect(bowling.scorecard.length).toEqual(10);
        });
        it('should only allow arrays that are 2 long', () => {
            let bowling = new bowling_1.default();
            bowling.addScore([2, 1]);
            bowling.addScore([3, 3, 4]);
            expect(bowling.scorecard.length).toEqual(1);
        });
        it('should only allow the 10th array to be 3 long', () => {
            let bowling = new bowling_1.default();
            for (let i = 0; i < 9; i++) {
                bowling.addScore([4, 5]);
            }
            bowling.addScore([5, 5, 4]);
            expect(bowling.scorecard[9]).toEqual([5, 5, 4]);
        });
        test('last frame can only be 3 long if first 2 is a spare', () => {
            let bowling = new bowling_1.default();
            for (let i = 0; i < 9; i++) {
                bowling.addScore([4, 5]);
            }
            bowling.addScore([1, 5, 8]);
            expect(bowling.scorecard.length).toBe(9);
        });
        test('getting a triple strike in the last frame is possible', () => {
            let bowling = new bowling_1.default();
            for (let i = 0; i < 9; i++) {
                bowling.addScore([2, 7]);
            }
            bowling.addScore([10, 10, 10]);
            expect(bowling.scorecard.length).toEqual(10);
            expect(bowling.scorecard[9]).toEqual([10, 10, 10]);
        });
    });
    describe('.currentScore', () => {
        it('can return a non strike score', () => {
            let bowling = new bowling_1.default();
            bowling.addScore([4, 5]);
            expect(bowling.currentScore).toEqual(9);
        });
        it('can return a multiple non-strike/space score', () => {
            let bowling = new bowling_1.default();
            bowling.addScore([4, 5]);
            bowling.addScore([4, 5]);
            bowling.addScore([4, 5]);
            bowling.addScore([4, 5]);
            expect(bowling.currentScore).toEqual(36);
        });
    });
});
