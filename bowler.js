
const Frame = require('./frame');
const Roll = require('./roll');

class Bowler{   

  constructor(id, name, frames, bowlerTotal, strikeMsg, spareMsg, noScoreMsg){
    this.id = id; 
    this.name = name;
    this.frames = frames; 
    this.bowlerTotal = bowlerTotal;
    this.strikeMsg = strikeMsg;
    this.spareMsg = spareMsg;
    this.noScoreMsg = noScoreMsg;
  }

  bowl(frame, skittlesDown){
    let rollId = frame.getRolls().length + 1;
    frame.setNumOfRolls(frame.getNumOfRolls() + 1);
    frame.setTotalScore(frame.getTotalScore() + skittlesDown);
    let roll = new Roll(rollId, frame.getId(), skittlesDown);
    let rolls = frame.getRolls();
    rolls.push(roll);
    frame.setRolls(rolls);

    //reconcile any bonus rolls for previous frames 
    this.reconcileThePast(frame, skittlesDown);
    this.reconcileTheLast(frame, skittlesDown);

    //setup bonus rolls to be applied after future frames/rolls
    if (frame.getTotalScore() == 10 && frame.getId() <= 10){
        this.setupTheFuture(frame);
    }
    if (frame.getNumOfRolls() == 2 && frame.getTotalScore() == 0 && frame.getId() <= 10){
        frame.setMessage(this.getNoScoreMsg());
    }
    return frame;
  }

  addFrame(frame) {
    this.setBowlerTotal(this.getBowlerTotal() + frame.getTotalScore());  
    frame.setTotalScore(this.getBowlerTotal());
    this.frames.push(frame);
    return frame;
  }

  setupTheFuture(frame) {      
    if (frame.getNumOfRolls() == 1) {
      frame.setBonusFuture(2); 
      frame.setMessage(this.getStrikeMsg());
    } else {
      frame.setBonusFuture(1); 
      frame.setMessage(this.getSpareMsg()); 
    }
    return frame;
  }

  reconcileThePast(frame, skittlesDown) { 
    if (frame.getBonusPast() > 0) {
      let lastFrame = this.frames[this.frames.length - 1];
      let pastFrame = this.frames[this.frames.length - 2];

      pastFrame.setTotalScore(pastFrame.getTotalScore() + skittlesDown);
      pastFrame.setBonusLast(pastFrame.getBonusLast() - 1);

      let framesMinusTwo = this.frames.slice(0, -2); 
      framesMinusTwo.push(pastFrame);
      framesMinusTwo.push(lastFrame);
      this.setFrames(framesMinusTwo);

      this.setBowlerTotal(this.getBowlerTotal() + skittlesDown);
      frame.setBonusPast(frame.getBonusPast() - 1);
      return frame;
    }
  }

  reconcileTheLast(frame, skittlesDown) { 
    if (frame.getBonusLast() > 0) {
      let lastFrame = this.frames[this.frames.length - 1];
      lastFrame.setTotalScore(lastFrame.getTotalScore() + skittlesDown);
      lastFrame.setBonusLast(lastFrame.getBonusLast() - 1);

      let framesMinusOne = this.frames.slice(0, -1); 
      framesMinusOne.push(lastFrame);
      this.setFrames(framesMinusOne);

      this.setBowlerTotal(this.getBowlerTotal() + skittlesDown);
      frame.setBonusLast(frame.getBonusLast() - 1);
      return frame;
    }
  }

