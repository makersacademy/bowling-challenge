document.addEventListener("DOMContentLoaded", () => {
  const updateScorecard = () => {
    document.querySelector("#yourscore").innerText = game.score; // this does give the total score after all the frames
  
  };
  
  const updateFrames = () => {
    document.querySelector("#yourrolls").innerText = game.rolls;
  };
  
  const game = new Game();
  updateScorecard();
  updateFrames();

    document.querySelector('#pinHit-1').addEventListener('click', () => { // event listener
      game.roll(1);
      updateFrames();
      updateScorecard();
    });

    document.querySelector('#pinHit-2').addEventListener('click', () => { // event listener
      game.roll(2);
      updateFrames();
      updateScorecard();
    });

    document.querySelector('#pinHit-3').addEventListener('click', () => { // event listener
      game.roll(3);
      updateFrames();
      updateScorecard();
    })

    document.querySelector('#pinHit-4').addEventListener('click', () => { // event listener
      game.roll(4);
      updateFrames();
      updateScorecard();
    });

    document.querySelector('#pinHit-5').addEventListener('click', () => { // event listener
      game.roll(5);
      updateFrames();
      updateScorecard();
    });

    document.querySelector('#pinHit-6').addEventListener('click', () => { // event listener
      game.roll(6);
      updateFrames();
      updateScorecard();
    });

    document.querySelector('#pinHit-7').addEventListener('click', () => { // event listener
      game.roll(7);
      updateFrames();
      updateScorecard();
    });

    document.querySelector('#pinHit-8').addEventListener('click', () => { // event listener
      game.roll(8);
      updateFrames();
      updateScorecard();
    });

    document.querySelector('#pinHit-9').addEventListener('click', () => { // event listener
      game.roll(9);
      updateFrames();
      updateScorecard();
    });

    document.querySelector('#pinHit-10').addEventListener('click', () => { // event listener
      game.roll(10);
      updateFrames();
      updateScorecard();
    });

  })