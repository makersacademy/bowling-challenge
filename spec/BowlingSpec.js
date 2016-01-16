describe("Bowling", function() {
  var bowling;
  var frame;

  beforeEach(function() {
    frame = {
      record: function() {},
      calculateScore: function() {},
      addThirdRoll: function() {},
      addBonus: function() {}
    }
    bowling = new Bowling(frame);
  });

  describe('#frames', function() {
    it('stores the player\'s frames', function() {
      spyOn(frame, 'record');
      bowling.play(1,2);
      expect(bowling.frames).toEqual([frame]);
    });

    it('after the frame has been played, current frame is cleared', function() {
      spyOn(frame, 'calculateScore');
      bowling.completeFrame();
      expect(bowling.frame.rolls).toEqual([]);
    });
  });

  describe('#totalScore', function() {
    it('gives a total score', function() {
      spyOn(frame, 'record').and.returnValue
      (frame.rolls = [1,2], frame.rolls = [3,4]);
      spyOn(frame, 'calculateScore').and.callFake(function() {
        var alreadyCalled = false;
        if(alreadyCalled) {frame.score = (3+4)}
        alreadyCalled = true;
        return frame.score = (1+2);
      });
      bowling.play(1,2);
      bowling.completeFrame();
      bowling.play(3,4);
      bowling.completeFrame();
      bowling.calculateTotalScore();
      expect(bowling.totalScore).toEqual(1+2+3+4);
    });

    it('returns 300 if 10 consecutive strikes are scored',
    function() {
      spyOn(frame, 'record').and.returnValue
      (frame.rolls = [10,0])
      spyOn(frame, 'calculateScore').and.returnValue(frame.score = 30)
      for(var i=0; i<9; i++) {
        bowling.play(10,0);
        bowling.completeFrame();
      }
      bowling.play(10,0);
      bowling.bonusRoll(10);
      bowling.thirdRoll(10);
      bowling.completeFrame();
      bowling.calculateTotalScore();
      expect(bowling.totalScore).toEqual(300);
    });

    it('returns 0 if no pins are ever hit', function() {
      spyOn(frame, 'record').and.returnValue
      (frame.rolls = [0,0])
      for(var i=0; i<10; i++) {
        bowling.play(0,0);
        bowling.completeFrame();
        expect(bowling.totalScore).toEqual(0);
      }
    });
  });

  describe('#play', function() {
    it('prevents a player from playing more than 10 frames', function() {
      spyOn(frame, 'record').and.returnValue(frame.rolls = [1,5]);
      var i = 0;
      for(i=0; i<10; i++) {
        bowling.play(1,5);
        bowling.completeFrame();
      }
      expect(function(){bowling.play(1,5);}).toThrow
      (new Error("You have already played 10 frames."));
    });

    it('prevents a player from inputing a combined score > 10', function() {
      expect(function(){bowling.play(5,6);}).toThrow
      (new Error('Not a valid score: sum must be 10 or less'));
    });
  });

  describe('#bonusRoll', function() {
    it('allows a player to play a bonus roll in the 10th frame if they have' +
    ' scored a strike', function() {
      spyOn(frame, 'record').and.returnValue(frame.rolls = [10,0]);
      var i = 0;
      for(i=0; i<9; i++) {
        bowling.play(1,2);
        bowling.completeFrame();
      }
      bowling.play(10,0);
      expect(function(){bowling.bonusRoll(5);}).not.toThrow();
    });

    it('prevents a player from playing a bonus roll if they have not scored' +
    ' a strike', function() {
      spyOn(frame, 'record').and.returnValue(frame.rolls = [3,7]);
      var i = 0;
      for(i=0; i<10; i++) {
        bowling.play(3,7);
        bowling.completeFrame();
      }
      expect(function(){bowling.bonusRoll(1);}).toThrow
      (new Error('Cannot play bonus roll: you have not scored a strike'));
    });

    it('prevents a player from playing a bonus roll if they are not in the' +
    ' 10th frame', function() {
      expect(function(){bowling.bonusRoll(1);}).toThrow
      (new Error('Cannot play bonus roll: this is not the 10th frame'));
    });
  });

  describe('#thirdRoll', function() {
    it('allows a player to play a third roll in the 10th frame if they have' +
    ' scored a strike', function() {
      spyOn(frame, 'record').and.returnValue(frame.rolls = [10,0,5]);
      var i = 0;
      for(i=0; i<9; i++) {
        bowling.play(1,2);
        bowling.completeFrame();
      }
      bowling.play(10,0);
      bowling.bonusRoll(5);
      expect(function(){bowling.thirdRoll(5);}).not.toThrow();
    });

    it('allows a player to play a third roll in the 10th frame if they have' +
    ' scored a spare', function() {
      spyOn(frame, 'record').and.returnValue(frame.rolls = [3,7,5]);
      var i =0
      for(i=0; i<9; i++) {
        bowling.play(1,2);
        bowling.completeFrame();
      }
      bowling.play(3,7);
      expect(function(){bowling.thirdRoll(5);}).not.toThrow();
    });

    it('throws an error if player attempts 3rd roll if not in' +
    ' 10th frame', function() {
      expect(function(){bowling.thirdRoll();}).toThrow
      (new Error ('Cannot play 3rd roll: this is not the 10th frame'));
    });

    it('throws an error if player attempts 3rd roll and has not scored' +
    ' a spare or strike', function() {
      spyOn(frame, 'record').and.returnValue(frame.rolls = [1,2]);
      var i=0
      for(i=0; i<10; i++) {
        bowling.play(1,2);
        bowling.completeFrame();
      }
      expect(function(){bowling.thirdRoll();}).toThrow(new Error
        ('Cannot play 3rd roll: you have not scored a spare or strike'));
    });
  });

  describe('#checkBonus', function() {
    it('allows a player to get a bonus if they score a strike', function() {
      spyOn(frame, 'record').and.returnValue(frame.rolls = [10,0]);
      spyOn(frame, 'calculateScore');
      spyOn(frame, 'addBonus').and.returnValue(frame.bonus = 1+2);
      bowling.play(10,0);
      bowling.completeFrame();
      bowling.play(1,2);
      expect(bowling.frames[0].bonus).toEqual(3);
    });

    it('allows a player to get a bonus if they score a spare', function() {
      spyOn(frame, 'record').and.returnValue(frame.rolls = [7,3]);
      spyOn(frame, 'calculateScore').and.returnValue(frame.score=(7+3));
      spyOn(frame, 'addBonus').and.returnValue(frame.bonus = 1);
      bowling.play(7,3);
      bowling.completeFrame();
      bowling.play(1,2);
      expect(bowling.frames[0].bonus).toEqual(1);
    });

    it('if a player scores two consecutive strikes,' +
    ' the correct bonus is calculated', function() {
      spyOn(frame, 'record').and.returnValue(frame.rolls = [10,0]);
      spyOn(frame, 'calculateScore');
      spyOn(frame, 'addBonus').and.returnValue(frame.bonus = 10+1);
      bowling.play(10,0);
      bowling.completeFrame();
      bowling.play(10,0);
      bowling.completeFrame();
      bowling.play(1,2);
      expect(bowling.frames[0].bonus).toEqual(10+1);
    });
  });
});
