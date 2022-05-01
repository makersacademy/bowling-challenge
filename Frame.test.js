const Frame = require('./Frame');


describe('Frame class', () => {
  test('instantiates with a frame number', () => {
    let frame = new Frame(1);
    expect(frame.frameNum).toEqual(1);
  })

  describe('frame.userInput', () => {
    test('receives user input of number of pins knocked down', () => {
    });
  });
  
  describe('frame.roll', () => {
    test('reduces number of pins standing by number knocked down', () => {
      let frame = new Frame(1);
      frame.roll(6);
      expect(frame.standingPins).toEqual(4);
    });
    test('throws if attempt number of pins knocked down greater than number standing', () => {
      let frame = new Frame(1);
      function rollError() {
        frame.roll(6);
        frame.roll(6);
      }
      expect(() => {
        rollError();
      }).toThrowError();
    });
  });
  
  describe('frame.updateLog', () => {
    test('adds a first roll to frame log', () => {
      let frame = new Frame(1);
      frame.updateLog('firstRoll', 5);
      expect(frame.log['firstRoll']).toEqual(5);
    });
  
    test('adds a second roll to frame log', () => {
      let frame = new Frame(1);
      frame.updateLog('secondRoll', 4);
      expect(frame.log['secondRoll']).toEqual(4);
    });
  
    test('logs frame score on adding second roll if total less than 10', () => {
      let frame = new Frame(1);
      frame.updateLog('firstRoll', 5);
      frame.updateLog('secondRoll', 4);
      expect(frame.log['score']).toEqual(9);
    });
  
    test('logs strike bonus on adding first roll if first roll is 10', () => {
      let frame = new Frame(1);
      frame.updateLog('firstRoll', 10);
      expect(frame.log['bonus']).toEqual('strike');
    });
  
    test('logs spare bonus on adding second roll if total is 10', () => {
      let frame = new Frame(1);
      frame.updateLog('firstRoll', 5);
      frame.updateLog('secondRoll', 5);
      expect(frame.log['bonus']).toEqual('spare');
    });
  });
  
  describe('frame.firstPlay', () => {
    describe('receives a user input as a first roll and updates the frame log', () => {
      test('logs a non-ten first roll', () => {
        let frame = new Frame(1);
        expect(frame.firstPlay(5).log).toEqual({
          firstRoll: 5,
          secondRoll: null,
          score: null,
          bonus: null
        });
      })
      test('logs a strike', () => {
        let frame = new Frame(1);
        expect(frame.firstPlay(10).log).toEqual({
          firstRoll: 10,
          secondRoll: null,
          score: null,
          bonus: 'strike'
        });
      })
    })
  });
  
  describe('frame.secondPlay', () => {
    describe('receives a user input as a second roll and updates the frame log', () => {
      test('logs a non-spare second roll', () => {
        let frame = new Frame(1);
        frame.firstPlay(5)
        expect(frame.secondPlay(4).log).toEqual({
          firstRoll: 5,
          secondRoll: 4,
          score: 9,
          bonus: null
        });
      })
      test('logs a spare', () => {
        let frame = new Frame(1);
        frame.firstPlay(5)
        expect(frame.secondPlay(5).log).toEqual({
          firstRoll: 5,
          secondRoll: 5,
          score: null,
          bonus: 'spare'
        });
      })
    })
  });
});
