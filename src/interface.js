
$(document).ready(function() {
  const bowlingMin = new BowlingMin;

  const optionListCreate = (element, startValue) => {
    $('<option>').val('0').text('0').appendTo(element);

    for(i = 1; i <= (9 - Number(startValue)); i++) {
      $('<option>').val(`${i}`).text(`${i}`).appendTo(element);
    };
    if (startValue === 0) {
      $('<option>').val('X').text('X').appendTo(element);
    } else {
      $('<option>').val('/').text('/').appendTo(element);
    };
    $(element).addClass('reveal');
    $(element).removeClass('hide');
    $(element).val("");

    $(element).change(() => {
      $(element).trigger("updateComplete");
    });

    $(element).bind("updateComplete", () => {
      activateNextElement('#' + $(this).prop('activeElement').id);
    });
  };

  const updateFrameScore = (framesArray) => {
    if (framesArray.length > 0) {
      let gScore = 0;
      for (i=0; i <= framesArray.length - 1; i++) {
        $('#fScore' + i).text(framesArray[i].frameScore);
        gScore += framesArray[i].frameScore;
        if (!($('#fScore' + i).text() === '')) {
          $('#gScore' + i).text(gScore);
          if ($('#roll' + i + '1').val() === 'X') {
            $('#notes' + i).text('STRIKE!  with ' + (framesArray[i].frameScore - 10) + ' bonus points!');
          };
          if ($('#roll' + i + '2').val() === '/') {
            $('#notes' + i).text('Spare!  with ' + (framesArray[i].frameScore - 10) + ' bonus points!');
          };
          if (($('#roll' + i + '1').val() === '0') && ($('#roll' + i + '2').val() === '0')) {
            $('#notes' + i).text('Bad Luck! ');
          };
          if (gScore === 300) {
            $('#notes' + i).text('PERFECT GAME ... Congratulations!!!! ');
          };
          if (gScore === 0 && i === 9) {
            $('#notes' + i).text('Really Bad Luck! ... a Gutter Game! ');
          };
        };
      };
    };
  };

  const activateNextElement = (currentElement) => {
    let newElement;

    $(currentElement).prop('disabled', true);

    updateFrameScore(bowlingMin.pinsAdd($(currentElement).val()));

    if (/\d(1)/.test(currentElement)) {
      if ($(currentElement).val()  === 'X') {
        if (/9/.test(currentElement)) {
          newElement = currentElement.replace(/(\d)(1)/, (fullMatch, i, n) => { return i + (Number(n) + 1);});
        } else {
          newElement = currentElement.replace(/(\d)(1)/, (fullMatch, i, n) => { return (Number(i) + 1) + '1';});
        };

        optionListCreate(newElement, 0);
      } else {
        newElement = currentElement.replace(/(\d)(1)/, (fullMatch, i, n) => { return i + (Number(n) + 1);});

        optionListCreate(newElement, $(currentElement).val());
      };

    } else {
      if (/9/.test(currentElement)) {
        if ((/92/.test(currentElement)) && ((/\/|X/.test($('#roll92').val())) || (/X/.test($('#roll91').val())))) {
          newElement = currentElement.replace(/(\d)(\d)/, (fullMatch, i, n) => { return i + (Number(n) + 1);});

          optionListCreate(newElement, 0);
        };

      } else {
        newElement = currentElement.replace(/(\d)(\d)/, (fullMatch, i, n) => { return (Number(i) + 1) + '1';});

        optionListCreate(newElement, 0);
      };
    };
  };

  optionListCreate('#roll01', 0);
  console.log($('table tr'));
});
