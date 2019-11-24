describe('Frame', function(){

  describe('#roll', function(){
    it('if you score below ten first roll is logged', function() {
      var frame = new Frame;
      frame.roll(4)
      expect(frame.frameOutcome()).toEqual([4])
    })

    it('if you score if your first roll is 4 and second is 5 both rolls are logged', function() {
      var frame = new Frame;
      frame.roll(4)
      frame.roll(5)
      expect(frame.frameOutcome()).toEqual([4,5])
    })

    it('you get a spare if the second roll add to the first equals 10', function() {
      var frame = new Frame;
      frame.roll(5)
      frame.roll(5)
      expect(frame.frameOutcome()).toEqual([5,'/'])
    })

    it('you get a strike if you roll a 10 on your first roll', function() {
      var frame = new Frame;
      frame.roll(10)
      expect(frame.frameOutcome()).toEqual('X')
    })

  

  })





})
