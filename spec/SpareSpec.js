'use strict';

describe ('Deal with spare', function(){
  var spare;
  var pins;

  beforeEach(function(){
    spare = new Spare();
    pins = 4;
  });

  describe ('as a default', function(){
      it ('should set count 0',function(){
        expect( spare.count ).toBe( 0 )
      });
  });

  it ('should store spare bonus', function(){
    spare.addBonus( pins )
    expect( spare.bonus ).toEqual( pins );
  });

});
