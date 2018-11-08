# Bowling Scorecard
Welcome to the bowling scorecard. Check out the instructions below to find out how to play!

### How to Play
* Clone this repo using the command `git clone https://github.com/Caitlin-cooling/bowling-challenge.git`
* Run the `scorecard.html` file in your chosen browser
* Click the buttons to register the roll that you made
* Note that each frame takes 2 rolls these rolls will be shown in your scorecard. THe left is the first roll and the right is the second
* A frame total is calculated once you have inputed your 2 rolls
* A running total will be calculated after that
* Once you have played 10 rolls, the game will end

### Running the Tests
Tests are written using jasmine. To run the test please open the `SpecRunner.html` file in your chosen browser.

### Dependancies
This program is written using JavaScript, jQuery, HTML, CSS and Jasmine as the testing framework.

### Linting
I have been using jslint as a linter, which can be installed using the command `npm install -g jshint` and run using `jshint src/frame.js`

### Approach to Solving this Kata
I kept a methodical approach when solving this kata. I first created the JavaScript for a basic game. Then created an interface using HTML and jQuery. I then resolved edge cases around this for example, keeping track of the frame number, but telling the user that the  game is over after their 10th roll.

After this is did some CSS to create a scorecard and style the interface.

I test drove the JavaScript in this program using Jasmine.
