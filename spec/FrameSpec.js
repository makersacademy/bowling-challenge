describe ('Frame', function(){

    var frame;

    beforeEach(function(){
    frame = new Frame();
    });

    it('can input the scores for the first nine frames', function(){
      frame.rollOneToNine(10, 0);
      frame.rollOneToNine(7, 5);
      expect(frame.allFrames()).toEqual([[10], [7, 5]])
      });

    it('inputs the scores after the last frame. can accept two or three arguments', function(){
      frame.rollTen(10, 10, 10);
      frame.rollTen(5, 1);
      expect(frame.allFrames()).toEqual([[10, 10, 10], [5, 1, 0]])
    });

    it('calculates the total score given all the number of pins knocked down', function(){
      frame.rollOneToNine(10,0)
      frame.rollOneToNine(7,2)
      frame.rollOneToNine(0,0)
      expect
    });
});