'use strict';

describe ('Caluclater for Ten pins bowling', function(){

  var caluclater;
  var pins_1;
  var pins_2;

  beforeEach(function(){
    caluclater = new CaluclaterTenPinsBowling();
    pins_1 = 5;
    pins_2 = 3;
  });


  describe ('as a default', function(){

      it('should set gameScores a empty hash', function(){
        expect( caluclater.gameScores ).toEqual({});
      });

      it('should set frameScores a empty array', function(){
        expect( caluclater.frameScores ).toEqual([]);
      });

      it('should set roll "1"', function(){
        expect( caluclater.roll ).toBe( 1 );
      });

      it('should set frame "1"', function(){
        expect( caluclater.frame ).toBe( 1 );
      });

      it('should set strike flag "false"', function(){
        expect( caluclater.strike ).toBe( false );
      });

      it('should set spare flag "false"', function(){
        expect( caluclater.spare ).toBe( false );
      });

      it('should set constant for number of Strike pins', function(){
        expect( caluclater.STRIKE_PINS ).toBe( 10 )
      });

      it('should set bounus for strike and spare', function(){
        expect( caluclater.strikeBounus ).toEqual( [] );
        expect( caluclater.spareBounus ).toBe( 0 );
      });

  });

  describe ('functions about pass pins', function(){

      it ('should store pins by each frame', function(){
        caluclater.passScore( pins_1 );
        expect( caluclater.frameScores ).toEqual( [5] );
        caluclater.passScore( pins_2 );
        expect( caluclater.frameScores ).toEqual( [5,3] );
        expect( caluclater.gameScores ).toEqual( {1:[5,3]} );
      });

      it ('should store strike bounus for two rolls', function(){
        caluclater.passStrikeBounus( pins_1 )
        caluclater.passStrikeBounus( pins_2 )
        expect( caluclater.strikeBounus ).toEqual( [5,3] );
      });

      it ('should store spare bounus for one roll', function(){
        caluclater.passSpareBounus( pins_1 )
        expect( caluclater.spareBounus ).toBe( 5 );
      });

  });


  it ('should store Scores when Strike', function(){
    caluclater.passStrike();
    expect( caluclater.gameScores ).toEqual( {1:[10,"-"]} );
  });


  it ('should change 1 to 2 when change to next roll', function(){
    caluclater.changeRoll();
    expect( caluclater.roll ).toBe( 2 );
  });

  it ('should change 2 to 1 when change to next roll', function(){
    caluclater.changeRoll();
    caluclater.changeRoll();
    expect( caluclater.roll ).toBe( 1 );
  });

  it ('should change 1 to 2 when moved the next frame', function(){
    caluclater.increaseFrame();
    expect( caluclater.frame ).toBe( 2 );
  });

  it ('should clear frameScores', function(){
    caluclater.clearFrameScores();
    expect( caluclater.frameScores ).toEqual( [] );
  });

  it ('should set strike "true"', function(){
    caluclater.setStrike();
    expect( caluclater.strike ).toBe( true );
  });

  it ('should check strike status', function(){
    caluclater.setStrike();
    expect( caluclater.strike ).toBe( true );
  });

  it ('should check strike flag', function(){
    expect( caluclater.isStrikeFlag() ).toEqual( false )
    caluclater.setStrike();
    expect( caluclater.isStrikeFlag() ).toEqual( true )
  });

  it ('should check spare flag', function(){
    expect( caluclater.isSpareFlag() ).toEqual( false )
    caluclater.setSpare();
    expect( caluclater.isSpareFlag() ).toEqual( true )
  });

  it ('should turn false Strike flag', function(){
    caluclater.clearStrike();
    expect( caluclater.strike ).toBe( false )
  });

  it ('should turn false Spare flag', function(){
    caluclater.clearSpare();
    expect( caluclater.spare ).toBe( false )
  });
});
