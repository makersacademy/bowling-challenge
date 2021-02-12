# Domain Model

## The Task

### MVP
- Create a bowling scorecard for a single player  
- They will enter the scores themselves
- Bowling consists of ten frames of up to two bowls (except last frame which can have up to three, if they achieve a strike or spare in first two)

### Stretch
- Create a user interface for the code using jQuery

## User Stories

### MVP User Stories

>As a keen bowler  
So that I can make sure my points are recorded  
I want to enter my scores for a game of bowling
>

>As a keen bowler  
So that I can keep track of how far through a game I am  
I want to see what frame and bowl I'm entering a score for  
>

>As a keen bowler  
So that I can see how well I'm doing  
I want to see my current total score in the game
>

>As a very keen bowler  
So that I don't get stuck playing forever  
I want to see when the game has finished  
>

### Stretch User Stories

>As a keen bowler  
So I can see how well I've done over the course of a game  
I want to see my score for each frame of the game
>

>As a clumsy computer user  
So I can correct my mistakes  
I want to scores I previously entered
>

>As a keener bowler than coder  
So that I don't get scared by using the console  
I want to use a web interface for my bowling scores
>

## Objects & Actions

### Nouns
- Game
- Frames
- Total Score
- Current Frame
- Current Bowl
- Frame
- Frame Scores
- Frame Bonus Scores
- Frame Total Score  

#### Objects vs Properties
- Game: Object
- Total Score: Property of Game
- Current Frame: Property of Game
- Current Bowl: Property of Game
- Frames: Property of Game
- Frame: Object
- Frame Scores: Property of Frame
- Frame Bonus Scores: Property of Frame
- Frame Total Score: Property of Frame
- Final Frame: Property of Frame

### Actions
- Enter Score
- Add Score
- Add Bonus Score
- Check if Bonus Needed
- Check if frame complete

#### Action Owners/Modifiers

Action    |    Owner     | Modifies/Reads  
----------|--------------|---------------
Enter Score | Game       | Current Frame, Frame -> Frame Scores, Frame -> Bonus Scores (potentially)
Add Score | Frame       | Frame Scores
Add Bonus Score | Frame       | Frame Bonus Scores

### Object Diagrams

Object     |   Properties      |   Methods   
----------|-------------------|--------------
Game      | totalScore, frames, currentFrame, currentBowl | enterScore

Object     |   Properties      |   Methods   
----------|-------------------|--------------
Frame      | scores, bonusScores, totalScore | addScore, addBonusScore, isBonusComplete, isComplete, isFinalFrame
