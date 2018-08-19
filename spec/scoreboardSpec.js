describe('Scoreboard', function() {
  var score;
  beforeEach(function() {
    score = new Scoreboard();
  });

  play = function() {
    score.roll()
    if(score._currentFrame.done() && score._frame >= 10) {
     score.gameOver()
    } 
    else if (score._currentFrame.done()) {
      score.saveScore()
    }
  }

  doublePlay = function() {
    play()
    play()
  }

  describe('Basic functionality:', function() {

    it('starts with zero', function() {
      expect(score._frames).toEqual([]);
    });

    it('saves completed frames', function(){
      spyOn(score._currentFrame, 'done').and.returnValue(true)
      play()
      expect(score._frames.length).toEqual(1)
    });

    it('sums the total', function(){
      spyOn(score._currentFrame, 'hit').and.returnValue(4)
      doublePlay()
      expect(score.total()).toEqual(8)
    });
    

  });

  describe('Spare:', function() {

    it('adds spare bonus points', function() {
      spyOn(score._currentFrame, 'hit').and.returnValue(5)
      doublePlay()
      spyOn(score._currentFrame, 'hit').and.returnValue(4)
      doublePlay()
      expect(score.total()).toEqual(22)
    });

    it('awards 1 bonus roll for frame 10 spare', function() {
      for(var turn = 0; turn < 10; turn++) {
        spyOn(score._currentFrame, 'hit').and.returnValue(5)
        doublePlay()
      }
      debugger
      expect(score.done()).toEqual(false)
    });

    it('adds frame 10 bonus roll points to total', function() {
      for(var turn = 0; turn < 9; turn++) {
        spyOn(score._currentFrame, 'hit').and.returnValue(1)
        doublePlay()
      }
      spyOn(score._currentFrame, 'hit').and.returnValue(5)
      doublePlay()
      spyOn(score._currentFrame, 'hit').and.returnValue(7)
      play()
      expect(score.total()).toEqual(35)
    });

  
    it('finalises score after frame 10 spare bonus roll', function() {
      for(var turn = 0; turn < 10; turn++) {
        spyOn(score._currentFrame, 'hit').and.returnValue(5)
        doublePlay()
      }
      spyOn(score._currentFrame, 'hit').and.returnValue(7)
      play()
      expect(score.done()).toEqual(true)
    });
  });

  describe('Strike', function() {

    it('awards 2 bonus rolls for frame 10 strike', function() {
      for(var turn = 0; turn < 10; turn++) {
        spyOn(score._currentFrame, 'hit').and.returnValue(10)
        play()
      }
      spyOn(score._currentFrame, 'hit').and.returnValue(4)
      play()
      expect(score.done()).toEqual(false)
      play()
      expect(score.done()).toEqual(true)
    });

    it('adds strike bonus points', function() {
      spyOn(score._currentFrame, 'hit').and.returnValue(10)
      play()
      spyOn(score._currentFrame, 'hit').and.returnValue(4)
      doublePlay()
      expect(score.total()).toEqual(26)
    });
  
    it('adds double strike bonus points', function() {
      spyOn(score._currentFrame, 'hit').and.returnValue(10)
      play()
      spyOn(score._currentFrame, 'hit').and.returnValue(10)
      play()
      spyOn(score._currentFrame, 'hit').and.returnValue(7)
      doublePlay()
      expect(score.total()).toEqual(65)
    });
  
    it('adds double strike bonus points for frame 10', function() {
      for(var turn = 0; turn < 9; turn++) {
        spyOn(score._currentFrame, 'hit').and.returnValue(1)
        doublePlay()
      }
      spyOn(score._currentFrame, 'hit').and.returnValue(10)
      play()
      spyOn(score._currentFrame, 'hit').and.returnValue(7)
      doublePlay()
      expect(score.total()).toEqual(42)
    });

    it('can award a perfect game', function() {
      for(var turn = 0; turn < 11; turn++) {
        spyOn(score._currentFrame, 'hit').and.returnValue(10)
        play()
      }
      play()
      expect(score.total()).toEqual(300)
    });
  });
});