  play(bowls) { 
    let frameId = 0;
    let bowlInd = 0;  
    let rolls = new Array();  
    let frame = new Frame(1, rolls, 0, 0, 0, 0, 0, "");
    frameId++;
    while (bowlInd < bowls.length && frameId <= 10){
        while (frame.getNumOfRolls() < 2 && frame.getTotalScore() < 10 && bowlInd < bowls.length ){
          this.bowl(frame, bowls[bowlInd]);
          bowlInd++;   
        } 
        if (frame.getRolls().length == 1 && frame.getTotalScore() == 10){
          // Dummy second roll for Strike
          let roll2 = new Roll(2, frame.getId(), "-");
          frame.getRolls().push(roll2);    
        }

        if (frame.getId() < 10){           
            this.addFrame(frame);
        } else {
            while (bowlInd < bowls.length){  // allow extra rolls in frame 10 if required    
              this.bowl(frame, bowls[bowlInd]);
              bowlInd++;      
            }
            this.addFrame(frame);
        }

        //Set up next frame
        frameId = frame.getId() + 1;
        rolls = new Array(); 
        // move any outstanding bonus rolls (not yet taken) to the next frame 
        const bonusFuture = frame.getBonusFuture(); // we don't need this I don't think
        const bonusPast = frame.getBonusLast();
        const bonusLast = frame.getBonusFuture(); 
        frame = new Frame(frameId, rolls, 0, 0, 0, bonusLast, bonusPast, "");     
    }
 
  }

  showScoreCard(bowls) {
    console.log(``); 
    console.log(`Hello ${bowler.getName()}! here is your score card!`); 
    console.log(``); 
    console.log(`Scores [${bowls}]`); 
    console.log(``);  
    let results = bowler.getFrames(); 
    let i = 0;
    let j = 0;
    for (i = 0; i < results.length; i++) {
        let fid = results[i].getId();
        let score = results[i].getTotalScore(); 
        let rolls = results[i].getRolls();
        let frameMsg = results[i].getMessage();
        for (j = 0; j < rolls.length; j++) {
          let rid = rolls[j].getId();
          let rollScore = rolls[j].getScore();
          if (j == 0) {
            console.log(`Frame: ${fid}    Roll: ${rid}      ${rollScore}       Total Frame Score: ${score}     ${frameMsg}`); 
          } 
          else {
            console.log(`Frame: ${fid}    Roll: ${rid}      ${rollScore}`); 
          }
        }
    } 
    console.log(``); 
    console.log(`The Player Total is: ${bowler.getBowlerTotal()}`); 
    console.log(``); 
  }

  // getters
  getId(){
    return this.id;
  } 

  getName(){
    return this.name;
  } 

  getFrames(){
    return this.frames;
  } 

  getBowlerTotal(){
    return this.bowlerTotal;
  } 

  getStrikeMsg(){
    return this.strikeMsg;
  } 

  getSpareMsg(){
    return this.spareMsg;
  } 

  getNoScoreMsg(){
    return this.noScoreMsg;
  } 

  getBowls(){
    return this.bowls;
  } 

  // setters
  setId(id){
    this.id = id;
  }

  setName(name){
    this.name = name;
  }

  setFrames(frames){
    this.frames = frames;
  }

  setBowlerTotal(total){
    this.bowlerTotal = total; 
  }

  setStrikeMsg(msg){
    this.strikeMsg = msg;
  } 

  setSpareMsg(msg){
    this.spareMsg = msg;
  } 

  setNoScoreMsg(msg){
    this.noScoreMsg = msg;
  } 

  setBowls(bowls){
    this.bowls = bowls;
  } 

}  

// Example game rolls:
// bowls = [1,4,1,9,3,4] // should be 25
// bowls = [1,4,10,3,4] // should be 29
// bowls = [1,4,4,5,6,4,5,5,10,0,1]; // should be 61
// bowls = [10,10,10,10,10,10,10,10,10,10,10,10] // should be MAX? 300 :-)
// bowls = [1,4,10,10,2,4]// should be 29
// bowls = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] // gutter game - ZERO
// bowls = [0,1,4,5,3,7,0,0,4,5,5,2,10,9,1,0,0,7,0] // should be 73?
// bowls = [6,3,4,1,5,3,10,9,1,10,6,1,2,2,0,0,9,1,9] // should be 109
//bowls = [1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,10,6,4] // should be 143
bowls = [1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6] // should be 113? 

let frames = new Array();
let bowler = new Bowler(1, 'Donald Duck', frames, 0, "TH'WACKERS QUACKERS!", "Lucky Ducky!", "OUT for a DUCK!");
bowler.play(bowls);
bowler.showScoreCard(bowls);

module.exports = Bowler; 
