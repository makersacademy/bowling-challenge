xdescribe('frameSum', function() {

  describe('gets the value of a frame', function() {

    it('for two rolls',function(){
      
      expect(frameSum.getSum([1,2])).toEqual(3)
    });

    it('for a strike',function(){
      bonus = gameCounter.pinsPerBalls.slice(0,2)

      expect(frameSum.getSum([10])).toEqual(10 + bonus)
    });
  });

});

