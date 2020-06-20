'use strict';

$(document).ready(function() {
  const bowling = new Bowling();

  $('.pins').click(function() {
    let num = $(this).val();
    let frame = bowling.currentFrame();
    let score = parseInt(num);
    console.log(bowling.currentScore());
    bowling.bowl(score);
    $(`#${frame} .left`).text(num);
  });
})


/* <div class="frame" id="0">
        <div class="frame-number">1</div>
          <div class="top">
            <div class="left" id="0"></div>
            <div class="right" id="0"></div>
          </div>
          <div class="bottom" id="0"></div>
      </div> */