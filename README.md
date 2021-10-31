
# Takeaway in Node.JS

A CLI app for building a takeaway order.
This is currently only setup for running jest test on.

## setup for testing
make sure to have node(v17.0.1) and jest installed
- `git clone` this repository
- run `npm install`
- run `jest`

## so many problems so little time
as this was my first attempt at building a node app, it took me a little while setting
up the basic environment.

I was unsure of the best way to print to the console, I spent time looking into that
and decided that since I was only printing to the console I would not need the use of readline.

I ran into some small issues with testing console.log with the menu call for each line.
I think the choice I made works well for now.

It took me some time researching a simple way of filtering out the [key, value] pair from the object menu.
In hindsight I would have made the menu an array of objects, as this would have made it easier to control in JavaScript.

Unfortunately, in its currant state it is quite incomplete, I think it would need a user class and maybe a controller class to get it running on command line.
