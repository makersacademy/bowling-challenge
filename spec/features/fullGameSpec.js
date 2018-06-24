describe('Gutter Game', function(){
  it('has a final score of 0', function(){
    scorecard = new Scorecard();

    scorecard.bowl(0, 0);
    scorecard.bowl(0, 0);
    scorecard.bowl(0, 0);
    scorecard.bowl(0, 0);
    scorecard.bowl(0, 0);
    scorecard.bowl(0, 0);
    scorecard.bowl(0, 0);
    scorecard.bowl(0, 0);
    scorecard.bowl(0, 0);
    scorecard.bowl(0, 0);

    expect(scorecard.showScore()).toEqual(0);
  });
});

describe('Perfect Game', function(){
  it('has a final score of 300', function(){
    scorecard = new Scorecard();

    scorecard.bowl(10, 0);
    scorecard.bowl(10, 0);
    scorecard.bowl(10, 0);
    scorecard.bowl(10, 0);
    scorecard.bowl(10, 0);
    scorecard.bowl(10, 0);
    scorecard.bowl(10, 0);
    scorecard.bowl(10, 0);
    scorecard.bowl(10, 0);
    scorecard.bowl(10, 10, 10);
    expect(scorecard.showScore()).toEqual(300);
  });
});

describe('All spares until final ball', function(){
  it('has a final score of 154', function(){
    scorecard = new Scorecard();

    scorecard.bowl(4, 6);
    scorecard.bowl(3, 7);
    scorecard.bowl(6, 4);
    scorecard.bowl(5, 5);
    scorecard.bowl(6, 4);
    scorecard.bowl(9, 1);
    scorecard.bowl(7, 3);
    scorecard.bowl(6, 4);
    scorecard.bowl(4, 6);
    scorecard.bowl(2, 8, 6);

    expect(scorecard.showScore()).toEqual(154);
  });
});

describe('Normal Game', function(){
  it('has a final score of 133', function(){
    scorecard = new Scorecard();

    scorecard.bowl(1, 4);
    scorecard.bowl(4, 5);
    scorecard.bowl(6, 4);
    scorecard.bowl(5, 5);
    scorecard.bowl(10, 0);
    scorecard.bowl(0, 1);
    scorecard.bowl(7, 3);
    scorecard.bowl(6, 4);
    scorecard.bowl(10, 0);
    scorecard.bowl(2, 8, 6);

    expect(scorecard.showScore()).toEqual(133);
  });
});
