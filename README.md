# Bowling Scorecard React App

This is a React application that allows users to keep score of a bowling game. The app consists of 10 frames, where each frame can have up to 2 rolls. The player's score is calculated based on the number of pins knocked down, strikes, and spares.

The user interface of this app has been implemented using React components, and the score data is managed using a global state management tool called Context. The app also uses `react-router-dom` for routing and other React hooks such as `useState` and `useEffect` for adding state and side-effects to the functional components.

## Installation

To run this app, you will need to have **Node.js** and **npm** installed on your machine. Once you have installed **Node**.js and **npm**, clone this repository and run the following commands in your terminal:

```
$ cd bowling-scorecard
$ cd client
$ npm install
$ npm start
```

This will start the app on your local server.

## Features

**The app has the following features:**

- The user can input the number of pins knocked down in each roll using the input fields provided.
- App calculates the user's score in real-time, and displays it for each frame.
- App handles strikes and spares correctly, and calculates the bonus points accordingly.
- Final score display after the completion of the game
- Reset button to start a new game.

**Screenshots of the application being used in different ways can be found [here](https://github.com/forreya/bowling-scorecard/tree/main/extra-info/images).**

## Folder Structure
**The folder structure of this app is as follows:**

components: Contains all the React components used in the app.

styles: Contains all the CSS files & font files used in the app.

App.js: The main React component that renders the app.

index.js: The entry point for the app.

## Bowling Rules
_Here are the rules for bowling, for reference:_

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

## Credits
This app was developed by @forreya, based on the Bowling Challenge specifications provided by Makers Academy- which can be found [here](https://github.com/makersacademy/bowling-challenge).

The app was built using React, and various other tools such as react-router-dom.
