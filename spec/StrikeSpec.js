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
    expect( strike.bonus1 ).toEqual( [pins_1] );
    expect( strike.addBonus( pins_2 ) ).toEqual( 9 )
    expect( strike.bonus1 ).toEqual( [pins_1,pins_2] );
  });

  it ('should increase strike count by 2', function(){
    strike.increaseCount();
    expect( strike.count ).toBe( 4 )
  });

  it ('should decrease strike count by 1', function(){
    strike.decreaseCount();
    expect( strike.count ).toBe( 1 )
  });

});
