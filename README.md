
# Bowling Challenge
  =================
A bowling scorecard app., to help you simulate or keep score of the `snazzy` game of bowling.

<img width="711" alt="Screenshot 2019-11-25 at 04 04 55" src="https://user-images.githubusercontent.com/33905131/69512916-eeada300-0f3d-11ea-8829-71d32d21f1f0.png">

## User stories delivered:
```
    As an excited Bowling player
    I want to capture my score while bowling
    So that my scores can be calculated/ aggregated after each frame.
```
## Getting Started
* Fork this repo, then
* Clone to see project awesomeness

### Prerequisites
* Include all the jasmine files in the `lib` directory
* node_modules
* package-lock.json
* Include a reference to the js files in your SpecRunner.html

<img width="708" alt="Screenshot 2019-11-25 at 04 18 30" src="https://user-images.githubusercontent.com/33905131/69512956-0e44cb80-0f3e-11ea-909c-e9e76ae9ac64.png">


### Installing
* Fork the repo
* Clone to your local directory, then establish an upstream
* Include references to specific jscript files in SpecRunner.html (then open Specrunner file in the browser to see tests)
* Open BowlingInterface.html to see app.

## Running the tests
* Automated tests for this system were run using TDD & the Jasmine framework.

### End to end tests
The following tests were setup to establish a basis for playing one frame of the game.
```
should have a starting score of '0' zero
can increase the score by '1'
score cannot go over the value '10'
can decrease the score by '-1'
can calculate the subtotal score of a frame
```
<img width="717" alt="Screenshot 2019-11-25 at 04 44 01" src="https://user-images.githubusercontent.com/33905131/69513001-3b917980-0f3e-11ea-932f-5f1381c35cf6.png">

```
Example: The zero '0' allows for a gutter-game, with no scoring; and the subtotal holds the value per/each frame.
```
## Built With
* HTML
* JavaScript/ Jquery

## Authors

* **Kehinde Peter Olofinmoyin ** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to Luella Guesky's video in understanding the scoring in Bowling: https://www.youtube.com/watch?v=2w1MFocEPU0
* Shout to Shubs Virk, whose thermostat code I looked at to understand how to set limits and use the `throw` keyword: https://github.com/SHUBV92/thermostat/blob/master/spec/ThermostatSpec.js
