const BowlingGame = require('./bowlingScore')

describe('bowlingGame', () => {
  it('makes a bowling class', () => {
    const bowlingGame = new BowlingGame();
  })
  it('han an empty array for frames', () => {
    const bowlingGame = new BowlingGame();
    expect(bowlingGame.frames).toEqual([])
  })
  // needs a double as don't want to actualy add a number to the array, just test it is being added
  // it('roll once', () => {
  //   const bowlingGame = new BowlingGame();
  //   expect(bowlingGame.knockedPins(1)).toEqual(1)
  // })
  it('can roll a gutter game', () => {
    const bowlingGame = new BowlingGame();
    bowlingGame.knockedPins(0)
    expect(bowlingGame.getScore()).toBe(0)
    })

  //   it('can roll a perfect game', () => {
  //     const bowlingGame = new BowlingGame();
  //     bowlingGame.knockedPins(10)
  //     expect(bowlingGame.getScore()).toBe(300)
    
  // })
})

/* Start with creating a frame which will be 10

add a frame function which will add all the frames as an empty array
frame will become an construct as it will be an empty array and everytime we create a new game the array will always be empty
then can add the number of rolls into it 
Get a function set up for a score of 0 for a gutter game
Then think about getting a complete full game of 20 rolls. 
then can think about how to score which will need to know the number of turns as well as the rolls
can then focus on figuring out the type of game being played.



*/