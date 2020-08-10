describe('Frame', function(){
  var frame;
  beforeEach(function() {
    frame = new Frame;
  })
  describe('#roll', function(){
    it('if you score below ten first roll is logged', function() {

      frame.roll(4)
      expect(frame.frameStatus()).toEqual([4])
    })

    it('if you score if your first roll is 4 and second is 5 both rolls are logged', function() {

      frame.roll(4)
      frame.roll(5)
      expect(frame.frameStatus()).toEqual([4,5])
    })

    it('you get a spare if the second roll add to the first equals 10', function() {

      frame.roll(5)
      frame.roll(5)
      expect(frame.frameStatus()).toEqual([5,5])
    })

    it('you get a strike if you roll a 10 on your first roll', function() {

      frame.roll(10)
      expect(frame.frameStatus()).toEqual([10])
    })

    it("frame should never have more than three rolls", function() {
      frame.roll(5)
      frame.roll(5)
      frame.roll(5)
      frame.roll(5)
      expect(frame.frameStatus().length).toEqual(3)

    })

  })

  describe("#strikeInitalizer", function() {

    it("is false at start of frame", function(){
      expect(frame.strikeStatus()).toEqual(false)

    })
    it("chances strike status to true", function() {
      frame.strikeInitalizer()
      expect(frame.strikeStatus()).toEqual(true)
    })

    it("after two bonus shots strike status equals false", function(){
      frame.strikeInitalizer()
      frame.strikeInitalizer()
      frame.strikeInitalizer()
      expect(frame.strikeStatus()).toEqual(false)

    })

  })

  describe("#spareInitalizer", function(){
    it("is false at start of frame", function() {
      expect(frame.spareStatus()).toEqual(false)
    })

    it("chances spare status to true", function() {
      frame.spareInitalizer()
      expect(frame.spareStatus()).toEqual(true)
    })

    it("after one bonus shot spare status equals false", function() {
      frame.spareInitalizer()
      frame.spareInitalizer()
      expect(frame.spareStatus()).toEqual(false)
    });
  })





})
