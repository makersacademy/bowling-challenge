function FinalFrame () {
}

FinalFrame.prototype.roll = function (Number) {
  let errorOne = 'Cannot record roll: roll must be an number'
  let errorTwo = 'Cannot record roll: roll must be between 0-10'
  if (isNaN(Number)) throw new Error(errorOne)
  if (Number < 0 || Number > 10) throw new Error(errorTwo)
}
