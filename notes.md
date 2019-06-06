## Other things to work on this weekend/next week

- Reflect on my overall process - define what I do  - how do I debug? how do I refactor? and where I could be better?
- Reflect on the weekly goals - what have I achieved?
- What was my approach to this week? How did I actually learn a new language? What went well and what didn't?
- Write feedback for Bart and Henry

## My project setup

1. Run `npm i -g eslint` for the linter
2. Add lib/jasmine-3.3.0 to the directory and SpecRunner.html to root directory
3. Add spec and src folders
4. Add bowlingSpec.js
5. Update SpecRunner.html to include the test file

## To run tests

To run Jasmine tests, type `open -a "Google Chrome" SpecRunner.html` into the console

## To run the linter (eslint)

To run the linter, type `eslint lib/**` (this might need double quotes around the folder)


## Installing npm and node js on linux machine

- To get the latest version of apt-get on linux:
`sudo apt-get update`
- To install nodejs and npm:
`sudo apt-get install nodejs`
`sudo apt-get install npm` (npm is the node package manager)

NOTE: on linux, use nodejs as the command rather than just node (MAC)
[nodejs instructions](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04)

Export allclasses as modules:

`module.exports = ClassName;`

And require them in the spec files:

`var ClassName = require('../src/ClassName');`

Then to install nyc:

`npm install --save-dev nyc`

To actually run the test coverage stats and the tests, update package.json to include:
`"scripts": {
  "test": "jasmine",
  "coverage": "nyc npm run test"
},`
When you then run `npm run coverage` from the command line it will run the tests and the coverage stats.
