
Bowling Challenge
=================

- if there is a strike or spare, don't calc frame until next frame has been done.
- this is seriously buggy. the front end has a problem pulling up strikes and spares.
- the back end has a problem with multiple strikes (total seems to grow exponentially
  if you get a strike and there's no way for adding the second roll if you get
  2 strikes in a row )

## further improvements
- Frame needs to be split into two classes: Frame and ScoreCard
- More to do on styling

## to run
$ app.rb
