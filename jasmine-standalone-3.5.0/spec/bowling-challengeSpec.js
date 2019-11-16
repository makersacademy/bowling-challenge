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
       console.log(scorer.tally);
       scorer.addFrame(10, 0);
       console.log(scorer.strike);
       scorer.addFrame(3, 4);
       console.log(scorer.strike);
       expect(scorer.tally).toEqual(24);
    });
});