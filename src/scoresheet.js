class Scoresheet {

  constructor() {

    this.game = []
    this.score = 0

  }

  addFrame(frame) {

    this.game.push(frame)

  }

  scoreTotal() {
    this.score = 0
    this.game.forEach(frame => this.score += frame['First Throw'] + frame['Second Throw'])
    return this.score
  }

}