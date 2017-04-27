'use strict';
describe('Bonus', function(){
  var bonus;

  beforeEach( function(){
    bonus = new Bonus();
  });

  it('initialized with zero bonus points', function(){
    expect(bonus.points).toEqual(0);
  });
});
