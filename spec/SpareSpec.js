'use strict';

describe ('Deal with spare', function(){
  var spare;
  var pins;

  beforeEach(function(){
    spare = new Spare();
    pins = 4;
  });

  it ('should store spare bonus', function(){
    spare.addBonus( pins )
    expect( spare.bonus ).toEqual( pins );
  });

});
