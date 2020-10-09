'use strict';

 var Bowling = function() {
		this.rolls = []; 
 };

	Bowling.prototype.roll = function(pins) {
		this.rolls.push(pins);
		}; 

		Bowling.prototype.restart= function() {
			this.rolls = [] ;
			}
		Bowling.prototype.currentTotal = function() {
			var sum = this.rolls.reduce(add, 0);
			function add(x, y) {
				return x + y
			}
			return sum
			};
		

	Bowling.prototype.score = function() {
			var result = 0;
			var rollIndex = 0;
			var bowlinggame = this;

			for (var frameIndex = 0; frameIndex < 10; frameIndex ++) {
				if (strike()) {
					result += strikeScore();
					rollIndex ++;
				} else if (spare()) {
					result += spareScore();
					rollIndex += 2; 
				} else {
						result += gameScore();
						rollIndex += 2
					}
				}
				
				return result;

			function spare() {
				return bowlinggame.rolls[rollIndex] + bowlinggame.rolls[rollIndex + 1] == 10;
			}

			function strike() {
			return bowlinggame.rolls[rollIndex] == 10;
			}

			function spareScore() {
				return bowlinggame.rolls[rollIndex] + bowlinggame.rolls[rollIndex + 1] + bowlinggame.rolls[rollIndex + 2];
			}

			function strikeScore() {
				return bowlinggame.rolls[rollIndex] + bowlinggame.rolls[rollIndex + 1] + bowlinggame.rolls[rollIndex + 2];
			}

			function gameScore() {
				return bowlinggame.rolls[rollIndex] + bowlinggame.rolls[rollIndex + 1];
			}
		
	};
	


