"use strict";

describe( "the game should automatically calcuate the correct scores", () => {
  let game;

  beforeEach( () => {
    game = new Game();
  } );

  describe( "normal frames", () => {
    describe( "first frame", () => {
      it( "after the first ball", () => {
        game.addScore( 2 );

        expect( game.frame( 0 ).score1 ).toEqual( 2 );
        expect( game.frame( 0 ).score2 ).toEqual( null );
        expect( game.frame( 0 ).total ).toEqual( null );
      } );

      it( "after the second ball", () => {
        game.addScore( 2 );
        game.addScore( 4 );

        expect( game.frame( 0 ).score1 ).toEqual( 2 );
        expect( game.frame( 0 ).score2 ).toEqual( 4 );
        expect( game.frame( 0 ).total ).toEqual( 6 );
      } );
    } );

    describe( "later frame", () => {
      it( "after 2 frames complete", () => {
        game.addScore( 2 );
        game.addScore( 4 );
        game.addScore( 5 );
        game.addScore( 3 );

        expect( game.frame( 0 ).total ).toEqual( 6 );
        expect( game.frame( 1 ).total ).toEqual( 14 );
      } );

      it( "after 3 frames incomplete", () => {
        game.addScore( 2 );
        game.addScore( 4 );
        game.addScore( 5 );
        game.addScore( 3 );
        game.addScore( 8 );

        expect( game.frame( 0 ).total ).toEqual( 6 );
        expect( game.frame( 1 ).total ).toEqual( 14 );
        expect( game.frame( 2 ).total ).toEqual( null );
      } );
    } );
  } );

  describe( "spares", () => {
    it( "doesn't calcuate the frame score until the bonus is added", () => {
      game.addScore( 3 );
      game.addScore( 7 );

      expect( game.frame( 0 ).total ).toEqual( null );
    } );

    it( "calcuates the frame score after the second ball", () => {
      game.addScore( 3 );
      game.addScore( 7 );
      game.addScore( 4 );

      expect( game.frame( 0 ).total ).toEqual( 14 );
    } );

    it( "spare followed by full normal frame", () => {
      game.addScore( 3 );
      game.addScore( 7 );
      game.addScore( 3 );
      game.addScore( 4 );

      expect( game.frame( 1 ).total ).toEqual( 20 );
    } );

    it( "consecutive spares", () => {
      game.addScore( 3 );
      game.addScore( 7 );
      game.addScore( 5 );
      game.addScore( 5 );
      game.addScore( 3 );

      expect( game.frame( 1 ).total ).toEqual( 28 );
    } );

    it( "separated spares", () => {
      game.addScore( 3 );
      game.addScore( 7 );
      game.addScore( 5 );
      game.addScore( 2 );
      game.addScore( 6 );
      game.addScore( 4 );
      game.addScore( 2 );

      expect( game.frame( 2 ).total ).toEqual( 34 );
    } );

    it( "spare in later frame", () => {
      game.addScore( 5 );
      game.addScore( 3 );
      game.addScore( 3 );
      game.addScore( 7 );
      game.addScore( 5 );
      game.addScore( 5 );
      game.addScore( 3 );

      expect( game.frame( 2 ).total ).toEqual( 36 );
    } );
  } );

  describe( "strikes", () => {
    it( "moves to the next frame when you get a strike", () => {
      game.addScore( 10 );
      game.addScore( 5 );

      expect( game.frame( 0 ).score2 ).toEqual( null );
      expect( game.frame( 1 ).score1 ).toEqual( 5 );
    } );

    it( "doesn't calcuate the frame score without both added bonuses", () => {
      game.addScore( 10 );
      game.addScore( 5 );

      expect( game.frame( 0 ).total ).toEqual( null );
    } );

    describe( "correct score calculations", () => {
      it( "first frame strike", () => {
        game.addScore( 10 );
        game.addScore( 2 );
        game.addScore( 3 );

        expect( game.frame( 0 ).total ).toEqual( 15 );
        expect( game.frame( 1 ).total ).toEqual( 20 );
      } );

      it( "second frame strike", () => {
        game.addScore( 1 );
        game.addScore( 4 );
        game.addScore( 10 );
        game.addScore( 2 );
        game.addScore( 3 );

        expect( game.frame( 1 ).total ).toEqual( 20 );
        expect( game.frame( 2 ).total ).toEqual( 25 );
      } );

      it( "consecutive strikes", () => {
        game.addScore( 10 );
        game.addScore( 10 );
        game.addScore( 10 );
        game.addScore( 2 );
        game.addScore( 3 );

        expect( game.frame( 0 ).total ).toEqual( 30 );
        expect( game.frame( 1 ).total ).toEqual( 52 );
        expect( game.frame( 2 ).total ).toEqual( 67 );
        expect( game.frame( 3 ).total ).toEqual( 72 );
      } );

      it( "strike then spare", () => {
        game.addScore( 2 );
        game.addScore( 3 );
        game.addScore( 10 );
        game.addScore( 3 );
        game.addScore( 7 );
        game.addScore( 2 );

        expect( game.frame( 0 ).total ).toEqual( 5 );
        expect( game.frame( 1 ).total ).toEqual( 25 );
        expect( game.frame( 2 ).total ).toEqual( 37 );
      } );

      it( "spare then strike", () => {
        game.addScore( 2 );
        game.addScore( 3 );
        game.addScore( 3 );
        game.addScore( 7 );
        game.addScore( 10 );
        game.addScore( 2 );
        game.addScore( 3 );


        expect( game.frame( 0 ).total ).toEqual( 5 );
        expect( game.frame( 1 ).total ).toEqual( 25 );
        expect( game.frame( 2 ).total ).toEqual( 40 );
        expect( game.frame( 3 ).total ).toEqual( 45 );
      } );
    } );
  } );
} );
