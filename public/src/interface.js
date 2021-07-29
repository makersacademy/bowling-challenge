document.addEventListener('DOMContentLoaded', () => {
  const updateScore = () => {
    document.querySelector('#score').innerText = bowling.score();
  }

  const interfaceRolls = ['#roll1', '#roll2', '#roll3', '#roll4', '#roll5', '#roll6', '#roll7', 
  '#roll8', '#roll9', '#roll10', '#roll11', '#roll12', '#roll13', '#roll14', '#roll15', 
  '#roll16', '#roll17', '#roll18', '#roll19', '#roll20'];

  let index = 0

  const bowling = new Bowling();
  const frame = new Frame();

  const updatingFrames = () => {
      bowling.frames.map((frame) => {
        document.querySelector(bowling.interfaceFrames()[bowling.frames.length - 1]).innerText = bowling.frameScores().reduce((n, i) => n += i);
      })
  }

  const updatingRolls = () => {
    if (frame.rolls[index - 1] === 10) {
        document.querySelector(interfaceRolls[index]).remove();
        interfaceRolls.splice(index, 1);
        document.querySelector(interfaceRolls[index]).innerText = frame.rolls[index] || "";
      } else {
      document.querySelector(interfaceRolls[index]).innerText = frame.rolls[index] || "";
      }
  }

  const updateFrameAndAddScore = () => {
    bowling.addFrame(frame.latestFrame);
    updateScore();
    updatingRolls();
    updatingFrames();
  }
  
  document.querySelector('#zero').addEventListener('click', () => {
    frame.addRoll(0);
    updateFrameAndAddScore();
    index += 1
  });

  document.querySelector('#first').addEventListener('click', () => {
    frame.addRoll(1);
    updateFrameAndAddScore();
    index += 1
  });

  document.querySelector('#second').addEventListener('click', () => {
    frame.addRoll(2);
    updateFrameAndAddScore();
    index += 1
  });

  document.querySelector('#third').addEventListener('click', () => {
    frame.addRoll(3);
    updateFrameAndAddScore();
    index += 1
  });

  document.querySelector('#fourth').addEventListener('click', () => {
    frame.addRoll(4);
    updateFrameAndAddScore();
    index += 1
  });

  document.querySelector('#fifth').addEventListener('click', () => {
    frame.addRoll(5);
    updateFrameAndAddScore();
    index += 1
  });

  document.querySelector('#sixth').addEventListener('click', () => {
    frame.addRoll(6);
    updateFrameAndAddScore();
    index += 1
  });

  document.querySelector('#seventh').addEventListener('click', () => {
    frame.addRoll(7);
    updateFrameAndAddScore();
    index += 1
  });

  document.querySelector('#eigth').addEventListener('click', () => {
    frame.addRoll(8);
    updateFrameAndAddScore();
    index += 1
  });

  document.querySelector('#ninth').addEventListener('click', () => {
    frame.addRoll(9);
    updateFrameAndAddScore();
    index += 1
  });

  document.querySelector('#tenth').addEventListener('click', () => {
    frame.addRoll(10);
    updateFrameAndAddScore();
    index += 1
  });

  document.getElementById('reset').addEventListener('click', () => {
    bowling.endGame();
    location.reload();
  });
 })