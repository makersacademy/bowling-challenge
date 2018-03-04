const game = new Game();
let frame = new Frame();
let i = 0;

$(document).ready(() => {
  const next = $('.next-frame');
  const pins = $('.pins');

  $('.begin button').click(function jQuery() {
    $(this).parent().addClass('hidden');
    $('.game').removeClass('hidden');
    $(next).addClass('hidden');
  });

  for (i; i <= 10; i++) {
    if (i === 0) {
      pins.append($(`<span data-id="${i}" class="pin-button">0</span>`));
    } else {
      pins.append($(`<span data-id="${i}" class="pin-button flaticon-bowling-pin" title="${i}"></span>`));
    }
  }

  let count = 0;
  $('.pin-button').click(function jQuery() {
    count += 1;
    let i = 0;

    const id = $(this).data('id');

    for (i; i < id; i++) {
      $('.pins .pin-button:not(.hidden)').last().addClass('hidden');
    }

    frame.roll(id);

    if (count === 1) {
      $('.first-roll').last().html(id);
    } else if (count === 2) {
      $('.second-roll').last().html(id);
    } else if (count === 3) {
      $('.third-roll').last().html(id);
    }

    if (game.frames.length < 9) {
      if (id === 10) {
        $(pins).addClass('hidden');
        $(next).removeClass('hidden');

        game.addFrame(frame);
        game.finalScore();
        $('.score span').html(game.totalScore);
        count = 0;
      }

      if (count === 2) {
        $(pins).addClass('hidden');
        $(next).removeClass('hidden');

        game.addFrame(frame);
        game.finalScore();
        $('.score span').html(game.totalScore);
        count = 0;
      }
    } else if (game.frames.length === 9) {
      if (count === 2 && frame.currentScore < 10) {
        $(pins).addClass('hidden');

        game.addFrame(frame);
        game.finalScore();
        $('.score span').html(game.totalScore);
        $('.game').addClass('hidden');

        $('.game-over').removeClass('hidden');
        $('.final-score').html(`${game.totalScore}`);

        if (game.totalScore === 0) {
          $('.gutter-game').removeClass('hidden');
        }
      } else if (count === 3) {
        $(pins).addClass('hidden');

        game.addFrame(frame);
        game.finalScore();
        $('.score span').html(game.totalScore);
        $('.game').addClass('hidden');

        $('.game-over').removeClass('hidden');
        $('.final-score').html(`${game.totalScore}`);

        if (game.totalScore === 300) {
          $('.perfect-game').removeClass('hidden');
        }
        count = 0;
      } else if (id === 10 || frame.currentScore === 10) {
        $('.pins .pin-button').removeClass('hidden');
      }
    }
  });

  $(next).click(function jQuery() {
    if (game.frames.length === 9) {
      frame = new Frame(10);
      const num = game.frames.length + 1;

      $('.frames').append($(`
        <article class="frame">
          <h4 id="frame-${num}">Frame ${num}</h4>
          <div class="rolls">
            <span class="first-roll"></span>
            <span class="second-roll"></span>
            <span class="third-roll"></span>
          </div>
        </article>
      `));
    } else {
      frame = new Frame();
      const num = game.frames.length + 1;

      $('.frames').append($(`
        <article class="frame">
          <h4 id="frame-${num}">Frame ${num}</h4>
          <div class="rolls">
            <span class="first-roll"></span>
            <span class="second-roll"></span>
          </div>
        </article>
      `));
    }

    $(pins).removeClass('hidden');
    $(this).addClass('hidden');
    $('.pins .pin-button').removeClass('hidden');
  });
});
