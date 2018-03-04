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
      if (count === 3) {
        $(pins).addClass('hidden');

        game.addFrame(frame);
        game.finalScore();
        $('.score span').html(game.totalScore);
        count = 0;
      } else if (id === 10) {
        $('.pins .pin-button').removeClass('hidden');
      }
    }
  });

  $(next).click(function jQuery() {
    if (game.frames.length === 9) {
      frame = new Frame(10);
    } else {
      frame = new Frame();
    }

    $(pins).removeClass('hidden');
    $(this).addClass('hidden');
    $('.pins .pin-button').removeClass('hidden');
  });
});
