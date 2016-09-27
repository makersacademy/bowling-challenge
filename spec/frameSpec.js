describe('Frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('To play, you roll a ball',function(){
    // frame.frameScore.length = 0
    spyOn(Math, 'random').and.returnValue(5/10);
    frame.Roll()
    expect(frame.frameScore).toEqual([5]);
  });

  it('The total number of pins per frame is 10', function(){
    frame.BowlFrame()
    score = frame.frameScore.reduce(function(a,b){
      return a+b;
    },0);
    expect(score).toBeLessThan(11)
  });

  it('Reports a strike when 10 pins knocked in one roll', function(){
      spyOn(Math, 'random').and.returnValue(10/10);
      frame.BowlFrame()
      expect(frame.isStrike()).toBe (true)
  });

  it('Does not report a strike if 10 pins are knocked in two rolls', function(){
      frame.frameScore = [6,4]
      expect(frame.isStrike()).toBe (false)
  });

  it('Reports a spare', function(){
    frame.frameScore = [6,4]
    expect(frame.isSpare()).toBe (true)
  });

















});
