#Bowling Challenge
A program that scores a game of bowling using Javascript, HTML and JQuery

#Getting Started
Fork this repo from github
Clone into personal device
Type 'open SpecRunner.html' in your terminal to view test results
Type 'index.html' in your terminal to view the program in your browser

#Prerequisites
The below need to be installed to run the program:

- Jquery (https://jquery.com/download/)
- Node (https://nodejs.org/en/download/)

#Running the tests
The testing framework for this program is jasmine
To run the tests type 'open SpecRunner.html' in your terminal to view the test results
The tests test the frame and scorecard functions return the values expected when methods are called on them
e.g. scorecardSpec-test-1 tests that when you create the variable scorecard which is a new Scorecard function it has a default this.frames which is an empty array

#Deployment
To deploy the program type 'index.html' in your terminal and enter your score for each roll via pressing the buttons that correspond to the score
You will only see the frame's individual scores once the whole frame has been rolled
A strike is not summed until the next frame is complete (whole frame is the bonus)
A spare is not summed until the next frame is complete (1st roll is the bonus)
If you score a strike or spare in your 10th frame, currently you do not get any bonus and the score is summed automatically

#Authors
Anouska Hopkins 
