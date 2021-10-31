class Scorecard {
  constructor(game){
    this.game = game;
  }

  frames(){
    let frame_nums = Array.from({ length: 10 }, (_, i) => i + 1);
    return frame_nums.map((x) => x.toString().padStart(5)).join("|");
  };
  
  rolls(){
    let theRolls = [];
    this.game.frames.map((x) => theRolls.push(x.first_roll, x.second_roll));
    let each_space = Array(20).fill(" ");
    let each_pin = theRolls.concat(each_space);
    each_pin.length = 20;
    return each_pin.map((x) => x.toString().padStart(2)).join("|");
  };
  
  scores(){
    let theScores = [];
    this.game.frames.map((x) => theScores.push(x.score));
    let each_space = Array(10).fill(" ");
    let each_pin = theScores.concat(each_space);
    each_pin.length = 10;
    return each_pin.map((x) => x.toString().padStart(5)).join("|");
  };
  
  card(){
    console.log(`${"\n FRAMES:".padStart(8)}` + this.frames());
    console.log(`${"ROLLS:".padStart(8)}` + this.rolls());
    console.log(`${"SCORES:".padStart(8)}` + this.scores() + "\n");
  };
}

module.exports = Scorecard;
