'use strict';

describe ('Caluclater for Ten pins bowling', function(){

  var caluclater;
  var pins;

  beforeEach(function(){
    caluclater = new CaluclaterTenPinsBowling();
    pins = 5;
  });


  describe ('as a default', function(){

    it('should set gameScores a empty hash', function(){
      expect( caluclater.gameScores ).toEqual({});
    });

    it('should set frameScores a empty array', function(){
      expect( caluclater.frameScores ).toEqual([]);
    });

    it('should set roll "1"', function(){
      expect( caluclater.roll ).toBe(1);
    });

    it('should set frame "1"', function(){
      expect( caluclater.frame ).toBe(1);
    });

    it('should set strike flag "false"', function(){
      expect( caluclater.strike ).toBe(false);
    });

    it('should set constant about number of Strike pins', function(){
      expect( caluclater.STRIKE_PINS ).toBe(10)
    });

  });

  it ('should store Scores how many pins the player knocks down', function(){
    caluclater.passScore(pins);
    expect( caluclater.frameScores ).toEqual([5]);
    caluclater.passScore(pins);
    expect( caluclater.frameScores ).toEqual([5,5]);
    expect( caluclater.gameScores ).toEqual({1:[5,5]});
  });

  it ('should store Scores when Strike', function(){
    caluclater.passStrike();
    expect( caluclater.gameScores ).toEqual({1:[10,"-"]});
  });


  it ('should change 1 to 2 when change to next roll', function(){
    caluclater.changeRoll();
    expect( caluclater.roll ).toBe(2);
  });

  it ('should change 2 to 1 when change to next roll', function(){
    caluclater.changeRoll();
    caluclater.changeRoll();
    expect( caluclater.roll ).toBe(1);
  });

  it ('should change 1 to 2 when moved the next frame', function(){
    caluclater.increaseFrame();
    expect( caluclater.frame ).toBe(2);
  });

  it ('should clear frameScores', function(){
    caluclater.clearFrameScores();
    expect( caluclater.frameScores ).toEqual([]);
  });

  it ('should set strike "true"', function(){
    caluclater.setStrike();
    expect( caluclater.strike ).toBe(true);
  });

  it ('should check strike status', function(){
    caluclater.setStrike();
    expect( caluclater.strike ).toBe(true);
  });

});
