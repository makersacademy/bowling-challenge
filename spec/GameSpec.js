"use strict";

describe('Game', function() {
  let game, frame, frame_0;

  beforeEach(function(){
    game = new Game();
    frame = jasmine.createSpyObj('Frame',['frame_Score', 'AddRoll1', 'isStrike'])
    frame_0 = jasmine.createSpyObj('Frame',['frame_Score', 'AddRoll1', 'isStrike'])
  })

});
