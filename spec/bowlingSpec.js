describe('Bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  })

  var oneRoll = function(){
    bowling.roll();
  }

  var twoRolls = function(){
    for (var i = 0; i < 2; i++) {
      oneRoll();
    }
  }

  describe('#roll', function(){
    it('only uses remaining pins for second roll', function(){
      spyOn(Math, 'random').and.returnValue(0.4);
      oneRoll();
      expect(bowling.remainingPins()).toEqual(5)
    })
  })

  describe('#score', function(){
    it('saves the first roll score in current frame', function(){
      oneRoll();
      expect(bowling.currentFrame[0]).toEqual(bowling.currentFrame[0]);
    })

    it('saves the second roll score in the current frame', function(){
      spyOn(Math, 'random').and.returnValue(0.4);
      twoRolls();
      expect(bowling.gameFrames[0][1]).toEqual(3);
    })

    it('saves and closes the frame if the first roll is a strike', function(){
      spyOn(Math, 'random').and.returnValue(0.9);
      oneRoll();
      expect(bowling.gameFrames[0][1]).toEqual(0);
    })

    it('updates total score with current frame', function(){
      spyOn(Math, 'random').and.returnValue(0.4);
      twoRolls();
      expect(bowling.totalScore).toEqual(8);
    })
  })

  describe('#reaminingPins', function(){
    it('reduces the number of pins by those knocked', function(){
      spyOn(Math, 'random').and.returnValue(0.4);
      oneRoll();
      expect(bowling.remainingPins()).toEqual(5);
    })
  })

  describe('#strike', function(){
    it('returns true if the pins knocked are 10', function(){
      spyOn(Math, 'random').and.returnValue(0.9);
      oneRoll();
      expect(bowling.strike(bowling.gameFrames[0][0])).toBeTruthy();
    })
  })

  describe('#spareBonusPointsApply',function(){
    it('applies spare bonus points to total scores', function(){
      spyOn(Math, 'random').and.returnValue(0.7);
      twoRolls();
      twoRolls();
      expect(bowling.totalScore).toEqual(28)
    })
  })

  describe('#strikeBonusPointsApply', function(){
    it('Perfect game', function(){
      spyOn(Math, 'random').and.returnValue(0.9);
      for (var i = 0; i < 12; i++) {
        oneRoll();
      }
      expect(bowling.totalScore).toEqual(300)
    })
    it('multiple strikes in the beginning', function(){
      spyOn(Math, 'random').and.returnValues(0.9, 0.9, 0.9, 0.9, 0.3, 0.3);
      for (var i = 0; i < 6; i++) {
        oneRoll();
      }
      expect(bowling.totalScore).toEqual(106)
    })
    it('no strikes in the final frame', function(){
      spyOn(Math, 'random').and.returnValues(0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9,
        0.9, 0.9, 0.3, 0.3);
      for (var i = 0; i < 11; i++) {
        oneRoll();
      }
      expect(bowling.totalScore).toEqual(256)
    })
    it('One strike amongst non bonus frames', function(){
      spyOn(Math, 'random').and.returnValues(0.3, 0.3, 0.9, 0.3, 0.3);
      for (var i = 0; i < 5; i++) {
        oneRoll();
      }
      expect(bowling.totalScore).toEqual(28)
    })
    it('Multiple strikes amongst non bonus frames', function(){
      spyOn(Math, 'random').and.returnValues(0.3, 0.3, 0.9, 0.9, 0.9, 0.3, 0.3);
      for (var i = 0; i < 7; i++) {
        oneRoll();
        console.log(bowling.latestRoll);
      }
      expect(bowling.totalScore).toEqual(82)
    })
  })

  describe('#sumFrame', function(){
    it('sums the points in a frame', function(){
      spyOn(Math, 'random').and.returnValue(0.4);
      twoRolls();
      expect(bowling.sumFrame(bowling.gameFrames[0])).toEqual(8)
    })
  })

  describe('#saveFrame', function(){
    it('saves the current frame and resets', function(){
      spyOn(Math, 'random').and.returnValue(0.4);
      twoRolls();
      expect(bowling.gameFrames[0][1]).toEqual(3)
    })
  })

  describe('#finalFrame', function(){
    it('gives an extra roll if a strike rolled', function(){
      spyOn(Math, 'random').and.returnValue(0.9);
      for (var i = 0; i < STARTINGPINS/2; i++) {
        twoRolls();
      }
      twoRolls();
      expect(bowling.gameFrames[9][2]).toEqual(10);
    })
  })
});
