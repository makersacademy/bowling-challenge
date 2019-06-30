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
// I want to add pins and see the resulting score

  it('returns the score after inserting the number of pins', function() {
    game.add(4)
    game.add(5)
    game.score()
    expect(game.score()).toEqual(9)
  })

  describe('3rd user story', function() {

    // As a user
    // So I can easily fill up a new frame
    // I want a new frame to be created once I fill in the last roll

    it('automatically instanciate a new frame', function() {
      game.add(4)
      game.add(5)
      game.add(3)
      expect(game.frames.length).toEqual(2)
    })
  })
})