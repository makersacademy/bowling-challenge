class Bowling {
  constructor() {
    this.rolls = [];
  };

  roll(pins) {
    this.rolls.push(pins);
  };

  get score() {
    let score = 0;
    let rollIndex = 0;

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];

      if (frameScore === 10) {
        score += 10 + this.rolls[rollIndex + 2];
      } else {
        score += frameScore;
      }
      
      rollIndex += 2;
    }

    return score;
  };
}

module.exports = Bowling;


// class Bowling

//   def initialize
//     @rolls = []
//   end

//   def roll(no_of_pins)
//     @rolls << no_of_pins
//   end

//   def score
//     result = 0 
//     rollIndex = 0
//     10.times do 
//       if strike?(rollIndex)
//         result += strikeScore(rollIndex)
//         rollIndex += 1
//       elsif spare?(rollIndex)
//         result += spareScore(rollIndex)
//         rollIndex += 2
//       else
//         result += frameScore(rollIndex)
//         rollIndex += 2
//       end
//     end
//     result
//   end

// private

//   def strike?(rollIndex)
//     @rolls[rollIndex] == 10
//   end

//   def strikeScore(rollIndex)
//     @rolls[rollIndex] + @rolls[rollIndex + 1] + @rolls[rollIndex + 2]
//   end

//   def spare?(rollIndex)
//     @rolls[rollIndex] + @rolls[rollIndex + 1] == 10
//   end

//   def spareScore(rollIndex)
//     @rolls[rollIndex] + @rolls[rollIndex + 1] + @rolls[rollIndex + 2]
//   end

//   def frameScore(rollIndex)
//     @rolls[rollIndex] + @rolls[rollIndex + 1]
//   end

// end