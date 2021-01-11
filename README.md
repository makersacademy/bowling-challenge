Bowling Challenge
=================

This is a simple static web app for scoring a game of bowling. It is written primarily in JavaScript, with JQuery. Sinatra is used to serve the static files. 

This was primarily a planning and refactoring challenge, due to the complexity of the scoring system (outlined below)

## How to Use

Run `ruby app.rb` from the root directory.  

## Technologies  

### JavaScript

The primary language of the codebase. 

### Ruby  

Used in conjunction with Sinatra.

### Sinatra  

Serves the static files. 

### JQuery

Used to create a simple, dynamic interface for the user. 

### Jasmine

Unit and integration testing for the JavaScript files.

### RSpec

Used in conjunction with Capybara (see below) for end-to-end testing.  

### Capybara  

See above.  

## How to Score Bowling  

*Courtesty of (Makers Academy Bowling Challenge)[https://github.com/makersacademy/bowling-challenge]*

### Strikes
The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.   

### Spares
The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).   

### 10th frame
If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.   

10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).   
1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).   

### Gutter Game   
A Gutter Game is when the player never hits a pin (20 zero scores).   

### Perfect Game
A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.   


More about ten pin bowling (here)[http://en.wikipedia.org/wiki/Ten-pin_bowling]  

## Further Edge Cases  

- Players inputting impossible scores for individual frames, e.g. [7,9]  
- Players entering scores beyond the final frame of the game
