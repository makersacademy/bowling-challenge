const BowlingGame = require('./bowlingScore')

describe('bowlingGame', () => {
  it('makes a bowling class', () => {
    const bowlingGame = new BowlingGame();
  })
  it('han an empty array for frames', () => {
    const bowlingGame = new BowlingGame();
    expect(bowlingGame.frames).toEqual([])
  })
  it('roll once', () => {
    const bowlingGame = new BowlingGame();
    expect(bowlingGame.knockedPins(1)).toEqual([1])
  })
  // it('adds a score for two rolls', () => {
  //   const bowlingGame = new BowlingGame();
  //   expect(bowlingGame.knockedPins(1)).toEqual([1])
  // })
})

/* Start with creating a frame which will be 10

add a frame function which will add all the frames as an empty array
frame will become an construct as it will be an empty array and everytime we create a new game the array will always be empty
then can add the number of rolls into it 
then can think about how to score which will need to know the number of turns as well as the rolls
can then focus on figuring out the type of game being played.



*/