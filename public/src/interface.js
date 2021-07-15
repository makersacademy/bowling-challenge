document.addEventListener('DOMContentLoaded', () => {
  const updateScore = () => {
    document.querySelector('#score').innerText = bowling.score();
  }
  
  const bowling = new Bowling();
  const frame = new Frame();

  const updatingFrames = () => {
    bowling.interfaceFrames().map((frame, index) => {
      document.querySelector(frame).innerText = bowling.frameScores()[index] || "";
    })
  }

  const updateFrameAndAddScore = () => {
    bowling.addFrame(frame.latestFrame);
    updateScore();
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
 })