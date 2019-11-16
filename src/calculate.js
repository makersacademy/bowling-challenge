function calculate(scoreSheet) {
  return scoreSheet.reduce(function (acc, frame) {
    return acc + frame.reduce(function (acc, cur) {
      return acc + cur
    }, 0)
  }, 0)
}
