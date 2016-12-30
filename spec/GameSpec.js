'use strict';

describe ('Deal with Ten pins bowling game', function(){
  var game;
  var pins_1;
  var pins_2;

  beforeEach(function(){
    game = new Game();
    pins_1 = 5;
    pins_2 = 3;
  });

  describe ('as a default', function(){

    it('should set scores a empty hash', function(){
      expect( game.scores ).toEqual([]);
    });

    it('should set frameScores a empty array', function(){
      expect( game.frameScores ).toEqual([]);
    });

    it('should set strikeBonus a empty array', function(){
      expect( game.strikeBonus ).toEqual([]);
    });

    it('should set constant for number of Strike pins', function(){
      expect( game.STRIKE_PINS ).toBe( 10 )
    });

    it('should set roll "1"', function(){
      expect( game.roll ).toBe( 1 );
    });

    it('should set frame "1"', function(){
      expect( game.frame ).toBe( 1 );
    });

    it('should set gameFinish flag "false"', function(){
      expect( game.finish ).toBe( false );
    });

  });

  describe ('functions for passing the number of pins as score', function(){

      it ('should store pins by each frame', function(){
        game.passScore( pins_1 );
        expect( game.frameScores ).toEqual( [5] );
        game.passScore( pins_2 );
        expect( game.frameScores ).toEqual( [5,3] );
        expect( game.scores ).toEqual( [[5,3]] );
      });

      // it ('should store strike bonus to scores', function(){
      //   game.changeRoll();
      //   game.passStrike();
      //   game.setStrike();
      //   game.increaseFrame();
      //   game.passScore( pins_1 )
      //   game.passScore( pins_2 )
      //   game.passStrikeBonus( pins_1 )
      //   game.passStrikeBonus( pins_2 )
      //   expect( game.strikeBonus ).toEqual( [5,3] );
      //   expect( game.scores ).toEqual( [[10,0,8],[5,3]] );
      //   expect( game.sumGameScores() ).toEqual( 26 );
      // });

      // it ('should store spare bonus to scores', function(){
      //   game.changeRoll();
      //   game.passScore( 2 )
      //   game.passScore( 8 )
      //   game.setSpare();
      //   game.clearFrameScores();
      //   game.increaseFrame();
      //   game.passScore( pins_1 )
      //   game.passScore( pins_2 )
      //   game.passSpareBonus( pins_1 )
      //   expect( game.scores ).toEqual( [[2,8,5],[5,3]] );
      //   expect( game.sumGameScores() ).toEqual( 23 );
      // });

      it ('should store the score when strike', function(){
        game.passStrike();
        expect( game.scores ).toEqual( [[10,'-']] );
      });

      // it ('should clear strikeBonus after passing strikeBonus', function(){
      //   game.strikeBonus = [5,3];
      //   game.clearStrikeBonus()
      //   expect( game.strikeBonus ).toEqual( [] );
      // });

  });

  describe ('functions for changing roll', function(){

      it ('should increase roll', function(){
        game.increaseRoll();
        expect( game.roll ).toBe( 2 );
      });

      it ('should change 1 to 2 when change to next roll', function(){
        game.changeRoll();
        expect( game.roll ).toBe( 2 );
      });

      it ('should change 2 to 1 when the number of frame is under 10', function(){
        game.changeRoll();
        game.changeRoll();
        expect( game.roll ).toBe( 1 );
      });

  });

  describe ('functions for changing frame', function(){

    it ('should change 1 to 2 when moved the next frame', function(){
      game.changeRoll();
      game.increaseFrame();
      expect( game.frame ).toBe( 2 );
    });

    it ('should clear frameScores', function(){
      game.clearFrameScores();
      expect( game.frameScores ).toEqual( [] );
    });

  });


  describe ('functions for checking or setting a flag', function(){

    // it ('should set strike "true"', function(){
    //   game.setStrike();
    //   expect( game.strike ).toBe( true );
    // });
    //
    // it ('should check strike status', function(){
    //   game.setStrike();
    //   expect( game.strike ).toBe( true );
    // });
    //
    // it ('should check strike flag', function(){
    //   expect( game.isStrikeFlag() ).toEqual( false )
    //   game.setStrike();
    //   expect( game.isStrikeFlag() ).toEqual( true )
    // });
    //
    // it ('should check spare flag', function(){
    //   expect( game.isSpareFlag() ).toEqual( false )
    //   game.setSpare();
    //   expect( game.isSpareFlag() ).toEqual( true )
    // });

    // it ('should turn false Strike flag', function(){
    //   game.clearStrike();
    //   expect( game.strike ).toBe( false )
    // });
    //
    // it ('should turn false Spare flag', function(){
    //   game.clearSpare();
    //   expect( game.spare ).toBe( false )
    // });

  });


  describe ('functions for sum', function(){

      it ('should sum frame scores', function(){
        game.passScore( pins_1 );
        game.passScore( pins_2 );
        expect( game.sumFrameScores() ).toEqual( 8 );
      });

      it ('should sum game scores', function(){
        game.passScore( pins_1 );
        game.passScore( pins_2 );
        expect( game.sumGameScores() ).toEqual( 8 );
      });

  });

  it ('check whether the roll is last or not', function(){
    game.roll  = 3;
    var spare  = null;
    var strike = null;
    expect( game.isLastRoll(spare,strike) ).toEqual( true );
    game.roll  = 2;
    var spare  = null;
    var strike = null;
    expect( game.isLastRoll(spare,strike) ).toEqual( false );
    game.roll  = 2;
    var spare  = 1;
    var strike = null;
    expect( game.isLastRoll(spare,strike) ).toEqual( true );
    game.roll  = 2;
    var spare  = null;
    var strike = 1;
    expect( game.isLastRoll(spare,strike) ).toEqual( true );
    game.roll  = 1;
    var spare  = null;
    var strike = 1;
    expect( game.isLastRoll(spare,strike) ).toEqual( false );
  });

  it ('check whether the game finished or not', function(){
    pending();
    game.frame = 10;
    expect( game.isGameFinish() ).toEqual( false );
    game.roll = 2;
    expect( game.isGameFinish() ).toEqual( true );
    game.strike = true;
    expect( game.isGameFinish() ).toEqual( false );
    game.roll = 3;
    expect( game.isGameFinish() ).toEqual( true );
  });

});
