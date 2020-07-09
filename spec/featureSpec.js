describe('features', function() {
  describe('single frame, no spare/strike', function() {
    it('correctly gives score for 1 frame', function(){
      var frame1
      var score1

      frame1 = new Frame
      score1 = new Score(frame1)
      frame1.roll1(2)
      frame1.roll2(6)

      expect(score1.score()).toEqual(8);
    });
  });

  describe('single frame, spare', function() {
    it('gives correct correct score', function() {
      var frame1
      var frame2
      var score1

      frame1 = new Frame
      frame2 = new Frame
      score1 = new Score(frame1, frame2)
      frame1.roll1(2)
      frame1.roll2(8)
      frame2.roll1(5)

      expect(score1.score()).toEqual(15);
    })
  })

  describe('single frame, strike', function() {
    it('gives correct correct score', function() {
      var frame1
      var frame2
      var score1

      frame1 = new Frame
      frame2 = new Frame
      score1 = new Score(frame1, frame2)
      frame1.roll1(10)
      frame2.roll1(4)
      frame2.roll2(1)

      expect(score1.score()).toEqual(15);
    })

    it('correct score when followed by strike', function() {
      var frame1
      var frame2
      var frame3
      var score1

      frame1 = new Frame
      frame2 = new Frame
      frame3 = new Frame
      score1 = new Score(frame1, frame2,frame3)
      frame1.roll1(10)
      frame2.roll1(10)
      frame3.roll1(7)

      expect(score1.score()).toEqual(27);
    })
  })
})
