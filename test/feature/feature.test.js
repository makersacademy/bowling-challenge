const Game = require('../../lib/game')

describe('feature tests', () => {
  test('perfect game', () => {
    const bowling = new Game;
    expect(bowling.getCurrentFrame()).toBe(0);
    expect(bowling.calculateScore()).toBe(0);

    bowling.roll(10);
    bowling.checkFrame();
    expect(bowling.getCurrentFrame()).toBe(1);
    expect(bowling.calculateScore()).toBe(0);

    bowling.roll(10);
    expect(bowling.calculateScore()).toBe(0);
    
    bowling.checkFrame();
    expect(bowling.getCurrentFrame()).toBe(2);
    
    bowling.roll(10);
    console.log(bowling.frames[0].rolls);
    expect(bowling.calculateScore()).toBe(30);
    bowling.checkFrame();
    expect(bowling.getCurrentFrame()).toBe(3);

    bowling.roll(10);
    expect(bowling.calculateScore()).toBe(60);
    bowling.checkFrame();
    expect(bowling.getCurrentFrame()).toBe(4);
    
    bowling.roll(10);
    expect(bowling.calculateScore()).toBe(90);
    bowling.checkFrame();
    expect(bowling.getCurrentFrame()).toBe(5);

    console.log('score is ' + bowling.calculateScore());
    
    bowling.roll(10);
    expect(bowling.calculateScore()).toBe(120);
    bowling.checkFrame();
    expect(bowling.getCurrentFrame()).toBe(6);

    console.log('score is ' + bowling.calculateScore());
    
    bowling.roll(10);
    expect(bowling.calculateScore()).toBe(150);
    bowling.checkFrame();
    expect(bowling.getCurrentFrame()).toBe(7);

    console.log('score is ' + bowling.calculateScore());
    
    bowling.roll(10);
    expect(bowling.calculateScore()).toBe(180);
    bowling.checkFrame();
    expect(bowling.getCurrentFrame()).toBe(8);

    console.log('score is ' + bowling.calculateScore());
    
    bowling.roll(10);
    expect(bowling.calculateScore()).toBe(210);
    bowling.checkFrame();
    expect(bowling.getCurrentFrame()).toBe(9);

    console.log('score is ' + bowling.calculateScore());
    
    bowling.roll(10);
    expect(bowling.calculateScore()).toBe(240);
    bowling.roll(10);

    console.log('score is ' + bowling.calculateScore());
    expect(bowling.calculateScore()).toBe(270);

    bowling.roll(10);

    console.log('score is ' + bowling.calculateScore());
    expect(bowling.calculateScore()).toBe(300);


  });
});