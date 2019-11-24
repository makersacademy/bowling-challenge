function calculate (frames) {
  var totalScore = 0
  for (var i = 0; i < frames.length; i++) {
    totalScore += findFrameTotal(frames, i)
  }
  return totalScore
}

function findFrameTotal (frames, i) {
  var frameTotal = frames[i].reduce(function (acc, cur) {
    return acc + cur
  }, 0)
  if (frameTotal === 10 && i < 9) {
    var bonus = calculateBonus(frames, i)
    frameTotal += bonus
  }
  return frameTotal
}

function calculateBonus (frames, i) {
  var bonus = frames[i + 1][0]
  if (frames[i][1] === null) {
    if (frames[i + 1][1] !== null) {
      bonus += frames[i + 1][1]
    } else if (frames[i + 1].length > 2) {
      bonus += frames[i + 1][2]
    } else {
      bonus += frames[i + 2][0]
    }
  }
  return bonus
}
