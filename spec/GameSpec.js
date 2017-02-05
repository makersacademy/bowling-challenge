'use strict';

describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
  game = new Game();
  frame = jasmine.createSpyObj('frame',['clearForLanding']);
  });

  it('has an empty array of scores at the beginning', function(){
    expect(game.totalsOfFrames()).toEqual([]);
  });

  // it('doesnt not allow to have more than 10 frames', function(){
  //   for (i=0, i>=11) {
  //
  //   };
  //   expect(game.totalsOfFrames()).toEqual([]);
  // });

});
