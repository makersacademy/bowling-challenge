class Scorecard {
  constructor() {
    this.frames = [];
  }

	status() {
		if(this.frames.length == 10) {
      game.finish(true)
     };
	}
}
