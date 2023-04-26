const Scorecard = require('./scorecard')

describe('Scorecard unit testing:', () => {
  it('Returns empty scorecard', () => {
    const result = new Scorecard()
    expect(result.getGame()).toEqual([])
  });

  it('Adds scores, returns game', () => {
    const result = new Scorecard()

    const doubleFrame_1  = { getFrame: () => { return [1,2] }}
    const doubleFrame_2  = { getFrame: () => { return [1,1] }}

    result.game = [doubleFrame_1, doubleFrame_2]
    expect(result.getGame()).toEqual([[1,2],[1,1]])
  });

  it('Adds scores, returns total score', () => {
    const result = new Scorecard()

    const doubleFrame_1  = { getTotal: () => { return 3 }, 
                             getStrike: () => { return false }, 
                             getSpare: () => { return false }, }
                             
    const doubleFrame_2  = { getTotal: () => { return 2 }, 
                             getStrike: () => { return false }, 
                             getSpare: () => { return false }, }

    result.game = [doubleFrame_1, doubleFrame_2]
    result.calculateScore();
    expect(result.getScore()).toEqual(5)
  });

  it('Adds scores, returns score with bonus score - strikes', () => {
    const result = new Scorecard()

    const doubleFrame_1  = { 
      getIndex: () => { return 0 },
      getFrame: () => { return [10,0] },
      getStrike: () => { return true },
      getSpare: () => { return false },
      getTotal: () => { return 10 },
    }

    const doubleFrame_2  = {
      getIndex: () => { return 1 }, 
      getFrame: () => { return [1,1] },
      getStrike: () => { return false },
      getSpare: () => { return false },
      getTotal: () => { return 2 },
    }

    const doubleFrame_3  = { 
      getIndex: () => { return 2 },
      getFrame: () => { return [5,1] },
      getStrike: () => { return false },
      getSpare: () => { return false },
      getTotal: () => { return 6 },
    }

    const doubleFrame_4  = {
      getIndex: () => { return 3 }, 
      getFrame: () => { return [5,4] },
      getStrike: () => { return false },
      getSpare: () => { return false },
      getTotal: () => { return 9 },
    }

    result.game = [doubleFrame_1, doubleFrame_2, doubleFrame_3, doubleFrame_4]

    expect(result.getGame()).toEqual([[10,0], [1,1], [5,1], [5,4]]);
    expect(result.idStrikes()).toEqual([0]);
    
    result.calculateScore();
    expect(result.getScore()).toEqual(35);
  });

  it('Adds scores, returns score with bonus score - spares', () => {
    const result = new Scorecard()

    const doubleFrame_1  = { 
      getIndex: () => { return 0 },
      getFrame: () => { return [0,0] },
      getStrike: () => { return false },
      getSpare: () => { return false },
      getTotal: () => { return 0 },
    }

    const doubleFrame_2  = {
      getIndex: () => { return 1 }, 
      getFrame: () => { return [5,5] },
      getStrike: () => { return false },
      getSpare: () => { return true },
      getTotal: () => { return 10 },
    }

    const doubleFrame_3  = { 
      getIndex: () => { return 2 },
      getFrame: () => { return [5,1] },
      getStrike: () => { return false },
      getSpare: () => { return false },
      getTotal: () => { return 6 },
    }

    const doubleFrame_4  = {
      getIndex: () => { return 3 }, 
      getFrame: () => { return [5,4] },
      getStrike: () => { return false },
      getSpare: () => { return false },
      getTotal: () => { return 9 },
    }

    result.game = [doubleFrame_1, doubleFrame_2, doubleFrame_3, doubleFrame_4]

    expect(result.getGame()).toEqual([[0,0], [5,5], [5,1], [5,4]]);
    expect(result.idSpares()).toEqual([1]);
    
    result.calculateScore();
    expect(result.getScore()).toEqual(30);
  });

})

describe('Scorecard integration testing:', () => {
  it('Adds frame objects to score, returns game', () => {
    const result = new Scorecard()
    result.addFrame(1, [1, 2])
    result.addFrame(2, [1, 1])
    expect(result.getGame()).toEqual([[1, 2], [1, 1]])
  });

  it('Adds frame objects to score, returns total score', () => {
    const result = new Scorecard()
    result.addFrame(1, [1, 2])
    result.addFrame(2, [1, 1])
    result.calculateScore();
    expect(result.getScore()).toEqual(5)
  });

  it('Adds scores, returns score with bonus score - strikes', () => {
    const result = new Scorecard()
    result.addFrame(1, [10,0]);
    result.addFrame(2, [1,1]);
    result.addFrame(3, [5,1]);
    result.addFrame(4, [5,4]);

    expect(result.getGame()).toEqual([[10,0], [1,1], [5,1], [5,4]]);
    expect(result.idStrikes()).toEqual([0]);
    
    result.calculateScore();
    expect(result.getScore()).toEqual(35);
  });

  it('Adds scores, returns score with bonus score - spares', () => {
    const result = new Scorecard()
    result.addFrame(1, [0,0]);
    result.addFrame(2, [5,5]);
    result.addFrame(3, [5,1]);
    result.addFrame(4, [5,4]);

    expect(result.getGame()).toEqual([[0,0], [5,5], [5,1], [5,4]]);
    expect(result.idSpares()).toEqual([1]);
    
    result.calculateScore();
    expect(result.getScore()).toEqual(30);
  });
})