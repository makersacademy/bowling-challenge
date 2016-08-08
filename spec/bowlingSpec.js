'use strict';
describe('Feature Test:', function(){
  var game;
  var game = new Game();
  it('user should be able to throw a ball', function(){
    expect(game.person.throw()).not.toBeUndefined()

  });
});
