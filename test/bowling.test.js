import Bowling from '../src/bowling.js';

let bowling;
describe('Bowling', () => {
	beforeEach(() => {
		bowling = new Bowling();
	});

	test('New frame after 2 rolls (no strike or spare)', () => {
		bowling.roll(1);
		bowling.roll(4);
		expect(bowling.frames[0].score).toEqual(5);
		expect(bowling.frames[1].score).toEqual(0);
	});

	test('New frame after 2 rolls (spare)', () => {
		bowling.roll(5);
		bowling.roll(5);
		expect(bowling.frames[0].score).toEqual(10);
		expect(bowling.frames[1].score).toEqual(0);
	});

	test('New frame after Strike', () => {
		bowling.roll(10);
		expect(bowling.frames[0].score).toEqual(10);
		expect(bowling.frames[1].score).toEqual(0);
	});

	test('isGameOver change from false to true after 10 frames of strike with 2 bonus roll', () => {
		for (let i = 0; i < 11; i++) {
			bowling.roll(10);
			expect(bowling.isGameOver).toEqual(false);
		}
		bowling.roll(10);
		expect(bowling.isGameOver).toEqual(true);
	});

	test('Score 300 after 10 frames of strike with 2 bonus roll', () => {
		for (let i = 0; i < 12; i++) {
			bowling.roll(10);
		}
		expect(bowling.totalScore).toEqual(300);
	});

	test('Invalid roll after game over', () => {
		for (let i = 0; i < 12; i++) {
			bowling.roll(10);
		}
		bowling.roll(10);
		expect(bowling.totalScore).toEqual(300);
	});

	test('Example roll scores 133', () => {
		bowling.roll(1);
		bowling.roll(4);
		bowling.roll(4);
		bowling.roll(5);
		bowling.roll(6);
		bowling.roll(4);
		bowling.roll(5);
		bowling.roll(5);
		bowling.roll(10);
		bowling.roll(0);
		bowling.roll(1);
		bowling.roll(7);
		bowling.roll(3);
		bowling.roll(6);
		bowling.roll(4);
		bowling.roll(10);
		bowling.roll(2);
		bowling.roll(8);
		bowling.roll(6);
		expect(bowling.totalScore).toEqual(133);
	});
});
