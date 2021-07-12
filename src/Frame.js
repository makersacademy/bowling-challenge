class Frame {
  constructor() {
    this.game = [];
  }

  add(frame) {
    this.game.push(frame);
  }

  totalScore() {
    let game = this.game.flat();
    let total = 0;
    console.log(`game length: ${game.length}`);
    console.log(game);

    for(let i = 0; i < game.length; i += 2) {
      console.log(`frame: ${i + 1}`);
      console.log(`shot one: ${game[i]}`)

      let frame = (game[i] + game[i + 1]);
      let bonus = (frame + game[i + 2]);

      if (game[i] === 10) {
        total += bonus;
        i -= 1;
      } else if (frame === 10) {
        total += bonus;
      } else {
        total += frame;
      }
      console.log(total);
    }
    return total;
  }
}
