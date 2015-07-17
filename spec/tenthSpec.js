describe ('Tenth Frame', function() {

   describe('A Game',function() {
    beforeEach(function(){
    frame = new tenthFrame
  })

    it ('allows a third roll to be rolled if a spare is scored', function(){
      frame.scoreInput(4);
      frame.scoreInput(6);
      frame.scoreInput(4);
      expect(frame.total).toBe(14);
      exepect(frame.scores).toEq([4,6,4])
    })

  })

})