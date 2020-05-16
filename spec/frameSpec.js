'use strict';

describe('Frame', function() {
	
	let frame;

	beforeEach(function() {
    	frame = new Frame(4);
  	});

	it('stores first move', function() {
		expect(frame.throws).toEqual([4, 0, 0]);
	});

	it('has next moves arrays', function() {
		expect(frame.next).toEqual([0, 0]);
		expect(frame.oneAfter).toEqual([0, 0]);
	});

	describe('#calculate', function() {
		it('can calculate', function() {
			frame.throws[1] = 4;
			expect(frame.calculate()).toEqual([8, null]);
		});
		it('returns strike', function() {
			frame.throws[0] = 10;
			expect(frame.calculate()).toEqual([10, 'STRIKE!!!!!'])
		});
		it('returns spare', function() {
			frame.throws[0] = 5;
			frame.throws[1] = 5;
			expect(frame.calculate()).toEqual([10, 'SPARE!!!!!']);
		});
		it('returns 30 when next 2 throws were strikes', function() {
			frame.throws[0] = 10;
			frame.next[0] = 10;
			frame.oneAfter[0] = 10;
			expect(frame.calculate()).toEqual([30, 'STRIKE!!!!!']);
		});
		it('whem strike, returns value of next 2 throws when they are not strikes', function() {
			frame.throws[0] = 10;
			frame.next[0] = 5;
			frame.next[1] = 5;
			expect(frame.calculate()).toEqual([20, 'STRIKE!!!!!']);
		});
		it('adds on next when spare', function() {
			frame.throws[1] = 6;
			frame.next[0] = 3;
			expect(frame.calculate()).toEqual([13, 'SPARE!!!!!']);
		});
	});

	describe('#calculatePenultimateFrame', function() {
		it('can calculate', function() {
			frame.throws[1] = 4;
			expect(frame.calculatePenultimateFrame()).toEqual([8, null]);
		});
		it('returns strike', function() {
			frame.throws[0] = 10;
			expect(frame.calculatePenultimateFrame()).toEqual([10, 'STRIKE!!!!!'])
		});
		it('returns spare', function() {
			frame.throws[0] = 5;
			frame.throws[1] = 5;
			expect(frame.calculatePenultimateFrame()).toEqual([10, 'SPARE!!!!!']);
		});
		it('returns 30 when next 2 throws were strikes', function() {
			frame.throws[0] = 10;
			frame.next[0] = 10;
			frame.next[1] = 10;
			expect(frame.calculatePenultimateFrame()).toEqual([30, 'STRIKE!!!!!']);
		});
		it('whem strike, returns value of next 2 throws when they are not strikes', function() {
			frame.throws[0] = 10;
			frame.next[0] = 5;
			frame.next[1] = 5;
			expect(frame.calculatePenultimateFrame()).toEqual([20, 'STRIKE!!!!!']);
		});
		it('adds on next when spare', function() {
			frame.throws[1] = 6;
			frame.next[0] = 3;
			expect(frame.calculatePenultimateFrame()).toEqual([13, 'SPARE!!!!!']);
		});
	})
	describe('#calculateLastFrame', function() {
		it('can calculate and return game over', function() {
			frame.throws[1] = 4;
			expect(frame.calculateLastFrame()).toEqual([8, 'GAME OVER!!!!!']);
		});
		it('returns strike', function() {
			frame.throws[0] = 10;
			expect(frame.calculateLastFrame()).toEqual([10, 'STRIKE!!!!!'])
		});
		it('returns spare', function() {
			frame.throws[0] = 5;
			frame.throws[1] = 5;
			expect(frame.calculateLastFrame()).toEqual([10, 'SPARE!!!!!']);
		});
		it('returns 30 when next 2 throws were strikes and returns game over', function() {
			frame.throws[0] = 10;
			frame.throws[1] = 10;
			frame.throws[2] = 10;
			expect(frame.calculateLastFrame()).toEqual([30, 'GAME OVER!!!!!']);
		});
		it('whem strike, returns value of next 2 throws when they are not strikes and returns game over', function() {
			frame.throws[0] = 10;
			frame.throws[1] = 5;
			frame.throws[2] = 5;
			expect(frame.calculateLastFrame()).toEqual([20, 'GAME OVER!!!!!']);
		});
		it('adds on next when spare and returns game over', function() {
			frame.throws[1] = 6;
			frame.throws[2] = 3;
			expect(frame.calculateLastFrame()).toEqual([13, 'GAME OVER!!!!!']);
		});
	})
});
