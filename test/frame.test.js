import Frame from '../src/frame.js';

let frame;

describe('Frame', () => {
	beforeEach(() => {
		frame = new Frame();
	});

	test('Strike if roll 10 in first go', () => {
		frame.roll(10);
		expect(frame.score).toEqual(10);
		expect(frame.result).toEqual('Strike');
	});

	test('Spare if roll 10 in two rolls', () => {
		frame.roll(5);
		frame.roll(5);
		expect(frame.score).toEqual(10);
		expect(frame.result).toEqual('Spare');
	});

	test('Frame with no Strike and Spare', () => {
		frame.roll(1);
		frame.roll(1);
		expect(frame.score).toEqual(2);
		expect(frame.result).toEqual('');
	});

	test('Can not roll more than pinsLeft', () => {
		expect(function () {
			frame.roll(11);
		}).toThrow('Not enough pins left');
	});

	test('Pins becomes 5 after a roll of 5', () => {
		frame.roll(5);
		expect(frame.pinsLeft()).toEqual(5);
	});

	test('Pins for bonus roll is 10', () => {
		expect(frame.pinsLeft({ bonus: true })).toEqual(10);
	});

	test('can add score (for adjust scores for past strike/spare frames)', () => {
		frame.roll(5);
		frame.addScore(6);
		expect(frame.score).toEqual(11);
	});
});
