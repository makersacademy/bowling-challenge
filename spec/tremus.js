const rolls = []

// eg round 1 = [5]

//eg round 2
// rolls = [[5, 5], [3, 7], [4, 4]]
// scores = [13, 14]
const scores = []

// todo: make sum function

for (let i = rolls.length - 1; i>=0; i--) {
  const frame = rolls[i];
  // todo: SUM
  let total = 0
  const sum = sum(rolls);

  total += sum
  // eg frame = [5, 5] // spare
  // eg frame = [0, 10] // spare
  // frame = [10]
  if (i !== 0) {
    //todo calc bonus
    let bonus = 0;
    // todo identify frame spare / strike
    total += bonus;
  }
  scores.unshift(total);
}

const total = sum()