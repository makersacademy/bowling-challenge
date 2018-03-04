const game = new Game();
const frame = new Frame();
let i = 0;

$(document).ready(() => {
  const nextFrame = $('#next-frame');
  const pins = $('.pins');

  $('.begin button').click(() => {
    $(this).parent().addClass('hidden');
    $('.game').removeClass('hidden');
  });

  for (i; i <= 10; i++) {
    if (i === 0) {
      pins.append($(`<span data-id="${i}" class="pin-button">0</span>`));
    } else {
      pins.append($(`<span data-id="${i}" class="pin-button flaticon-bowling-pin"></span>`));
    }
  }

  let count = 0;
  $('.pin-button'.click(() => {
    count += 1
    const id = $(this).data('id');

    for (i; i < id; i++) {
      $('.pins .pin-button:not(.hidden)').last().addClass('hidden');
    }

    frame.roll(id);
  });
});
