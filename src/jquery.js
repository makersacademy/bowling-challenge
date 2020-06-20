'use strict';

$(document).ready(function() {
  const bowling = new Bowling();

  $('.pins').click(function() {
    let num = $(this).val()
    console.log(num)
});
})


/* <div class="frame" id="1">
        <div class="frame-number">1</div>
          <div class="top">
            <div class="left" id="1"></div>
            <div class="right" id="1"></div>
          </div>
          <div class="bottom" id="1"></div>
      </div> */