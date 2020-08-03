describe('AdjacentFrameManager', function() {
  var afm

  beforeEach(function() {
    afm = new AdjacentFrameManager()
  })

  describe('#frames', function() {
    it('has an array of adjacent frames', function() {
      expect(afm.frames.length).toEqual(2)
    })
  })
})

// how to dependency inject this?
// a frame requires an AdjacentFrame manager and an Adjacent Frame Manager
//require frames to have been made beforehand.
// frame will initialize AdjacentFrameManager
// how do we deal with the final frames
// frame 9 will only have 1 adjacent frame
// and frame 10 will have 0 adjacent frames because its a bonus frame
// so how do I express this
//should a fram be aware of its position in the game
// and have routing logic depending on WHERE it is
// but then that creates the problem that adjacent should return
// the sum for a spare or strike


// Frame -->
// Regular frame --> takes the next two rolls in the game
// I'm completely lost on this, I have literally no idea how to structure this in an elegant manner
