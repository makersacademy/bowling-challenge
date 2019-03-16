describe('Frame', function(){

  var frame

  describe('Initial setup state', function(){

    beforeEach(function(){
       frame = new Frame();
     })

    it('has an internal array called myScore', function(){
      expect(frame.myscore).toEqual([0,0]);
    });

    it('has a frame tracking attribute called whichFrame', function(){
      expect(frame.whichFrame).toEqual("Unassigned");
    });

    it('has a frame type tracker called frameType', function(){
      expect(frame.frameType).toEqual("Natural");
    });

  });
});
