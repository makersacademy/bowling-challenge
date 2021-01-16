class Game {

  constructor() {
    this.score = 0;
    this.frames = Array(10).fill(new Frame());
  }


  play() {
    for (let i = 0; i < 1; i++) {
      let roll_1;
      let roll_2;

      do {
        roll_1 = Number(prompt("How many pins did you knock down?: "));
      } while (roll_1 <= 0 || roll_1 > 10);

      console.log(typeof roll_1);
    }

  }

}

// test = new Game();
// game.play;
