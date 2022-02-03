const Round = require('../main/round.cjs')
const Frame = require('../main/frame.cjs')

let frames = []

for(let i = 0; i < 9; i++) {
  frames.push(new Frame().addRoll(10))
}

let round = new Round(frames)

