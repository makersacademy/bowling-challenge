class Bowling {
  constructor(currentScore = 0) {
    this.currentScore = currentScore
    this.frames = []
    this.strikes = 0
    this.spares = 0
  };

  rolls(roll1, roll2) {
    if (roll1 == 10) {
      this.strike()
    } else if (roll1 + roll2 == 10) {
      this.spare()
    } else if (this.spares == 0 && this.strikes == 0) {
      this.currentScore += (roll1 + roll2)
    } else if (this.strikes !== 0) {
      this.addStrike(roll1, roll2)
    } else if (this.spares !== 0) {
      this.addSpare(roll1, roll2)
    };
    this.frames.push([roll1, roll2])
  };

  strike() {
    this.strikes += 1
  };

  spare() {
    this.spares += 1
  }

  addStrike(roll1, roll2) {
    let spliceNumber = "-" + (this.strikes + 1)
    spliceNumber.to_i

    let end = this.frames.splice(spliceNumber)

    let withoutZeros = []

    for (let i = 0; i < end.length; i++) {
      var arr = end[i]
        for (let j = 0; j < arr.length; j++) {
          if (arr[j] !== 0) {
            withoutZeros.push(arr[j])
          }
       }
    }

    if (roll1 === 0) {
        withoutZeros.push(0)
    }

    if (roll2 === 0) {
        withoutZeros.push(0)
    }

    withoutZeros.push(roll1)
    withoutZeros.push(roll2)

    for (let k = 0; k < withoutZeros.length; k++) {
      while (withoutZeros.length > 2) {
          this.currentScore += (withoutZeros[0] + withoutZeros[1] + withoutZeros[2])
          withoutZeros.shift()
      }
    }

    this.currentScore += (withoutZeros[0] + withoutZeros[1])
    this.strikes = 0;
  }

  addSpare(roll1, roll2) {
    this.currentScore += (10 + roll2 + (2 * roll1))
    this.spares = 0;
  };
};
