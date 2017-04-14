console.log('frameSpec file has been required correctly')

'use strict';

describe('Frame', function (){

  var frame;
  var game;

  beforeEach(function(){
    frame = new Frame();
    game = new BowlingGame(); //jasmine.createSpy('frame');
  })


  describe('Should be initialized', function () {
    it('with zero score', function (){
      expect(frame.score).toEqual(0);
    });
  });

  it('Adds to score', function(){
    expect(frame.addToScore(8)).toEqual('Score added')
    expect(frame.score).toEqual(8);
  });

  // describe('Player can roll twice in a single frame', function (){
  //   it('frame holds two rolls', function (){
  //     game.roll();
  //     game.roll();
  //     expect(frame.rollNum).toEqual(2);
  //   });
  // });
});
