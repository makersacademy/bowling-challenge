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

    it('should set third roll flag "false"', function(){
      expect( game.thirdRoll ).toBe( false );
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

      it ('should store 0 pin at frameScores[1]', function(){
        game.passScore( pins_1 );
        game.passStrikeSecondRollScore();
        expect( game.frameScores ).toEqual( [5,0] );
        expect( game.scores ).toEqual( [[5,0]] );
      });

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

    it ('should change frame 1 to 2 when 2 scores in frameScores', function(){
      game.frameScores = [1,1]
      game.increaseFrame();
      expect( game.frame ).toBe( 2 );
    });

    it ('should clear frameScores', function(){
      game.clearFrameScores();
      expect( game.frameScores ).toEqual( [] );
    });

  });

  it ('check whether the game finished or not', function(){
    game.frame = 10;
    expect( game.isGameFinish() ).toEqual( false );
    game.roll = 2;
    expect( game.isGameFinish() ).toEqual( true );
    game.thirdRoll = true;
    expect( game.isGameFinish() ).toEqual( false );
    game.roll = 3;
    expect( game.isGameFinish() ).toEqual( true );
  });

});
