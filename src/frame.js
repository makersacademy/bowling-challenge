'use strict';

class Frame {
	constructor(value) {
		this.throws = [value, 0, 0];
		this.next = [0, 0];
		this.oneAfter = [0, 0];
	}

	calculate() {

		let total = 0;
		let type = null;

		if(this.throws[0] == 10){
			total += 10;
			type = 'STRIKE!!!!!';
			if(this.next[0] == 10){
				total += 10 + this.oneAfter[0];
			}else{
				total += this.next[0] + this.next[1];
			}
		}else if(this.throws[0] + this.throws[1] == 10){
			total += 10 + this.next[0];
			type = 'SPARE!!!!!';
		}else{
			total += this.throws[0] + this.throws[1];
		}

		return [total, type];
	}

	calculatePenultimateFrame() {

		let total = 0;
		let type = null;

		if(this.throws[0] == 10){
			type = 'STRIKE!!!!!';
			total += 10 + this.next[0] + this.next[1];
		}else if(this.throws[0] + this.throws[1] == 10){
			total += 10 + this.next[0];
			type = 'SPARE!!!!!';
		}else{
			total += this.throws[0] + this.throws[1];
		}

		return [total, type];
	} 

	calculateLastFrame(go) {

		let total = 0;
		let type = null;
		this.throws.forEach(function(value) {
			total += value;
		});

		if(((go == 1) && (this.throws[0] + this.throws[1] < 10)) || (go == 2)){
			type = 'GAME OVER!!!!!';
		}else if(this.throws[go] == 10){
			type = 'STRIKE!!!!!'
		}else if(this.throws[0] + this.throws[1] == 10){
			type = 'SPARE!!!!!'
		}

		return [total, type];
	}
}