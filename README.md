# Bowling Scorecard
Welcome to the bowling scorecard. Check out the instructions below to find out how to play!

### How to Play
* Clone this repo using the command `git clone https://github.com/Caitlin-cooling/bowling-challenge.git`
* `cd bowling-challenge`
* Run the `scorecard.html` file in your chosen browser
* Click the buttons to register the roll that you made. After your first roll the unavailable buttons for your second roll will be removed. Then select your second roll to complete the frame
* Your 2 rolls will be shown in your scorecard along with the frame total score. The left is the first roll and the right is the second. The number on the line below is your frame score
* A frame total is calculated once you have inputed your 2 rolls. If the frame was a strike or a spare, you bonus points will be added after the next frame is complete

![Alt text](/assets/bowling-game.png)

* A running total will be calculated after that
* Once you have played 10 rolls, the game will end

### Running the Tests
Tests are written using jasmine. To run the test please open the `SpecRunner.html` file in your chosen browser.

![alt text](/assets/tests.png)

### Dependancies
This program is written using JavaScript, jQuery, HTML, CSS and Jasmine as the testing framework.

### Linting
I have been using jslint as a linter, which can be installed using the command `npm install -g jshint` and run using `jshint src/frame.js`

### Approach to Solving this Kata
I kept a methodical approach when solving this kata. I first created the JavaScript for a basic game. Then created an interface using HTML and jQuery. I then resolved edge cases around this for example, keeping track of the frame number, but telling the user that the  game is over after their 10th roll and bonus points for a strike or a spare.

After this I did some CSS to create a scorecard and style the interface. Next, I created the logic for the edge cases; when a user rolled a spare or a strike.

I test drove the JavaScript in this program using Jasmine.

I decided that to get the most out if this exercise, I wanted to focus on creating a product that used most of the rules of bowling, but also had a user friendly interface. This allowed me to practise JavaScript, jQuery, CSS and HTML.

### Known issues
Currently if you input a strike, the game is still expecting a second roll input. As the maximum score is 10, the only possibility is for this to be a gutter ball. Please note that this does not effect your score, and you will still receive bonus points for a strike.

Currently if your 10th roll is a strike or a spare you will not receive bonus points.
