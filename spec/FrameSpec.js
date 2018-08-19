describe('Frame', function() {
  var frame;
  beforeEach(function() {
    frame = new Frame();
  })

  doubleRoll = function() {
    frame.roll()
    frame.roll()
  }

  describe('Basic structure:', function() {

    it('starts out empty', function() {
      expect(frame._firstRoll).toBe(0)
      expect(frame._secondRoll).toBe(0)
    });

    it('is numbered from 1 to 10', function() {
      var testFrame = new Frame(5);
      expect(testFrame.whichFrame()).toBe(5);
    });

    it('has 10 pins', function() {
      expect(frame._pins).toBe(10)
    });
  });

  describe('Calculations:', function() {
    
    it('ups points and downs pins with rolls', function() {
      spyOn(frame, 'hit').and.returnValue(2);
      doubleRoll()
      expect(frame._secondRoll).toBe(2)
      expect(frame._pins).toBe(6)
    });
    
    it('adds points together', function() {
      spyOn(frame, 'hit').and.returnValue(4)
      doubleRoll()
      expect(frame.points()).toBe(8)
    });

    it('knows how many times the player has rolled', function() {
      frame.roll()
      expect(frame._roll).toBe(2)
    });

    it('knows when the frame is complete', function() {
      doubleRoll()
      expect(frame.done()).toBeTruthy()
    });
  });

  describe('For Big Lebowski moves:', function() {

    it('awards bonus points', function(){
      frame.bonus(6)
      expect(frame.points()).toBe(6)
    });
  
    it('reads a spare', function() {
      spyOn(frame, 'hit').and.returnValue(5)
      doubleRoll()
      expect(frame.superPlay()).toBe('spare')
    });
  
    it('awards spare bonus points', function() {
      spyOn(frame, 'hit').and.returnValue(7)
      doubleRoll()
      expect(frame.spare()).toBe(7)
    });
  
    it('knows that a strike completes the frame', function() {
      spyOn(frame, 'hit').and.returnValue(10)
      frame.roll()
      expect(frame.superPlay()).toBe('strike')
      expect(frame.done()).toBeTruthy()
    });
  });

  

  

  

  

  

  
  
});
