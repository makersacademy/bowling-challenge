'use strict';

describe ('Deal with Strike', function(){
  var strike;
  var pins_1;
  var pins_2;

  beforeEach(function(){
    strike = new Strike();
    pins_1 = 4;
    pins_2 = 5;
  });

  it ('should store strike bonus', function(){
    expect( strike.addBonus( pins_1 ) ).toEqual( 4 )
    expect( strike.bonus ).toEqual( [pins_1] );
    expect( strike.addBonus( pins_2 ) ).toEqual( 9 )
    expect( strike.bonus ).toEqual( [pins_1,pins_2] );
  });

  it ('should clear strike bonus when has stored 2 scores', function(){
    strike.addBonus( pins_1 )
    strike.clearBonus();
    expect( strike.bonus ).toEqual( [pins_1] );
    strike.addBonus( pins_2 )
    strike.clearBonus();
    expect( strike.bonus ).toEqual( [] );
  });

  it ('should increase strike count', function(){
    strike.increaseCount();
    expect( strike.count ).toBe( 1 )
  });

  it ('should decrease strike count', function(){
    strike.increaseCount();
    strike.decreaseCount();
    expect( strike.count ).toBe( 0 )
  });

});
