$(function() {

	var bowling = new Bowling();
	var rolls = [];
	var rollCount = 1;
	var count = 1;


	$('#roll-0').on('click', function () {
		bowling.roll(0);
		getScore(0);
	});

	$('#roll-1').on('click', function () {
		bowling.roll(1);
		getScore(1);
	});

	$('#roll-2').on('click', function () {
		bowling.roll(2);
		getScore(2);
	});

	$('#roll-3').on('click', function () {
		bowling.roll(3);
		getScore(3);
	});

	$('#roll-4').on('click', function () {
		bowling.roll(4);
		getScore(4);
	});

	$('#roll-5').on('click', function () {
		bowling.roll(5);
		getScore(5);
	});

	$('#roll-6').on('click', function () {
		bowling.roll(6);
		getScore(6);
	});

	$('#roll-7').on('click', function () {
		bowling.roll(7);
		var num = 7;
		getScore(7);
	});

	$('#roll-8').on('click', function () {
		bowling.roll(8);
		getScore(8);
	});
 
	$('#roll-9').on('click', function () {
		bowling.roll(9);
		getScore(9);
	});

	$('#roll-10').on('click', function () {
		bowling.roll(10);
		getScore(10);
		var n = bowling.currentTotal();
		fillFrame(n);
	});
	

	function getScore(num) {
		$('#roll' + count).append(num);
		rollCount += 1
		if (rollCount % 2 == 0 && rollCount > 0) {
			count += 1;
			rollCount += 1;
		}
	}
	function fillFrame(n) {
		$('#marker' + count).append(n);
	}
});
