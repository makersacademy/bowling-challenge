describe('FRAME', function(){
  describe('New frame', function(){
    it('should add first roll to array', function() {
      let frame = new Frame
      spyOn(roll, 'new').and.returnValue(new Roll)
      expect(frame.rolls).toEqual([roll])
    })

    it('should record roll number', function() {
      let frame = new Frame
      spyOn(roll, 'score').and.returnValue(5)
      expect(frame.rolls).toEqual([roll])
    })

  })
})


spyOn(workingBike, 'isWorking').and.returnValue(true)
