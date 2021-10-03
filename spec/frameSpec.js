describe('Frame', () => {
  describe('constructor', () => {
    it('following values are set upon initialisation', () => {
      let frame = new Frame;
      expect(frame.roll1).toEqual(null);
      expect(frame.roll2).toEqual(null);
      expect(frame.frameScore).toEqual(null);
      expect(frame.strike).toEqual(false);
      expect(frame.spare).toEqual(false);
      expect(frame.frameFinished).toEqual(false);
    })
  })

  describe('bowl', () => {
    describe('first frame', () => {
      let frame;

      beforeEach(() => {
        frame = new Frame;
        spyOn(window, 'prompt').and.returnValue(1);
        frame.bowl();
        frame.bowl();
      })
  
      it('requests a score for first roll if first roll is null', () => {
        expect(frame.roll1).toEqual(1);
      })
  
      it('requests a score for second roll if first roll is not null', () => {
        expect(frame.roll2).toEqual(1);
      })
  
      it('calculates the frame score once the frame is finished', () => {
        expect(frame.frameScore).toEqual(2);
      })

      it('triggers the frameFinished boolean once both rolls have been taken', () => {
        expect(frame.frameFinished).toEqual(true);
      })
    })
    
    // started using Scorecard in frame spec - didn't know how to avoid..
    describe('strike', () => {
      let spies;

      beforeEach(() => {
        spies = spyOn(window, 'prompt').and.returnValue(10);
      })

      it('ends the frame and triggers strike boolean', () => {
        spies;
        Scorecard.startGame("Mabon")
        Scorecard.bowl()
        //should _getMostRecentFrame() be considered private if used in tests? Wouldn't be called on instances outside of tests.
        expect(Scorecard.currentGame._getMostRecentFrame().frameFinished).toEqual(true); 
        expect(Scorecard.currentGame._getMostRecentFrame().strike).toEqual(true);
      })

      it('correctly sums frame score based on following rolls', () => {
        spies;
        Scorecard.startGame("Mabon")
        Scorecard.bowl();
        spies.and.returnValue(1);
        Scorecard.bowl();
        Scorecard.bowl();
        expect(Scorecard.currentGame._getPreviousFrame().frameScore).toEqual(12);
      })
    })

    describe('spare', () => {
      let spies;
      beforeEach(() => {
        spies = spyOn(window, 'prompt').and.returnValue(5);
      })

      it('triggers spare boolean', () => {
        spies;
        Scorecard.startGame("Mabon");
        Scorecard.bowl();
        Scorecard.bowl();
        expect(Scorecard.currentGame._getMostRecentFrame().spare).toEqual(true);
      })

      it('correctly sums frame score based on following rolls', () => {
        spies;
        Scorecard.startGame("Mabon");
        Scorecard.bowl();
        Scorecard.bowl();
        Scorecard.bowl();
        expect(Scorecard.currentGame._getPreviousFrame().frameScore).toEqual(15);
      })
    })

    describe('10th frame', () => {
      let spies;
      beforeEach(() => {
        spies = spyOn(window, 'prompt').and.returnValue(1);
      })

      it()
    })
  })
})