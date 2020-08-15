class Game {
  constructor(name1, name2) {
    this.player1 = new Player(name1)
    this.player2 = new Player(name2)
    this.players = [this.player1, this.player2]
    this.turn = this.player1;
  }

  changeTurn() {
    if (this.turn === this.player1) {
      this.turn = this.player2;
    } else if (this.turn === player2) {
      this.turn = this.player1;
    }
  }
}