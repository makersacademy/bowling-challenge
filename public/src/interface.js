document.addEventListener('DOMContentLoaded', () => {
  const updateScore = () => {
    document.querySelector('#score').innerText = bowling.score();
  }
  
  
  const bowling = new Bowling();
  const frame = new Frame();

  const updateFrameScore = (selector, index) => {
    document.querySelector(selector).innerText = bowling.frameScores()[index] || 0;
  }
  
  document.querySelector('#zero').addEventListener('click', () => {
    frame.addRoll(0);
  });

  document.querySelector('#first').addEventListener('click', () => {
    frame.addRoll(1);
  });

  document.querySelector('#second').addEventListener('click', () => {
    frame.addRoll(2);
  });

  document.querySelector('#third').addEventListener('click', () => {
    frame.addRoll(3);
  });

  document.querySelector('#fourth').addEventListener('click', () => {
    frame.addRoll(4);
  });

  document.querySelector('#fifth').addEventListener('click', () => {
    frame.addRoll(5);
  });

  document.querySelector('#sixth').addEventListener('click', () => {
    frame.addRoll(6);
  });

  document.querySelector('#seventh').addEventListener('click', () => {
    frame.addRoll(7);
  });

  document.querySelector('#eigth').addEventListener('click', () => {
    frame.addRoll(8);
  });

  document.querySelector('#ninth').addEventListener('click', () => {
    frame.addRoll(9);
  });

  document.querySelector('#tenth').addEventListener('click', () => {
    frame.addRoll(10);
    bowling.addFrame(frame.latestFrame);
    updateScore();
    updateFrameScore(frame.interfaceFrames(), bowling.frames.length - 1);
  });

  document.querySelector('#submit').addEventListener('click', () => {
    bowling.addFrame(frame.latestFrame);
    updateScore();
    updateFrameScore(frame.interfaceFrames(), bowling.frames.length - 1);
  });
})