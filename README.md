
Bowling Challenge
=================

[View app on Heroku](https://serene-island-1376.herokuapp.com/)

![](/images/screenshot.png)

## Task: 

Count and sum the scores of a bowling game for one player (in JavaScript).

Optional Extra: Create a nice interactive animated interface with jQuery.

## Tools:

Testing: Jasmine<br>
Application Code: Javascript, JQuery, HTML and CSS<br>
Other: PHP

## How To Run:

You can follow the Heroku link at the top of the README for a live version of this app, or type open src/home.html at the application's root folder.
You can run the tests locally by typing open SpecRunner.html in the application's root folder.

Tests:

	Game
	 should start on frame 1
	 
	 adds scores correctly
	  all 3s
	  all gutterballs
	  after a strike
	  after two strikes
	  after three strikes
	  after a spare
	  after two spares in a row
	 
	 adds bonus rounds correctly
	  spare in 10th round
	  spare in 10th round then 10
	  strike in 10th round
	  strike in 10th and 11th round
	  strike in 10th and 11th round then 10
	  perfect game (12 strikes)
	 
	 knows when game is over
	  after 10th round if strike or spare not rolled
	  after 11th round if spare rolled in 10th
	  after 12th round if strike rolled in 10th and 11th

	 knows when game is still playing
	  after 10th round if spare rolled in 10th
	  after 11th round if strike rolled in 10th and 11th

	Frame
	 should start with default of 2 rolls remaining
	 
	 knows when the frame is in progress
	  on a new frame
	  after a first roll that is not a strike
	 
	 knows when the frame has ended
	  after two rolls
	  after a strike
	  knows the total score
	  after two rolls
	  after a strikes

## File Structure:

	.
	├── README.md
	├── SpecRunner.html
	├── images
	│   └── example_ten_pin_scoring.png
	├── index.php
	├── lib
	│   └── jasmine-2.3.4
	│       ├── boot.js
	│       ├── console.js
	│       ├── jasmine-html.js
	│       ├── jasmine.css
	│       ├── jasmine.js
	│       └── jasmine_favicon.png
	├── spec
	│   ├── FrameSpec.js
	│   └── GameSpec.js
	└── src
	    ├── home.html
	    ├── scripts
	    │   ├── Frame.js
	    │   ├── Game.js
	    │   ├── interface.js
	    │   └── jquery-2.1.4.min.js
	    └── style
	        └── main.css
