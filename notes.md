## Planning for Bowling Challenge

Outcome of whole project is to have a program that can take scores for a whole 10 frames of bowling.
- It can take an input score from the user for each bowl of each frame
- It can determine if that score constitutes a strike or spare
- It cans store the total score and return it to the user
- It can determine if any bonuses are due for strikes/spares and return add them to the total score
- It can determine the game conditions of the 10th frame and give extra bowls if strikes or spares are scored
- It can determine the game is over and inform the user providing their final score
- Edge cases:
* Scores given are negatives/above 10

User Stories

As a player
So I can enjoy a game of bowling
I want to be able to enter my score

As a player
So I can enjoy a game of bowling
I want my score to be returned to me after each frame

As a player
So I can know my final score
I want my score to be saved

As a player
So I can have my correct score
I want to be given bonuses for bowling strikes and spares

As a player
So I can enjoy the full game
I want to be able to have an extra bowl in the 10th frame if applicable

As a player
So I can enjoy a game of bowling
I want to know when the game is over

Best way to do the scoring for strikes and spares is to check after each bowl if a strike or spare has been bowled the previous frame.
Also check if a strike has been bowled the previous frame if one was bowled the frame before. Bonus can only up to 20 and then 30.

Plan of action:

TDD
Fight the easy fights to start with:

- Create bowling class
- Create function that takes a user input
Frame
- It then saves this user input into a frame array
- If the score input is 10 then frameStatus = strike
- If the score input is less than 10, prompt for second bowl
- If total for frame is 10 frameStatus = spare
- Otherwise totalScore is pushes into Frame array
- frameScore and totalScore are returned to user

Bonuses
- When the first ball if NOT a strike:
- Check if previous ball was a spare, if so add first round score to 10 for previous frame and push that into scores array
- Check if 2x strike, if so add first bowl score to 20 and push into 2x previous frame array
- If is a strike:
- Check if previous ball was a spare and add 20 to previous frame
- Check if previous ball was a strike, if so change frameStatus to 2x strike
- Check if previous ball is 2x strike, if so add 30 to 2x previous frame array

10th Frame
- If first ball NOT a strike
- Check bonuses
- Second bowl is NOT a spare
- Check bonuses
- Game ends  - score calculated and returned
- Second bowl IS a spare
- check bonuses
- Extra bowl and spare and next bowl score combined

- If first ball IS a strike
- Check bonuses
- If next ball is NOT a strike
- Check bonuses
- Bowl last ball and add up
- IF next ball IS a strike
- check bonuses
- Bowl last ball and add up

- Final functionality create user

Input/Output Table

Input         |          Output

3             |         3  => 'bowl second ball'
10            |         "You got a strike", Next Frame
[3, 4]        |         "You scored 7", Next Frame
[3, 7]        |         "You got a spare", Next Frame
[3] when prev frame = spare | "3", score: 13 for previous frame, bowl second ball
[10] when prev frame = spare| "You got a Strike", score: 20 for prev frame
[3, 4] when prev frame strike | "7", Score: 17 for prev frame
[10] when prev frame strike   | strike
[5, 5] when pres frame = strike| "spare", Score: 20 for prev frame
[3] when prev frame 2x strike | "3" score: 23 for 2x prev frame, bowl second ball
[10] when prev frame 2x strike| "strike", 30 for 2x prev frame
