# Ten Pin Bowling Scorecard

A front end web app to record scores for a game of bowling, developed using JavaScript.
```
1   7   4   ..
5   3   0   ..
6   14  4       24
```

## Running the app

Clone this repo (or if you prefer, download only the essential files: index.html, styles.css and the src directory with all its contents).

Open the index.html file - it should open in your default browser. You can use the scorecard as soon as the page is loaded. To clear the scorecard, just refresh the page.

## Running the tests

Make sure you have the lib and spec directories, with all their contents, and the SpecRunner.html file along with all the app files described above.

Open SpecRunner.html to see the test results in your browser.

### Implementation

The interface uses HTML buttons for input, to ensure only valid scores are entered. The current frame is tracked automatically and the app determines whether a second ball is expected before moving to the next frame; this information is displayed on the scorecard for clarity.

The score for each ball rolled is recorded individually and displayed on the scorecard. The total score for each frame is displayed as soon as it is known, taking into account any additional rolls which will affect it.

When the player gets a strike or spare, the bonuses are tracked by temporary JS objects. Each tracker object records the frame it relates to, and is updated by the scorecard after each subsequent roll. Once it has received the correct number of follow-up rolls, the bonus is recorded and the object is discarded.

If a strike or spare is recorded in the 10th frame, the scorecard will accept as many additional scores as are necessary to calculate the bonus correctly. A simple line of text confirms the bonus scores.

#### Wish list

* Tracking scores for more than one player on a single scorecard.
* Creating a cookie to store data for a game in progress, so that it can be reloaded if the browser fails rather than losing all the scores recorded.
* For the second ball of a frame, disable the score buttons which would result in a score of more than 10 for that frame. Currently players are able to click those buttons and are shown a message advising that the score is invalid.
