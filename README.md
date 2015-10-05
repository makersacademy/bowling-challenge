
Bowling Challenge
=================

The app logic has been implemented but there's no front-end as yet. I've run the code through a linter and it is reasonably happy. It's extensively tested using Jasmine to examine all the various cases.

The app involves two types of objects: frames and games.

A **frame** has `first` and `second` as properties, plus methods `setShots`,
`isSpare` and `isStrike`. For a normal frame or a spare both `first` and
`second` are integers between 0 and 9. For a strike `first` is 10 and `second`
is `null`

The `setShots` method only accepts legitimate combinations of shots:
`setShots(5, 4)` or `setShots(10)` are allowed, but `setShots(4, 7)` or
`setShots(5)` are not. Error trapping uses two helper methods, `_validateShots` and `_isInteger`

A **game** is essentially a list of frames that starts empty, stored as an array
called `frameList`, and a parallel list of frame scores called `frameScore`

You can progressively append frames to these lists using the method
`addFrame`. Frame scores are calculated as soon as possible and marked as
`null` if they can't be determined as yet. This uses a helper method called `_calculateScores`

A property `score` gets calculated once we have successfully calculated
10 frame scores. This might involve a frame list of 11 or 12 frames if we get a
spare or strike at the end. `score` remains `null` until it can be computed. A helper method called `_updateGameScore` deals with this.
