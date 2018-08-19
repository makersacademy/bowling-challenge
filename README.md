# bowling-challenge

This repository contains all the files required to run, test and edit my Bowling Challenge submission, forked from the makers academy repository (https://github.com/makersacademy/bowling-challenge)[bowling-challenge]

## Installation

To run the main file simply open **index.html** in any web-compatible browser, no other installation/ requirments nescesary. This project uses jQuery to process user interaction, as this is included in the project library no installation is needed.

### Testing

The testing suite for this projects comes in two part, unit tests written in (https://jasmine.github.io/)[jasmine] and feature/ gui tests in (https://www.cypress.io/)[Cypress]
In order to run the tests **Both** of these libraries must be installed either locally or globally.
To run the unit tests simply open the **SpecRunner.html** in your browser. the tests will automatically run and any test data will be visible in browser. to run the tests again simply refresh the page.
In order to run the Cypress tests run the npm command *npx cypress open*. you will then be greeted with the cypress gui. All tests will automaticaly run. to run the tests again i recommend keeping the application open and saving the spec file found at */cypress/integration/index_spec.js*

## Credits

- Makers Academy: origonal project idea
