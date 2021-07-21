document.addEventListener('DOMContentLoaded', () => {
  const updateScore = () => {
    document.querySelector('#score').innerText = bowling.score();
  }

  const interfaceRolls = ['#roll1', '#roll2', '#roll3', '#roll4', '#roll5', '#roll6', '#roll7', 
  '#roll8', '#roll9', '#roll10', '#roll11', '#roll12', '#roll13', '#roll14', '#roll15', 
  '#roll16', '#roll17', '#roll18', '#roll19', '#roll20'];
  
  const bowling = new Bowling();
  const frame = new Frame();

  const updatingFrames = () => {
      bowling.frames.map((frame) => {
        document.querySelector(bowling.interfaceFrames()[bowling.frames.length - 1]).innerText = bowling.frameScores().reduce((n, i) => n += i);
      })
  }

  const updatingRolls = () => {
    frame.interfaceRolls().map((roll, index) => {
      document.querySelector(roll).innerText = frame.rolls[index] || "";
    })
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
  });

  document.querySelector('#first').addEventListener('click', () => {
    frame.addRoll(1);
    updateFrameAndAddScore();
  });

  document.querySelector('#second').addEventListener('click', () => {
    frame.addRoll(2);
    updateFrameAndAddScore();
  });

  document.querySelector('#third').addEventListener('click', () => {
    frame.addRoll(3);
    updateFrameAndAddScore();
  });

  document.querySelector('#fourth').addEventListener('click', () => {
    frame.addRoll(4);
    updateFrameAndAddScore();
  });

  document.querySelector('#fifth').addEventListener('click', () => {
    frame.addRoll(5);
    updateFrameAndAddScore();
  });

  document.querySelector('#sixth').addEventListener('click', () => {
    frame.addRoll(6);
    updateFrameAndAddScore();
  });

  document.querySelector('#seventh').addEventListener('click', () => {
    frame.addRoll(7);
    updateFrameAndAddScore();
  });

  document.querySelector('#eigth').addEventListener('click', () => {
    frame.addRoll(8);
    updateFrameAndAddScore();
  });

  document.querySelector('#ninth').addEventListener('click', () => {
    frame.addRoll(9);
    updateFrameAndAddScore();
  });

  document.querySelector('#tenth').addEventListener('click', () => {
    frame.addRoll(10);
    updateFrameAndAddScore();
  });

  document.getElementById('reset').addEventListener('click', () => {
    bowling.endGame();
    location.reload();
  });
 })