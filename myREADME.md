
Bowling Challenge
=================

### User stories:

`As a player in a bowling game, I want to:`

`Record the score for each of my turns in a 10-frame bowling game on a scorecard, built using JavaScript.`

`Calculate a total score including bonus scores and extra frames at the end of the game.`

-------------
### My approach:
* I've created my first User Story above, and internalised the way scoring works in a bowling game. Next I guess is to work out what I need to include.

* I don't think user sign-up is needed; perhaps an option to input your name so that each player's score is recorded for the right person and the interface can display whose turn it currently is, but in bowling alleys you don't create an account.

* I need the scoretaking process to iterate 10 times, once for each frame, and then to display the user's final score including bonuses.

* The scoretaking process needs to accept input twice for each frame, unless it's a strike; it needs to notice when a strike or a spare has been bowled
and add the next frame's (or first roll of next frame if a spare) score as the bonus, and if the frame wasn't a strike or a spare not to add a bonus.

* It also needs to behave specially for the 10th frame, and allow the user to 'bowl' another frame, to a maximum of three rolls for the entire frame.

-------------
### Logic of the program:

* If a score entered is 10 that frame is complete

* In the 10th frame unless the score from the first two rolls is below 10 a total of three scores can be entered, for a maximum of three rolls

* If a strike is bowled the score of the next frame is added twice - once for the frame, once for the bonus

* If a spare is bowled the score of the next roll is added twice - once as part of the frame, once for the bonus

* If a user gets a gutter score, display it as such

* If a user gets a perfect score, display it as a perfect score

-------------

### Components:
* Welcome page which asks for the user to input name in a text field and click a 'Submit' button

* Redirects to a page which explains to the user how to use the scorecard program.

* Page has a text field/dropdown box with integer options for user to input the score for their first roll of their first frame.
They have to click a 'Submit' button for the score to be added, so that they can check for correctness first.

* Page also has a table which displays the user's score.

* As soon as a new score is input the score is displayed in the table, probably using JQuery.

-------------

### Tests:
* User can visit the home page which displays welcome message

* User can input their name and have it displayed on the page

* Program displays instructions, the number of the frame and roll the user is on

* When user inputs a score and clicks Submit, it doesn't error and the page now displays their score

* When the scores for a frame have been added the program and input fields update to display the next frame

* Bonuses are correctly added

* After 10 frames the user can't input any more scores

* The correct score is returned at the end of a game, in various cases - gutter game, perfect game, with/without bonuses
