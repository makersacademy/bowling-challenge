describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('starts with 10 pins', function() {
    expect(frame.pins).toBe(10)
  });

  it('starts with 2 bowls', function() {
    expect(frame.bowls).toBe(2)
  });

  describe('bowling', function(){
    it('bowls the first ball(5)', function(){
      frame.bowl_one(5)
      expect(frame.pins).toBe(5)
    })
    it('bowls the first ball(10)', function(){
      frame.bowl_one(10)
      expect(frame.pins).toBe(0)
    })
    it('bowls the second ball(5)', function(){
      frame.bowl_two(5)
      expect(frame.pins).toBe(5)
    })
    it('bowls two balls(3 & 5)', function(){
      frame.bowl_one(3)
      frame.bowl_two(5)
      expect(frame.pins).toBe(2)
    })
    it('returns 0 pins if bowl_one knocks 10 pins down', function() {
      frame.complete(10,4)
      expect(frame.pins).toBe(0)
    })
    it('returns a strike if bowl_one knocks 10 pins down', function() {
      expect(frame.complete(10,4)).toBe('strike')
    });
    it('returns a spare if complete bowl knocks 10 pins down', function() {
      expect(frame.complete(6,4)).toBe('spare')
    });
    it('returns 0 pins if complete bowl knocks 10 pins down', function() {
      frame.complete(1,9)
      expect(frame.pins).toBe(0)
    });
    it('returns 2 if complete bowl knocks 8 pins down', function() {
      frame.complete(3,5)
      expect(frame.pins).toBe(2)
    });
  });
  describe('returns random numbers', function(){
    it('returns a number between 0 & 10', function(){
      expect(frame.rand_num() >= 0 && frame.rand_num() <= 10).toBeTruthy()
    })
    it('returns a number between 0 & 3 after scoring 7 on bowl_one', function(){
      frame.bowl_one(7)
      expect(frame.rand_num() >= 0 && frame.rand_num() <= 3).toBeTruthy()
    })
  })
  describe('bowl two random balls', function(){
    it('pins are at least 0', function(){
      frame.bowl()
      expect(frame.pins >= 0).toBeTruthy()
    })
  })
});
