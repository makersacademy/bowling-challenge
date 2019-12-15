class Bowling {
  constructor(currentScore = 0) {
    this.currentScore = currentScore
    this.frames = []
    this.strikes = 0
    this.spares = 0
  };

  rolls(roll1, roll2) {
    if(roll1 + roll2 == 10 && roll1 !== 10 && roll2 !== 10) {
      this.spares = 1
    }

    if (roll1 == 10) {
      this.strike()
    } else if (this.spares === 0 && this.strikes === 0) {
      this.currentScore += (roll1 + roll2)
    } else if (this.strikes !== 0) {
      this.accumulatingStrike(roll1, roll2)
    } else if (this.spares == 1 && this.frames.length !== 0 && this.strikes == 0) {
      this.addSpare(roll1, roll2)
    } else if (roll1 == 10 && this.spares == 1) {
      this.addSpare(roll1, roll2)
    }
    this.frames.push([roll1, roll2])
  };

  strike() {
    this.strikes += 1
  };

  spare() {
    this.spares += 1
  }

  accumulatingStrike(roll1, roll2) {
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
    this.spares = 0;
  }

  addSpare(roll1, roll2) {
    // let spliceNumber = "-" + (this.spares + 1)
    // spliceNumber.to_i
    // let endSpares = this.frames.splice(spliceNumber)
    // let unnested = []
    //
    // for (let i = 0; i < endSpares.length; i++) {
    //   var arr = endSpares[i]
    //   for (let j = 0; j < arr.length; j++) {
    //       unnested.push(arr[j])
    //   }
    // }
    //
    // unnested.push(roll1)
    // unnested.push(roll2)
    //
    // for (let k = 0; k < unnested.length; k++) {
    //   while (unnested.length > 2) {
    //     this.currentScore += (unnested[0] + unnested[1] + unnested[2])
    //     console.log("currentScore:" + this.currentScore)
    //     unnested.shift()
    //     unnested.shift()
    //   }
    // }
    //
    // this.currentScore += (unnested[0] + unnested[1])

    if (roll1 + roll2 != 10){
      this.currentScore += (10 + roll1 + roll2 + roll1)
      this.spares = 0;
    } else if (roll1 + roll2 === 10) {
      this.currentScore += 10
      this.currentScore += (roll1)
      this.spares = 1
    }

  };
};


// class Bowling {
//   constructor(currentScore = 0) {
//     this.currentScore = currentScore;
//     this.frames = [];
//     this.strikes = false;
//     this.doubleStrike = false;
//     this.spares = false;
//   }
//
//   rolls(roll1, roll2) {
//     this.currentScore += (roll1 + roll2)
//
//     this.spares = false
//     this.doubleStrike = false
//     this.strikes = false
//
//     if (roll1 + roll2 === 10 && roll1 !== 10 && roll2 !== 10) {
//       this.spares = true;
//     } else if (roll1 === 10) {
//       this.strikes = true;
//
//       if(this.frames.length && this.frames[this.frames.length - 1][0] === 10) {
//         this.doubleStrike = true;
//       }
//     }
//
//     if (this.strikes) {
//       this.currentScore += this.doubleStrike ? 20 : (roll1 + roll2)
//     } else if (this.spares) {
//       this.currentScore += (roll1)
//     }
//
//     this.frames.push([roll1, roll2])
//
//   }
// }
