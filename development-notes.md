This project is a continuation of week 5 bowling scorecard weekend challenge which I wrote in Ruby. For this challenge I am going to translate the model to javascript, utilising the jasmine testing framework and eslint.

After translation, I am going to attempt to build an interface with jQuery as well.

Please refer to previous weeks development notes and readme for the explanation of development of the model.

Miro Board: - Miro Board with logic
    - https://miro.com/app/board/o9J_lLjv0EE=/

As I translate, I will also seek to refactor the model to extract the class further.

I attempted to set up Jasmine via a node package manager but it was interfering with my attempt to build a web interface, something related to the use of require. Given time constraints I have reverted to the stand alone installation in order to be able to use it correctly.

<!-- Reset up Jasmine - web based, -->

I reset up esLint as well, with a fresh download, and properly set up the config file, to include jasmine and usual js files. Included Jasmine, Jquery Plugins as well.
<!-- Reset esLint -  -->

Build interface with jQuery
- Installed jQuery - done
- Building simple interface to:
  - display scorecard - done simple interface
  - allow rolls to be entered, - done simple entry using jQuery
  - gives an error message if a wrong number is entered. - need to improve logic first

Finish off the logic.
- error handling for second roll
- total scoring
- handling bonus points.
- final frame logic

- add Travis, Karma, etc...

- optional - pictures and victory messages!
