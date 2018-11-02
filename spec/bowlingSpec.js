'use strict';

describe('Scorecard',function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard;
  });

  it('starts the game at 0',function(){
    expect(scorecard.total).toEqual(0);
  });

  it('adds 1 to the total',function(){
    scorecard.addOne();
    expect(scorecard.total).toEqual(1);
  });

  it('adds 2 to the total',function(){
    scorecard.addTwo();
    expect(scorecard.total).toEqual(2);
  });

  it('adds 3 to the total',function(){
    scorecard.addThree();
    expect(scorecard.total).toEqual(3);
  });

  it('adds 4 to the total',function(){
    scorecard.addFour();
    expect(scorecard.total).toEqual(4);
  });

  it('adds 5 to the total',function(){
    scorecard.addFive();
    expect(scorecard.total).toEqual(5);
  });

  it('adds 6 to the total',function(){
    scorecard.addSix();
    expect(scorecard.total).toEqual(6);
  });

  it('adds 7 to the total',function(){
    scorecard.addSeven();
    expect(scorecard.total).toEqual(7);
  });

  it('adds 8 to the total',function(){
    scorecard.addEight();
    expect(scorecard.total).toEqual(8);
  });

  it('adds 9 to the total',function(){
    scorecard.addNine();
    expect(scorecard.total).toEqual(9);
  });

  it('adds 10 to the total',function(){
    scorecard.addTen();
    expect(scorecard.total).toEqual(10);
  });



});
