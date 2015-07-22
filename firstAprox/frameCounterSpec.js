describe('frame', function() {
  
  describe('when a frame is in progress', function() {
    it('with a new frame', function() {
      expect(frame.isInProgress()).toBe(true)
    });
    it('is in progress with one roll', function() {
      frame.registerRoll();

      expect(frame.isInProgress()).toBe(true)
    }); 
  });

  describe('knows when the frame is over', function() {
    it('after two rolls', function() {
      frame.registerRoll();

      expect(frame.isInProgress()).toBe(false)
    });

    it('after an strike', function(){
      frame.resetFrame();
      frame.registerRoll(10);

      expect(frame.isInProgress()).toBe(false)
    })

    it('after a spare', function(){
      frame.registerRoll(3);
      frame.registerRoll(7);

      expect(frame.isInProgress()).toBe(false)
    })
  }); 

  describe('it knows the total score', function() {
    it ('after two rolls', function() {
      frame.resetFrame();
      frame.registerRoll(3);
      frame.registerRoll(6);

      expect(frame.getSumFrame()).toEqual(9);
    })

    it ('after strike', function() {
      frame.resetFrame();
      frame.registerRoll(10);

      expect(frame.getSumFrame()).toEqual(10);
    })
  })
  
  describe('knows when is strike', function() {
    it ('after one rolls', function() {
      frame.resetFrame();
      frame.registerRoll(10);

      expect(frame.isStrike()).toBe(true);
    }) 

    it ('after one rolls', function() {
      frame.resetFrame();
      frame.registerRoll(5)
      frame.registerRoll(5);

      expect(frame.isStrike()).toBe(false);
    }) 

  })

  describe('knows when is spare', function() {
    it ('after two rolls', function() {
      frame.resetFrame();
      frame.registerRoll(10);

      expect(frame.isSpare()).toBe(false);
    }) 
      it ('after two rolls', function() {
      frame.resetFrame();
      frame.registerRoll(7);
      frame.registerRoll(3);

      expect(frame.isSpare()).toBe(true);
    }) 
  })

});