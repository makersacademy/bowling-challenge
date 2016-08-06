describe('Bowling', function(){
  var bowling;
  // var frame;

  beforeEach(function(){
    bowling = new Bowling();
    // frame = new Frame();
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

  describe('score', function(){
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

  describe('reaminingPins', function(){
    it('reduces the number of pins by those knocked', function(){
      spyOn(Math, 'random').and.returnValue(0.4);
      oneRoll();
      expect(bowling.remainingPins()).toEqual(5);
    })
  })

  describe('strike', function(){
    it('returns true if the pins knocked are 10', function(){
      spyOn(Math, 'random').and.returnValue(0.9);
      oneRoll();
      expect(bowling.strike(bowling.gameFrames[0][0])).toBeTruthy();
    })
  })

  // describe('spare', function(){
  //   it('returns true if the frame score is 10', function(){
  //     spyOn(Math, 'random').and.returnValue(0.7);
  //     twoRolls();
  //     expect(bowling.spare(bowling.totalScore)).toEqual(true)
  //   })
  // })

  describe('spareBonusPointsApply',function(){
    it('applies spare bonus points to total scores', function(){
      spyOn(Math, 'random').and.returnValue(0.7);
      twoRolls();
      twoRolls();
      console.log(bowling.gameFrames);
      expect(bowling.totalScore).toEqual(28)
    })
  })

  describe('strikeBonusPointsApply', function(){
    it('applies strike bonus points to total score', function(){
      spyOn(Math, 'random').and.returnValue(0.9);
      twoRolls();
      twoRolls();
      twoRolls();
      twoRolls();
      twoRolls();
      oneRoll();
      console.log(bowling.bonusScores);
      expect(bowling.totalScore).toEqual(300)
    })
  })

  describe('sumFrame', function(){
    it('sums the points in a frame', function(){
      spyOn(Math, 'random').and.returnValue(0.4);
      twoRolls();
      expect(bowling.sumFrame(bowling.gameFrames[0])).toEqual(8)
    })
  })

  describe('saveFrame', function(){
    it('saves the current frame and resets', function(){
      spyOn(Math, 'random').and.returnValue(0.4);
      twoRolls();
      expect(bowling.gameFrames[0][1]).toEqual(3)
    })
  })

});
