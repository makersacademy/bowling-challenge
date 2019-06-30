describe('Feature Tests', function() {

  beforeEach(function() {
    game = new Game()
    frame = new Frame()
  })

/* 
As a user
So I can take note of my scores
I want to start with a new frame line 
*/

  it('add a new frame line', function() {
    expect(game.frames).toEqual([frame])
  })

  // As a user
  // So I can calculate the score
  // I want to add the knocked down pins

  it('stores the inserted number of knocked pins', function() {
    game.add(4)
    expect(game.frames[0].rolls[0]).toEqual(4)
  })

  // As a user
  // So I can easily fill up a new frame
  // I want a new frame to be created once I fill in the last roll

  it('automatically instanciate a new frame', function() {
    game.add(4)
    game.add(5)
    game.add(3)
    expect(game.frames.length).toEqual(2)
  })

  // As a user
  // So I do not have to use calculation skills
  // I want the score card to calculate the score

  it('calculate the score', function() {
    game.add(4)
    game.add(5)
    expect(game.currentScore).toEqual(9)
  })

  // As a user
  // So I do not have to think of the game rules
  // I want the score card to calculate the strike bonus

  it('calculates the bonus for a strike', function() {
    game.add(10)
    console.log(game)
    game.add(5)
    console.log(game)
    game.add(4)
    console.log(game)
    expect(game._bonusStrike).toEqual(9)
  })
})