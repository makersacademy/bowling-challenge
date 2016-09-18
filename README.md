# Bowling Challenge

## Introduction

This is a solution to the Makers Academy Week Five bowling challenge. It is a fully tested Javascript model of bowling scoring.

It comes complete with an animated front end that allows user to interact with the code through a randomly generated score for each frame.

The backend uses pure Javascript, with Jasmine for testing. The front end uses jQuery for user interaction.

My approach to the problem relied heavily on duck typing and polymorphism. In the end this solution, while elegant placed to much responsibility on the frame classes which should have sat in the game class. However as an exercise in exploring OOD principles in Javascript, it was immensely useful.

Moving forward I'd like to restructure the program to make the game class responsible for calculating score. The front end would also benefit from the use of a dynamic framework like React to render the scores.

## Install Instructions

- Fork Repo   
- Clone to your local machine  
- Open in browser (see below)  

## Usage Instructions

To interact with the animated system, open the index.html file in your browser. This will also load all files, so you can manually interact with the code using Chrome Dev Tools or similar.

![NewGame](https://dl.dropboxusercontent.com/u/19916786/bowling_new_game.png)

Then frames can be played by using the bowl button and you can move between frames using the next frame button.

![MidGame](https://dl.dropboxusercontent.com/u/19916786/bowling_mid.png)

![EndGame](https://dl.dropboxusercontent.com/u/19916786/bowling%20_finished.png)
