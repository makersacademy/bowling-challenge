describe('Scorecard', () => {
  let scorecard;

  describe('constructor', () => {
    it('has a name and empty array upon initialisation', () => {
      let scorecard = new Scorecard("Mabon");
      expect(scorecard.name).toEqual("Mabon");
      expect(scorecard.frames).toEqual([]);
    })
  })

  describe('score', () => {
    it('returns total running score', () => {
      frame = new Frame;
      frame.frameScore = 5;
      scorecard = new Scorecard("Mabon");
      scorecard.frames.push(frame);
      expect(scorecard.score()).toEqual(5);
    })
  })
  // unnecessary
  // describe('_nextFrame', () => {
  //   it('adds a frame to frames property', () => {
  //     scorecard = new Scorecard("Mabon");
  //     scorecard._nextFrame();
  //     expect(scorecard.frames.length).toEqual(1);
  //   })
  // })

  describe('framesPlayer', () => {
    it('returns the number of frames played', () => {
      scorecard = new Scorecard("Mabon");
      for (let i = 0; i < 4; i++) {
        scorecard._nextFrame();
      }
      expect(scorecard.framesPlayed()).toEqual(4);
    })
  })

  describe('.startGame / .currentGame', () => {
    it('.startGame creates a new instance of Scorecard which is accessed via .currentGame', () => {
      Scorecard.startGame("Mabon")
      expect(Scorecard.currentGame).toBeInstanceOf(Scorecard);
      expect(Scorecard.currentGame.name).toEqual("Mabon");
      expect(Scorecard.currentGame.frames.length).toEqual(1);
    })
  })

  describe('.bowl', () => {
    it('returns a game ending notice if 10 frames have been completed', () => {
      Scorecard.startGame("Mabon")
      for (let i = 0; i < 9; i++) {
        Scorecard.currentGame._nextFrame();
        Scorecard.currentGame.frames[Scorecard.currentGame.frames.length - 1].frameScore = 5;
        Scorecard.currentGame.frames[Scorecard.currentGame.frames.length - 1].frameFinished = true;
      }
      expect(Scorecard.bowl()).toEqual(`The game has ended. Your final score was 45.`);
    })

    it('adds a frame to frames array if last frame has finished', () => {
      Scorecard.startGame("Mabon");
      Scorecard.currentGame.frames[Scorecard.currentGame.frames.length - 1].frameFinished = true;
      Scorecard.bowl();
      expect(Scorecard.currentGame.frames.length).toEqual(2);
    })
  })
})