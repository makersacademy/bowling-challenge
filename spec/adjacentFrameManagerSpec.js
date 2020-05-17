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