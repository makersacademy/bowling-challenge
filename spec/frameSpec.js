describe('Frame', function(){

  var frame

  describe('Initial setup state', function(){

    beforeEach(function(){
       frame = new Frame();
     })

    it('has an internal array called myScore', function(){
      expect(frame.myRolls).toEqual([0,0]);
    });

    it('has a frame tracking attribute called whichFrame', function(){
      expect(frame.whichFrame).toEqual(1);
    });

    it('has a frame type tracker called frameType', function(){
      expect(frame.frameType).toEqual("Natural");
    });

    it('knows its score', function(){
      expect(frame.myScore).toEqual(0);
    });

  });

  describe('Frame methods', function(){

    beforeEach(function(){
       frame = new Frame();
     })

     it('will calculate the frame score with score function', function(){
       expect(frame.score()).toEqual(0);
     });

     it('can be passed two rolls', function(){
       frame.rolls(5,9)
       expect(frame.score()).toEqual(14);
     });

  });
});
