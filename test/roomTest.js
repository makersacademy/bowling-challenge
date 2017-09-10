// var Room = require('../models/room');
// var expect = require('chai').expect;
//
// describe('Room', function() {
//   var room;
//
//   beforeEach(function() {
//     room = new Room("Bob", "Double room in Central London", "London", "This is my lovely room", "£230");
//   });
//
//   it('adds a room title', function() {
//     expect(room.title).to.equal("Double room in Central London");
//   });
//
//   it('adds a room location', function() {
//     expect(room.location).to.equal("London");
//   });
//
//   it('adds a room description', function() {
//     expect(room.description).to.equal("This is my lovely room");
//   });
//
//   it('adds a room price per night', function() {
//     expect(room.price).to.equal("£230");
//   });
//
//   it('adds an owner', function() {
//     expect(room.owner).to.equal("Bob");
//   });
//
//   it('is not booked by default', function() {
//     expect(room.isBooked()).to.equal(false)
//     });
//
//   it('can be booked', function() {
//     room.book()
//     expect(room.isBooked()).to.equal(true)
//   })
// });
