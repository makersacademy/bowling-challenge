"use strict";

describe('Game', function() {
  let game, frame;

  beforeEach(function(){
    game = new Game();
    frame = jasmine.createSpyObj('Frame',['frame_Score', 'AddRoll1', 'isStrike'])
  })

  // it('updates the score of the previous frame when it was a strike', function() {
  //   game.PreviousFrame().AddRoll1(10);
  //   game.CurrentFrame().frame_score = 6;
  //   expect(game.PreviousFrame().frame_Score()).toEqual(16)
  // })
});
