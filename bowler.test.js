const Bowler = require('./bowler');
const Frame = require('./frame');
const Roll = require('./roll');

describe("Bowler class", () => {
    it("Test Bowler class instantiation", () => {
      const bowler = new Bowler(1, "Donald Duck", [], 0, "TH'WHACKERS QUACKERS!", "Luck Ducky!", "OUT for a DUCK!", []);
      expect(bowler).toBeInstanceOf(Bowler);
    });

    it("Returns name", () => {
      const bowler = new Bowler(1, "Donald Duck", [], 0, "TH'WHACKERS QUACKERS!", "Luck Ducky!", "OUT for a DUCK!", []);
      expect(bowler.getName()).toEqual("Donald Duck");
    });
  
    it("Returns frames", () => {
      const roll1 = new Roll(1, 1, 1);
      const roll2 = new Roll(1, 2, 4); 
      const rolls = new Array(roll1, roll2);   
      const frame1 = new Frame(1, rolls, 2, 5, 0, 0, 0, "");  
      const frame2 = new Frame(2, rolls, 2, 10, 0, 0, 0, "");
      const frames = new Array(frame1, frame2);
      const bowler = new Bowler(1, "Donald Duck", frames, 10, "TH'WHACKERS QUACKERS!", "Luck Ducky!", "OUT for a DUCK!", []);
      expect(bowler.getFrames().length).toEqual(2);
    });
  
    it("Sets name", () => {
      const bowler = new Bowler(1, "Donald Duck", [], 0, "TH'WHACKERS QUACKERS!", "Luck Ducky!", "OUT for a DUCK!", []);
      bowler.setName("Minnie Mouse");
      expect(bowler.getName()).toEqual("Minnie Mouse");
    });
  
    it("Sets frames", () => {
      const bowler = new Bowler(1, "Donald Duck", [], 0, "TH'WHACKERS QUACKERS!", "Luck Ducky!", "OUT for a DUCK!", []);
      const roll1 = new Roll(1, 1, 1);
      const roll2 = new Roll(1, 2, 4); 
      const rolls = new Array(roll1, roll2);   
      const frame1 = new Frame(1, rolls, 2, 5, 0, 0, 0, "");  
      const frame2 = new Frame(2, rolls, 2, 10, 0, 0, 0, "");
      const frames = new Array(frame1, frame2);
      bowler.setFrames(frames);
      expect(bowler.getFrames()).toEqual(frames);
    });
});    

describe("addFrame method", () => {
    it("updates Bowler.bowlerTotal, updates Frame.totalScore, updates Bowler.frames", () => {
      const bowler = new Bowler(1, "Donald Duck", [], 0, "TH'WHACKERS QUACKERS!", "Luck Ducky!", "OUT for a DUCK!", []); 
      const roll1 = new Roll(1, 1, 1);
      const roll2 = new Roll(1, 2, 4); 
      const rolls = new Array(roll1, roll2);    
      const frame = new Frame(1, rolls, 2, 5, 0, 0, 0, ""); 
      expect(frame.getTotalScore()).toEqual(5); 
      const expectedFrames = new Array(frame); 
      bowler.addFrame(frame);  
      expect(bowler.getFrames()).toEqual(expectedFrames);
      expect(bowler.getBowlerTotal()).toEqual(5); 
    });
});       

describe("setupTheFuture method", () => {
  it("if 10/strike is scored, updates the frame to hold the bonus rolls for the future", () => {
    const bowler = new Bowler(1, "Donald Duck", [], 0, "TH'WHACKERS QUACKERS!", "Lucky Ducky!", "OUT for a DUCK!", []); 
    const roll = new Roll(1, 1, 10);
    //const roll2 = new Roll(1, 2, 9); 
    const rolls = new Array(roll);    
    const frame = new Frame(1, rolls, 1, 10, 0, 0, 0, ""); 
    bowler.setupTheFuture(frame);   
    expect(frame.getBonusFuture()).toEqual(2);  
    expect(frame.getMessage()).toEqual("TH'WHACKERS QUACKERS!"); 
  });

  it("if 10/spare is scored, updates the frame to hold the bonus rolls for the future", () => {
    const bowler = new Bowler(1, "Donald Duck", [], 0, "TH'WHACKERS QUACKERS!", "Lucky Ducky!", "OUT for a DUCK!", []); 
    const roll1 = new Roll(1, 1, 1);
    const roll2 = new Roll(1, 2, 9); 
    const rolls = new Array(roll1, roll2);    
    const frame = new Frame(1, rolls, 2, 10, 0, 0, 0, ""); 
    bowler.setupTheFuture(frame);   
    expect(frame.getBonusFuture()).toEqual(1);  
    expect(frame.getMessage()).toEqual('Lucky Ducky!'); 
  });
});       

