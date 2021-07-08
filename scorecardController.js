angular.module('scorecardApp', [])
  .controller('scorecardController', function() {
    var bowlingScorecard = this;
    bowlingScorecard.scores = [];
    bowlingScorecard.todos = [
      {text:'learn AngularJS', done:true},
      {text:'build an AngularJS app', done:false}];

    bowlingScorecard.addTodo = function() {

      bowlingScorecard.todoText = '';
    };

    bowlingScorecard.remaining = function() {
      var count = 0;
      angular.forEach(bowlingScorecard.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    bowlingScorecard.rollZero = function() {
      bowlingScorecard.scores.push(0);
    };
  });


/*
Copyright 2019 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
