'use strict';

describe ('calculator for Ten pins bowling', function(){

  var calculator;
  var pins_1;
  var pins_2;

  beforeEach(function(){
    calculator = new CalculatorTenPinsBowling();
    pins_1 = 5;
    pins_2 = 3;
  });


  describe ('as a default', function(){

      it('should set gameScores a empty hash', function(){
        expect( calculator.gameScores ).toEqual([]);
      });

      it('should set frameScores a empty array', function(){
        expect( calculator.frameScores ).toEqual([]);
      });

      it('should set roll "1"', function(){
        expect( calculator.roll ).toBe( 1 );
      });

      it('should set frame "1"', function(){
        expect( calculator.frame ).toBe( 1 );
      });

      it('should set strike flag "false"', function(){
        expect( calculator.strike ).toBe( false );
      });

      it('should set spare flag "false"', function(){
        expect( calculator.spare ).toBe( false );
      });

      it('should set constant for number of Strike pins', function(){
        expect( calculator.STRIKE_PINS ).toBe( 10 )
      });

      // it('should set bonus for strike and spare', function(){
      //   expect( calculator.strikeBonus ).toEqual( [] );
      //   expect( calculator.spareBonus ).toBe( 0 );
      // });

      it('should set gameFinish flag "false"', function(){
        expect( calculator.gameFinish ).toBe( false );
      });

  });

  describe ('functions for passing the number of pins as score', function(){

      it ('should store pins by each frame', function(){
        calculator.passScore( pins_1 );
        expect( calculator.frameScores ).toEqual( [5] );
        calculator.passScore( pins_2 );
        expect( calculator.frameScores ).toEqual( [5,3] );
        expect( calculator.gameScores ).toEqual( [[5,3]] );
      });

      // it ('should store strike bonus for two rolls', function(){
      //   calculator.passStrikeBonus( pins_1 )
      //   calculator.passStrikeBonus( pins_2 )
      //   expect( calculator.strikeBonus ).toEqual( [5,3] );
      // });

      // it ('should store spare bonus for one roll', function(){
      //   calculator.passSpareBonus( pins_1 )
      //   expect( calculator.spareBonus ).toBe( 5 );
      // });

      it ('should store strike bonus to gameScores', function(){
        calculator.changeRoll();
        calculator.passStrike();
        calculator.setStrike();
        calculator.increaseFrame();
        calculator.passScore( pins_1 )
        calculator.passScore( pins_2 )
        calculator.passStrikeBonus()
        expect( calculator.gameScores ).toEqual( [[10,0,8],[5,3]] );
        expect( calculator.sumGameScores() ).toEqual( 26 );
      });

      it ('should store spare bonus to gameScores', function(){
        calculator.changeRoll();
        calculator.passScore( 2 )
        calculator.passScore( 8 )
        calculator.setSpare();
        calculator.clearFrameScores();
        calculator.increaseFrame();
        calculator.passScore( pins_1 )
        calculator.passScore( pins_2 )
        calculator.passSpareBonus( pins_1 )
        expect( calculator.gameScores ).toEqual( [[2,8,5],[5,3]] );
        expect( calculator.sumGameScores() ).toEqual( 23 );
      });

      it ('should store the score when strike', function(){
        calculator.passStrike();
        expect( calculator.gameScores ).toEqual( [[10,0]] );
      });

  });

  describe ('functions for changing roll', function(){

      it ('should increase roll', function(){
        calculator.increaseRoll();
        expect( calculator.roll ).toBe( 2 );
      });

      it ('should change 1 to 2 when change to next roll', function(){
        calculator.changeRoll();
        expect( calculator.roll ).toBe( 2 );
      });

      it ('should change 2 to 1 when the number of frame is under 10', function(){
        calculator.changeRoll();
        calculator.changeRoll();
        expect( calculator.roll ).toBe( 1 );
      });

  });

  describe ('functions for changing frame', function(){

    it ('should change 1 to 2 when moved the next frame', function(){
      calculator.changeRoll();
      calculator.increaseFrame();
      expect( calculator.frame ).toBe( 2 );
    });

    it ('should clear frameScores', function(){
      calculator.clearFrameScores();
      expect( calculator.frameScores ).toEqual( [] );
    });

  });


  describe ('functions for checking or setting a flag', function(){

    it ('should set strike "true"', function(){
      calculator.setStrike();
      expect( calculator.strike ).toBe( true );
    });

    it ('should check strike status', function(){
      calculator.setStrike();
      expect( calculator.strike ).toBe( true );
    });

    it ('should check strike flag', function(){
      expect( calculator.isStrikeFlag() ).toEqual( false )
      calculator.setStrike();
      expect( calculator.isStrikeFlag() ).toEqual( true )
    });

    it ('should check spare flag', function(){
      expect( calculator.isSpareFlag() ).toEqual( false )
      calculator.setSpare();
      expect( calculator.isSpareFlag() ).toEqual( true )
    });

    it ('should turn false Strike flag', function(){
      calculator.clearStrike();
      expect( calculator.strike ).toBe( false )
    });

    it ('should turn false Spare flag', function(){
      calculator.clearSpare();
      expect( calculator.spare ).toBe( false )
    });

  });


  describe ('functions for sum', function(){

      it ('should sum frame scores', function(){
        calculator.passScore( pins_1 );
        calculator.passScore( pins_2 );
        expect( calculator.sumFrameScores() ).toEqual( 8 );
      });

      it ('should sum game scores', function(){
        calculator.passScore( pins_1 );
        calculator.passScore( pins_2 );
        expect( calculator.sumGameScores() ).toEqual( 8 );
      });

      // it ('should sum strike bonus', function(){
      //   calculator.passScore( pins_1 );
      //   calculator.passScore( pins_2 );
      //   calculator.passStrikeBonus();
      //   expect( calculator.sumStrikeBonus() ).toEqual( 8 );
      // });

  });

  it ('check whether the game finished or not', function(){
    calculator.frame = 10;
    expect( calculator.isGameFinish() ).toEqual( false );
    calculator.roll = 2;
    expect( calculator.isGameFinish() ).toEqual( true );
    calculator.strike = true;
    expect( calculator.isGameFinish() ).toEqual( false );
    calculator.roll = 3;
    expect( calculator.isGameFinish() ).toEqual( true );
  });

});
