'use strict';

describe('Feature Test:', function(){
  var bowl;
  var scoring;

  before Each(function(){
    bowl = new Bowl();
    scoring = new Scoring();
  });

  it('score is calculated after each bowl', function(){
    bowl.score;
  })

})
