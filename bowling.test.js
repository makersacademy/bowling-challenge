const Bowling = require('./bowling.js');

describe('Bowling', () => {
  test('it has a score of 0', () => {
    game = new Bowling
    expect(game.getScore()).toEqual(0);
  })
  test('it increase the score to 9 after 1 frame', () => {

    game = new Bowling
    game.addScores(5,4)
    expect(game.getScore()).toEqual(9);
  })
  test('it increase the score to 90 after 10 frame', () => {

    game = new Bowling
    i=0
    while (i<10){
    game.addScores(5,4);
    i++;
    }
    expect(game.getScore()).toEqual(90);
  })
  test('you should be able to refer to scores from individual frames', () => {

    game = new Bowling
    i=0
    while (i<10){
    game.addScores(5,4);
    i++;
    }

    expect(game.getFrame(1)).toEqual([5,4]);
    expect(game.getFrame(2)).toEqual([5,4]);
  })
  test('when you finish the game it should let you know', () => {

    game = new Bowling
    i=0
    while (i<9){
    game.addScores(5,4);
    i++;
    }

    expect(game.addScores(5,4)).toEqual('Well done your final score is 90');
    expect(game.getFrame(2)).toEqual([5,4]);
  })
  test('if it works for all sums below 10', () => {

    game = new Bowling
    game.addScores(0,0);
    game.addScores(1,1);
    game.addScores(2,2);
    game.addScores(2,2);
    game.addScores(3,3);
    game.addScores(6,3);
    game.addScores(6,2);
    game.addScores(7,1);
    game.addScores(9,0);

    expect(game.addScores(5,4)).toEqual('Well done your final score is 59');
    expect(game.getFrame(2)).toEqual([1,1]);
  })
  test('knows if you got a spare on any frame', () => {

    game = new Bowling
    game.addScores(9,1);
    
    expect(game.getScore()).toEqual('10 + 1 roll')
    expect(game.getFrame(1)).toEqual([9,1,'roll'])
  })
  test('able to calculate scoring with spares involved', () => {

    game = new Bowling
    game.addScores(9,1);
    game.addScores(9,0);
    
    expect(game.getScore()).toEqual(28)
    expect(game.getFrame(1)).toEqual([9,1,9])
  })
  test('able to calculate scoring with spares involved 2', () => {

    game = new Bowling
    game.addScores(0,0);
    game.addScores(1,9);
    game.addScores(2,2);
    game.addScores(2,2);
    game.addScores(3,3);
    game.addScores(6,3);
    game.addScores(6,4);
    game.addScores(7,1);
    game.addScores(9,0);

    expect(game.addScores(5,4)).toEqual('Well done your final score is 78');
    expect(game.getFrame(7)).toEqual([6,4,7]);
  })
  test('knows if you got a strike on any frame', () => {

    game = new Bowling
    game.addScores(10,0);
    
    expect(game.getScore()).toEqual('10 + 2 rolls')
    expect(game.getFrame(1)).toEqual([10,'roll','roll'])
  })
  test('able to calculate scoring with a strike involved', () => {

    game = new Bowling
    game.addScores(10,0);
    game.addScores(1,9);
    game.addScores(2,2);
    game.addScores(2,2);
    game.addScores(3,3);
    game.addScores(6,3);
    game.addScores(6,4);
    game.addScores(7,1);
    game.addScores(9,0);

    expect(game.addScores(5,4)).toEqual('Well done your final score is 98');
    expect(game.getFrame(1)).toEqual([10,1,9]);
  })
  test('able to calculate scoring with a strikes involved', () => {

    game = new Bowling
    game.addScores(10,0);
    game.addScores(1,9);
    game.addScores(2,2);
    game.addScores(2,2);
    game.addScores(3,3);
    game.addScores(10,0);
    game.addScores(6,4);
    game.addScores(7,1);
    game.addScores(9,0);

    expect(game.addScores(5,4)).toEqual('Well done your final score is 109');
    expect(game.getFrame(6)).toEqual([10,6,4]);
  })
  test('able to calculate scoring with a back to back spares not including final frame', () => {

    game = new Bowling
    game.addScores(1,9);
    game.addScores(1,9);
    game.addScores(1,9);
    game.addScores(1,9);
    game.addScores(1,9);
    game.addScores(1,9);
    game.addScores(1,9);
    game.addScores(1,9);
    game.addScores(1,9);

    expect(game.addScores(5,4)).toEqual('Well done your final score is 112');
    expect(game.getFrame(6)).toEqual([1,9,1]);
  })
  test('able to calculate scoring with a back to back strikes', () => {

    game = new Bowling
    game.addScores(10,0)
    game.addScores(10,0)
    console.log(game.getFrame(1))
    expect(game.getScore()).toEqual('30 + 3 rolls');
    expect(game.getFrame(1)).toEqual([10,10,'roll']);
  })
  test('able to calculate scoring with a back to back strikes', () => {

    game = new Bowling
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    expect(game.getScore()).toEqual('60 + 3 rolls');
    expect(game.getFrame(2)).toEqual([10,10,'roll']);
  })
  test('able to calculate scoring with a back to back strikes', () => {

    game = new Bowling
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    expect(game.getScore()).toEqual('210 + 3 rolls');
    expect(game.getFrame(2)).toEqual([10,10,10]);
  })
  test('able to calculate scoring with a back to back strikes', () => {

    game = new Bowling
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(1,9)
    game.addScores(10,0)
    game.addScores(1,9)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(1,9)
    game.addScores(1,9);

    expect(game.addScores(5,4)).toEqual('Well done your final score is 177');
    expect(game.getFrame(1)).toEqual([10,10,1]);
    
  })
  test('able to calculate scoring with a back to back strikes', () => {

    game = new Bowling
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0);

    expect(game.addScores(5,4)).toEqual('Well done your final score is 263');
    expect(game.getFrame(1)).toEqual([10,10,10]);
    
  })
  test('final frame as a spare', () => {

    game = new Bowling
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(5,5)
    

    expect(game.addScores(5,5)).toEqual('Well done your final score is 270');
    expect(game.getFrame(1)).toEqual([10,10,10]);
    
  })
  test('final frame as a strike', () => {

    game = new Bowling
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    game.addScores(10,0)
    

    expect(game.addScores(10,10)).toEqual('Well done your final score is 300');
    expect(game.getFrame(1)).toEqual([10,10,10]);
    
  })
})