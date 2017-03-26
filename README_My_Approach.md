# Bowling Challenge

First I read about the game and rules on wikipedia. I proceeded to decide what my constructors will look like and what methods they will have. I decided to implement code for a normal game and then include bonus once the basic structure is ready. Later I realised that the 10th frame was special, it was very similar to other frames in many ways but it can have up to 3 rolls. So decided on making a constructor for the last frame. Now the code doesn't seem DRY but there are sutle differences between methods from Frame and LastFrame. The front end is not finished. Will work on front and backend when time permits.

I wish I had not hardcoded the creation of Frames and Rolls. It would have been good if I could create the objects on document load and inject them inside the Game.Hopefully next week with JavaScript would give me some more idea about how to decouple the objects even more.

## User Stories
```
As a player,
So that I can play ten-pin bowling
I want to be able to record my score on a scoresheet.

As a player,
So that I can store the number of pins knocked
I want to be able to input my roll score.

As a player,
So that I can know if I scored a strike or spare
I want to have some form of visual indication.

As a player,
So that I can keep track of my score
I want to be able to see total score on the scoresheet.

```

## Technologies Used:
- JavaScript
- Jasmine
- Rspec
- Capybara
- Selenium Driver
- Sinatra

## How to use the app

```
git clone https://github.com/AAMani5/bowling-challenge.git
cd bowling-challenge
ruby app.rb
go to http://localhost:4567/
```

To play the game, player clicks the buttons to indicate the number of pins knocked. Pins knocked per frame will be displayed along with if the frame has strike(x) or spare(/).
