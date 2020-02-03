"use strict";

describe('Bowling', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  })

  it('starts with no frames', function(){
    expect(bowling.game.length).toEqual(0)
  })

  it('Can calculate a game of gutter balls', function(){
    for (var roll = 0; roll < 20; roll++) {
      bowling.play(0);
    }
    expect(bowling.score()).toEqual(0);
  })

  it('Can calculate a game of 1 pin balls', function(){
    for (var roll = 0; roll < 20; roll++) {
      bowling.play(1);
    }
    expect(bowling.score()).toEqual(20);
  })

  it('can calculate a normal round', function(){
    bowling.play(6);
    bowling.play(3);
    for (var roll = 0; roll < 18; roll++) {
      bowling.play(0); 
    }
    expect(bowling.score()).toEqual(9);
  })

  it('can calculate a spare round', function(){
    bowling.play(7);
    bowling.play(3);
    bowling.play(5);
    for (var roll = 0; roll < 17; roll++) {
      bowling.play(0); 
    }
    expect(bowling.score()).toEqual(20);
  })

  it('can calculate a strike round', function(){
    bowling.play(10);
    bowling.play(7);
    bowling.play(1);
    for (var roll = 0; roll < 16; roll++) {
      bowling.play(0); 
    }
    expect(bowling.score()).toEqual(26);
  })

  it('last round has an extra ball if a spare is rolled in the tenth frame (ball 19 and 20)', function(){
    for (var roll = 0; roll < 18; roll++) {
      bowling.play(1); 
    }
      bowling.play(5); 
      bowling.play(5);
      bowling.play(5); 
    expect(bowling.score()).toEqual(33);
  })

  it('last round has 2 extra balls if a strike is rolled in the tenth frame (ball 19)', function(){
    for (var roll = 0; roll < 18; roll++) {
      bowling.play(1); 
    }
      bowling.play(10); 
      bowling.play(5);
      bowling.play(5); 
    expect(bowling.score()).toEqual(38);
  })

  it('can roll a perfect game', function(){
    for (var roll = 0; roll < 12; roll++) {
      bowling.play(10); 
    }
    expect(bowling.score()).toEqual(300);
  })
})