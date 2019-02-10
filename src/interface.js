// document.addEventListener("DOMContentLoaded", function(){
  const scoreCard = new ScoreCard();
  const displayScore = document.getElementById('display-score')

  const handleSubmit = (e) => {
    e.preventDefault();
    const one = Number(e.currentTarget.getElementsByClassName("roll1")[0].value);
    const two = Number(e.currentTarget.getElementsByClassName("roll2")[0].value);
    let three = 0;
    if (e.currentTarget.querySelector('.roll3') !== null) {
      three = Number(e.currentTarget.getElementsByClassName("roll3")[0].value);
    }
    checkIfStrike(e, one, two);
    scoreCard.recordScore(one, two, three);    
    showScore();
  }

  function checkIfStrike(e, one, two){
    if(Number(one) === 10 && Number(two) > 0 && e.currentTarget.querySelector('.roll3') === null){
      alert('error');
    } 
  }

  function showScore(){
    if(!isNaN(scoreCard.experiment())){
      displayScore.textContent = `Total Score: ${scoreCard.experiment()}`;
    }
  }

  const frame1 = document.getElementById('frame1');
  const frame2 = document.getElementById('frame2');
  const frame3 = document.getElementById('frame3');
  const frame4 = document.getElementById('frame4');
  const frame5 = document.getElementById('frame5');
  const frame6 = document.getElementById('frame6');
  const frame7 = document.getElementById('frame7');
  const frame8 = document.getElementById('frame8');
  const frame9 = document.getElementById('frame9');
  const frame10 = document.getElementById('frame10');

  const frames = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10];
  frames.forEach(frame => frame.addEventListener('submit', handleSubmit));

// });
