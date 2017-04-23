describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('set up', function(){
    it('starts with 10 pins', function() {
    expect(frame.pins).toBe(10)
    });
  });
  describe('bowl a frame', function(){
    it('can add two bowls to frame.bowls', function(){
      spyOn(frame, 'rand_num').and.returnValue(4);
      frame.bowl_round()
      expect(frame.bowls[0]).toBeTruthy()
      expect(frame.bowls[1]).toBeTruthy()
    });
    it('returns first bowl', function(){
      spyOn(frame, 'rand_num').and.returnValue(4);
      frame.bowl_round()
      expect(frame.firstBowl()).toBe(4)
    });
    it('returns second bowl', function(){
      spyOn(frame, 'rand_num').and.returnValue(4);
      frame.bowl_round()
      expect(frame.secondBowl()).toBe(4)
    });
  });
  describe('score calculation', function(){
    it('is not a strike', function(){
      spyOn(frame, 'rand_num').and.returnValue(4);
      frame.bowl_round()
      expect(frame.outcome()).toEqual('')
    });
    it('is a strike', function(){
      spyOn(frame, 'rand_num').and.returnValue(10);
      frame.bowl_round()
      expect(frame.outcome()).toBe('X')
    });
    it('is a spare', function(){
      spyOn(frame, 'rand_num').and.returnValue(5);
      frame.bowl_round()
      expect(frame.outcome()).toBe('/')
    });
  });
});
