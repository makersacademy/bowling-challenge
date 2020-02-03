This fortnight challenge was the bowling challenge. I was happy with my effort last week, it took me a few hours to first learn the rules of bowling, and then try to diagram a model of how it would look.

My first approach (which i ended up renaming scoreCard from bowling) was based on a frame object adding two balls into a games array in order to keep track of the current score and add the score as it went. 

This posed a big problem though, it became hard to add the bonus balls  fromt he following frame, and accessing that frame, whilst keeping the score of the current game rolling posed hard.

This week i decided to take a different approach and try to wrap up the logic as simply as possible. I decided to view the game as 20 rolls instead of 10 frames of 2 rolls. This made it far easier to access the rolls as they were at the index of the game array, and therefore made it easier to add the bonus. This however could only be done at the end of the game, and relied on the user calling the score function at the correct time, otherwise it would not return the score.

I am happy i completed all of the requirements for the task, but feel i would liek to combine my first and second efforts to create a scorecard that accumulated as it went. 

Currently, the 'bowling' game has the following functionality:

- Gutter game
- One frame
- Multiple frames
- Spares
- Strikes
- Final Frame
