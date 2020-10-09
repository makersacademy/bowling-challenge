'use strict';
class Bowling {
	constructor () {
		this.rolls = []; 
	}
		roll(pins) {
			this.rolls.push(pins);
		}; 

		restart() {
			this.rolls = [] ;
		};
			
		currentTotal() {
			var sum = this.rolls.reduce(add, 0);
			function add(x, y) {
				return x + y
			}
			return sum
			};
		

		score(){
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
	
	};

