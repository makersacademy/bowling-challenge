function calculate(scores) {
  return scores.reduce(function (acc, cur) {
    return acc + cur
  })
}
