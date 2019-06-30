
# Bowling Challenge

## Description

* Solution to the Makers bowling challenge.

## How to Use

### How to Install

### How to Run

* Open index.html in a browser.
* Run the code from the javascript console:

```javascript
var scorecard = new Scorecard;
scorecard.getRunningTotal();
> 0
scorecard.updateScore(4);
scorecard.getRunningTotal();
> 4
```

## Testing

* To run the feature and unit tests open SpecRunner.html in a browser.
* To run eslint:

```console
~/node_modules/eslint/bin/eslint.js ./jasmine/src/Scorecard.js
```

## Notes on Solving the Challenge

### Work Still to Do

* There is a lot of repitition in the tests, which should be refactored.
* Each frame is represented by a frame object literal, which gives rise to a lot of repitition in the code. I would like to move this to a new object e.g. Frame.
* Some of the methods are too long and the conditionals need to be refactored.