describe("reconcileTheLast method", () => {
  it("One roll roll - if previoulsy have a bonus set up (SPARE), check/apply bonus due to prevous last frame", () => {
    const roll1 = new Roll(1, 1, 1);
    const roll2 = new Roll(2, 1, 9);
    const rolls = new Array(roll1, roll2);   
    const frame = new Frame(1, rolls, 2, 10, 0, 0, 0, "Lucky Ducky!"); 
    const frames = new Array(frame);  
    const bowler = new Bowler(1, "Donald Duck", frames, 10, "TH'WHACKERS QUACKERS!", "Lucky Ducky!", "OUT for a DUCK!", []); 

    const rolla = new Roll(1, 2, 1);
    //const rollb = new Roll(2, 2, 4);
    //const rollsa = new Array(rolla, rollb); 
    const rollsa = new Array(rolla);    
    const newFrame = new Frame(2, rollsa, 1, 10, 0, 1, 0, "");
    const expectedFrame = bowler.reconcileTheLast(newFrame, 1);
    console.log(`recTheLast bowler bowlerTotal: ${bowler.getBowlerTotal()}`); 
    
    console.log(`recTheLast bowler numOfROlls: ${bowler.getNumOfRolls}`); 
    console.log(`recTheLast bowler bowlerTotal: ${bowler.getBowlerTotal()}`); 
    expect(bowler.getBowlerTotal()).toEqual(11);
  });

  it("Two rolls - if previoulsy have a bonus set up (STRIKE), check/apply bonus due to prevous last frame", () => {
    const roll1 = new Roll(1, 1, 10);
    const roll2 = new Roll(2, 1, "-");
    const rolls = new Array(roll1, roll2);   
    const frame = new Frame(1, rolls, 1, 10, 2, 0, 0, "TH'WHACKERS QUACKERS!"); 
    const frames = new Array(frame);  
    const bowler = new Bowler(1, "Donald Duck", frames, 10, "TH'WHACKERS QUACKERS!", "Lucky Ducky!", "OUT for a DUCK!", []); 

    const rolla = new Roll(1, 2, 1);
    const rollsa = new Array(rolla);    
    const newFrameR1 = new Frame(2, rollsa, 1, 1, 0, 2, 0, "");
    const newFrameR2 = bowler.reconcileTheLast(newFrameR1, 1);

    const rollb = new Roll(2, 2, 4);
    newFrameR2.setNumOfRolls(newFrameR1.getNumOfRolls() + 1) 
    newFrameR2.setTotalScore(newFrameR1.getTotalScore() + 4); 
    newFrameR2.setRolls(newFrameR1.getRolls().push(rollb)); 
    const newFrameBon = bowler.reconcileTheLast(newFrameR2, 4); 
    expect(bowler.getBowlerTotal()).toEqual(15);
  });

});    

describe("bowl method", () => {
    it("set-up and update Frame details for each roll", () => {
      const rolls = new Array();  
      const frames = new Array();  
      const bowler = new Bowler(1, "Donald Duck", frames, 0, "TH'WHACKERS QUACKERS!", "Luck Ducky!", "OUT for a DUCK!", []); 
      const frameNum = 1;

      const firstFrame = new Frame(frameNum, rolls, 0, 0, 0, 0, 0, "");
      const retFrame1 = bowler.bowl(firstFrame, 1);
      const retFrame2 = bowler.bowl(retFrame1, 4);
      expect(retFrame2.getTotalScore()).toEqual(5); 
    });
});       
  
describe("play method", () => {
    it("controls the game, bowl by bowl", () => {
    //   const bowls = new Array();
      const bowls = [1,4,1,9,3,4]; 
      const frames = new Array();  
      const bowler = new Bowler(1, "Donald Duck", frames, 0, "TH'WHACKERS QUACKERS!", "Luck Ducky!", "OUT for a DUCK!", []); 
      const frameNum = 1;
      bowler.play(bowls);

    //   const firstFrame = new Frame(frameNum, rolls, 0, 0, 0, 0, 0, "");
    //   const retFrame1 = bowler.bowl(firstFrame, 1);
    //   const retFrame2 = bowler.bowl(retFrame1, 4);
      expect(bowler.getBowlerTotal()).toEqual(25); 
    });
});       
 
 