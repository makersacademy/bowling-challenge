class BowlingFrame{
	constructor() {
		this.pinCount = 10;
		this.recordRoll = []
	}

	roll(num = 0) {
		if (this.recordRoll.length < 2 && this.pinCount > 0){
			this.pinCount -= num;
			this.recordRoll.push(num)
		} else {
			return "Can't roll!"
		}
	}
}
