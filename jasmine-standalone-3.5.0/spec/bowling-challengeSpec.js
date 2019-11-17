'use strict';

describe('Scorer', function(){

  var scorer;

  beforeEach(function() { scorer = new Scorer(); } );

  it('starts with a score of 0', function(){
    expect(scorer.tally).toEqual(0);
  });

  it('adds a normal frame to the tally', function(){
     scorer.addFrame(3, 2);
     expect(scorer.tally).toEqual(5);
  });

  it('adds a first roll to the tally', function(){
    scorer.addFrame(2, 0);
    expect(scorer.tally).toEqual(2); 
  });

  it('adds a second roll to the tally', function(){
    scorer.addFrame(0, 6);
    expect(scorer.tally).toEqual(6); 
  });

  it('adds a strike bonus to the tally', function(){
    scorer.addFrame(10, 0);
    scorer.addFrame(3, 4);
    expect(scorer.tally).toEqual(24);
  });

  it('adds a spare bonus to the tally', function(){
    scorer.addFrame(7, 3);
    scorer.addFrame(4, 5);
    expect(scorer.tally).toEqual(23);
  });

  it('runs for a maximum of ten frames', function(){
    scorer.addFrame(2,3);
    console.log(scorer.frame);
    scorer.addFrame(2,3);
    console.log(scorer.frame);
    scorer.addFrame(2,3);
    console.log(scorer.frame);
    scorer.addFrame(2,3);
    console.log(scorer.frame);
    scorer.addFrame(2,3);
    console.log(scorer.frame);
    scorer.addFrame(2,3);
    console.log(scorer.frame);
    scorer.addFrame(2,3);
    console.log(scorer.frame);
    scorer.addFrame(2,3);
    console.log(scorer.frame);
    scorer.addFrame(2,3);
    console.log(scorer.frame);
    scorer.addFrame(2,3);
    console.log(scorer.frame);
    scorer.addFrame(2,3);
    console.log(scorer.frame);
    expect(scorer.tally).toEqual(50);
  });
});

