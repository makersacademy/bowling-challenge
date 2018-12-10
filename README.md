
Bowling Challenge
=================

Installation:
----------
* clone repo with `git clone https://github.com/zombie9/bowling-challenge.git`
* change into the directory with `cd bowling-challenge`
* to view tests and run in the console, open `SpecRunner.html` in a browser

Instructions
----------
* start with `g = new Game` in your browser's console
* bowl with `g.frames[g.currentFrame].bowl(pins);` where pins is the number of pins knocked down
* repeat if less than 10 are knocked down
* move to the next frame with `g.nextFrame();` and continue for a total of 10 frames
* to see your score at any point enter `g.toyalScore;`

Notes
-----
* tests to date are passing
* this is a partial solution as time pressures this weekend impacted the development
* yet to complete 'final frame' which would have it's own class
* yet to finish game with a final total
* console only - would have liked to include a UI
* needs refactoring of classes to their own files
* for command line simplicity, needs refactoring of methods
* adding a Player class would have been good
