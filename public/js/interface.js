// const game = new Game();
const frame = new Frame();

$(document).ready(() => {
  // const pins = $('#pins');
  // pins.text(frame.pins);
  // Create one button per number and clicking is a closure to Frame-Roll

  const nextFrame = $('#next-frame');
  nextFrame.click(() => {
    $('.frame-box:hidden:first').show();
  });

  const pins = $('#pins');
  pins.click(() => {
    const pin = $(pins).attr('id');
    console.log(pin);
    frame.roll(pin);
  });
});
