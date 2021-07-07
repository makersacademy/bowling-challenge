'use strict';

describe(`Player`, function(){

  let player;

  beforeEach(function(){
    player = new Player(`Dave`);
  });

  it(`has a name`, function(){
    expect(player.name).toEqual(`Dave`);
  });

  it(`has a score of 0 on creation`, function(){
    expect(player.score).toEqual(0);
  });

  it(`can set score`, function(){
    player.score = 10;

    expect(player.score).toEqual(10);
  });

  it(`can increase score`, function(){
    player.add(10);

    expect(player.score).toEqual(10);
  });

  it(`can decrease score`, function(){
    player.score = 20;
    player.subtract(10);

    expect(player.score).toEqual(10);
  });

});
