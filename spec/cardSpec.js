describe ('ScoreCard', function(){

    var scoreCard
    var frame

    beforeEach(function(){
        scoreCard = new ScoreCard();
        frame = new Frame();
    });

    describe('roll1', function(){
        it('adds to consecutiveStrikes if roll1 is 10', function(){
            scoreCard.roll1(10);
            expect(scoreCard.consecutiveStrikes).toEqual(1);
        });
        it('adds the number of pins to roll1Value if the number of pins is less than 10', function(){
            scoreCard.roll1(3);
            expect(scoreCard.roll1Value).toEqual(3);
        });
        it('adds the number of pins to spareBonusValue when spareBonus is true', function(){
            scoreCard.spareBonus = true;
            scoreCard.roll1(3);
            expect(scoreCard.spareBonusValue).toEqual(3);
        });

        describe('at frame 10', function(){
            it('accepts a second roll if roll one is a strike', function(){
                for(var i = 0; i<9; i++){
                    scoreCard.roll1(1);
                    scoreCard.roll2(2);
                };
                scoreCard.roll1(10);
                scoreCard.roll2(3);

                expect(scoreCard.score[10].roll2).toEqual(3);
            });
        });

    });
    
   describe('roll2', function(){
        it('changes spareBonus to true when roll1Value and pins are equal to 10', function(){
            scoreCard.roll1Value = 8;
            scoreCard.roll2(2);
            expect(scoreCard.spareBonus).toBeTruthy();
        });
        it('adds the number of pins to roll2Value', function(){
            scoreCard.roll2(8);
            expect(scoreCard.roll2Value).toEqual(8);
        })
   });

   describe('addFrame', function(){
        it('adds a new frame after roll1 when there is a strike', function(){
            scoreCard.roll1(10);
            expect(scoreCard.score.length).toEqual(1);
        });

        it('adds a new frame after roll2 when there was no strike', function(){
            scoreCard.roll1(3);
            scoreCard.roll2(3);
            expect(scoreCard.score.length).toEqual(1);
        });

   });
   

});