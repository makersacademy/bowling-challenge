describe(`Jasmine tests with Jasmine-jQuery`, () => {
  it(`shoud allow to use jQuery`, () => {
    setFixtures(`<div id="fixture" class="fixture-class">fixture content</div>`);

    expect($(`#fixture`)).toHaveText(`fixture content`);
    expect(jQuery(`#fixture`)).toHaveClass(`fixture-class`);
  });
});

describe(`Jasmine tests with Jasmine-jQuery and Karma-jQuery`, () => {
  it(`shoud allow to use a specific version jQuery`, () => {

    // expect($.fn.jquery).toBe('1.8.3');
    // $.fn.jquery; // 1.8.3 => version installed by Karma-jQuery
    // jQuery.fn.jquery; // 1.8.3 => version installed by Karma-jQuery
 
    expect($j.fn.jquery).toBe(`3.4.1`);
    $j.fn.jquery; // 3.2.1 => version installed by @metahub/karma-jasmine-jquery
    jasmineJQuery.fn.jquery; // 3.2.1 => version installed by @metahub/karma-jasmine-jquery
  });
});