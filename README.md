Bowling Challenge
=================

[Summary](#summary) | [Specification](#specification) | [Getting started](#getting-started) | [Approach](#approach) | [More](#further-information)

## Summary
App that allows a user to enter scores for a bowling game an see the scorecard update. The scorecard is dynamic and runs using logic written in javascript which will run in the browser.
A simple express app has been set up to run the game so that you can play in the browser. The aim for the app was to develop a simple object oriented design in javascript.

This app was created over a four day period as part of my development on the Makers Academy course.

## Specification

#### Requirements

Create a bowling scorecard app that keep track of scores for a single player ten pin bowling game. The scores should be calculated based on the [rules of bowling](https://github.com/georgesykes86/bowling-challenge/blob/master/INSTRUCTIONS.md). Score for each frame should be calculated once the frame is complete unless it is a strike or spare, in which case the score is calculated after the necessary number of bonus balls.

## Getting started

#### Installation

This application has been made in Javascript using Node to run it and npm as the package manager to simplify the build process and include all necessary dependencies. If you do not have Node installed it is recommended you do so ([Node](https://nodejs.org/en/download/)). To get started please follow the subsequent steps.

```
$ git clone https://github.com/georgesykes86/bowling-challenge
$ cd <repo name>
$ npm install
```

#### How to use

The app started from the command line using the following command. You should see 'Bowling app started' in your terminal.

```
$ node app.js
Bowling app started
```

Once the app is running:
* Go to the browser and go to the page 'localhost:3000/games'
* Click on a score and continue until the scorecard is complete (Not all scores will be available depending on your previous go)
* Press New Game to reset the scorecard

The game should appear as shown in the image below.

![Imgur](https://i.imgur.com/k4J6vPg.png)

## Approach

#### Methodology
The ambition for this app to to develop a clean solution using OOP design principles such as encapsulation and Single Responsibility Principle. I decided to develop two primary classes, a Game and a Frame. The Game would manage the input of bowls, create and store frames as needed, and calculate the game score. The frame would keep track of its balls and be able to determine its own score and when it was complete. This way the Game does not need to know about the Frame, it just keeps giving it balls until it is complete and then adds it score to the total once the Frame has set its own score.

The image below shows the UML diagram showing the relationships between the new objects.

![Imgur](https://i.imgur.com/jH2DTlI.png)

#### Technologies
The app was made using Javascript with a simple Express app to serve up the page. Node was used to run the app and npm for installing packages. Testing was performed using Jasmine with ESLint as a linter. The front end uses an ejs template with HTML, CSS, JQuery and Semantic UI.

#### Testing
The development process followed a TDD approach with the development of feature tests to assess the end to end functionality and unit tests to test each of the components in isolation.

The tests can be run by opening the SpecRunner.html file in the browser.

## Further Information

#### Areas for development
* Implement a simple bowling game to make it more enjoyable to play
* Improve UI to make it responsive

#### License
This app is free to use but please credit in your own application if you reuse code directly

#### Contributors
This project is the solo effort by George Sykes.
