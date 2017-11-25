describe('Bowling', function(){
  var bowling;

  beforeEach( function(){
    bowling = new Bowling();
  });


  describe('initialize', function(){
    it('has starting score of zero', function(){
      expect(bowling.total()).toEqual(0);
    });

    it('has a maximum score of 300', function(){
      expect(bowling.maxScore()).toEqual(300);
    });
  });

  describe('add score', function(){
    it('should add 10 to the total', function(){
      expect(bowling.addScore(10)).toEqual(10);
    });

    it('cannot add more than 10 to score at a time', function(){
      expect(bowling.addScore(11)).toEqual('Cannot add more than 10');
    });
  });

  describe('frame', function(){
    it('adds to counter if less than 2', function(){
      bowling.frame(10);
      bowling.frame(10);
      expect(bowling._counter).toEqual(2);
    });
    it('return counter to 0 if played more than twice', function(){
      bowling.frame(10);
      bowling.frame(10);
      bowling.frame(10);
      expect(bowling._counter).toEqual(0);
    });
    it('adds score if counter less than 2', function(){
      bowling.frame(10);
      expect(bowling._currentScore).toEqual(10);
    });
  });

  describe('game', function(){
    it('adds 10 to total', function(){
      bowling._counter = 0;
      bowling.game(10);
      expect(bowling._total).toEqual(10);
    });
    it('adds 1 to frame if set complete', function(){
      bowling.game(10);
      expect(bowling._frame).toEqual(1);
    });
    it('counter does not change if strike', function(){
      bowling.game(10);
      expect(bowling._counter).toEqual(0);
    });
    it('resets counter if 2 rolls',function(){
      bowling.game(4);
      bowling.game(3);
      expect(bowling._counter).toEqual(0);
    });
    it('adds score to current score if first roll', function(){
      bowling.game(4);
      expect(bowling._currentScore).toEqual(4);
    })
    it('adds current score to total if second roll', function(){
      bowling.game(4);
      bowling.game(3);
      expect(bowling._total).toEqual(7);
    });
    it('cannot play more than 12 frames', function(){
      for(var i = 0; i<13; i++){
        bowling.game(5);
      }
      expect(bowling.game(5)).toEqual('Cannot play more than 12 frames');
    });
  })

  // describe('current score', function(){
  //   it('adds score to current score', function(){
  //     bowling.currentScore(10);
  //     expect(bowling._currentScore).toEqual(10);
  //   });
  // });

});
