// file: BowlingScore.test.ts

import { BowlingScore } from "../../src/BowlingScore";


describe("BowlingScore", () =>{

  it("constructs", () =>{
    expect(new BowlingScore()).toBeInstanceOf(BowlingScore);
  });
  
  it("can add a frame", () =>{
    const game = new BowlingScore();
    game.addFrame(10);
    expect(game.getFrameArray().length).toBe(1);
  });

  it("can provide an accurate running total", () =>{
    const game = new BowlingScore();
    game.addFrame(10);
    expect(game.getRunningTotal()).toBe(10);
    game.addFrame(10);
    expect(game.getRunningTotal()).toBe(30);
  });

  it("can return an up to date record of all frames and their bonuses", () => {
    const game = new BowlingScore();
    for (let i = 0;i<9; i++) {
      game.addFrame(10); 
    }
    game.addFrame(10,10,10);
    let frames = game.getFrameArray();
    expect(frames[9].bonus).toBe(10);
  });
})