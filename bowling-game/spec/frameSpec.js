"use strict";

describe('Frame', function(){

	var frame; 

	beforeEach(function(){
		frame = new Frame();
	});

	describe('default setting', function(){
		it('sets score at 0', function(){
			expect(frame.score()).toEqual(0);
		});

		it('sets balls to empty array', function(){
			expect(frame.rolls).toEqual([]);
		});
	});
	
	it('understands what a strike is', function () {
		frame.addScore(10);
		expect(frame.isComplete()).toBe(true);
		expect(frame.isStrike()).toBe(true);
		expect(frame.isSpare()).toBe(false);
	});

	it('understands what a spare is', function (){
		frame.addScore(8);
		frame.addScore(2);
		expect(frame.isComplete()).toBe(true);
		expect(frame.isStrike()).toBe(false);
		expect(frame.isSpare()).toBe(true);
	});

	it('checks for incomplete', function(){
		frame.addScore(4);
		expect(frame.isComplete()).toBe(false);
		expect(frame.isStrike()).toBe(false);
		expect(frame.isSpare()).toBe(false);
	});

	it('completes but not a spare or strike', function (){
		frame.addScore(6);
		frame.addScore(2);
		expect(frame.isComplete()).toBe(true);
		expect(frame.isStrike()).toBe(false);
		expect(frame.isSpare()).toBe(false);
	});

});