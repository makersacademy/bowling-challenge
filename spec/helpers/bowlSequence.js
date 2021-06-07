module.exports = (game, rolls) => {
  rolls.forEach(roll => {
    game.bowl(roll)
  })
}
