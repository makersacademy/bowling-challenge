
#Bowling Challenge - Week 5 w/end
=================================

- I found myself getting quite stuck mid-way through carving out the business logic. I decided to start working on the front end which quite by chance pushed me on through the tough spot.

- I created the rollResult method expressly to give my tests access to the x variable, as I couldn't see how else to do so. I will look into this in-depth as I'm sure this is not the best way to go about it.

- Had real problems getting around the fact that my frame.js code was carrying out its loop (which represented the two rolls of a frame) before running any other code.

  I discovered another way, using a simple one-line counter in my jq.js file. Less intrusive, though I would still like to understand why my loop wasn't working.
