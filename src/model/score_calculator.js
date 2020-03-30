
$(document).ready(function () {

	for (let i = 0; i < 11; i++) {
		// $(`#frame${i}Score`).css({"color":"#29c1cf",})

		// Frame 1 
		$(`#frame${i}Roll1`).on('change', function () {
			var roll1 = parseInt(this.value);
			$("#frame1Row2").empty();

			for (let r = 0; r < 11 - roll1; r++) {
				$(`#frame${i}Roll2`).append(`<option value="${r}">${r}</option>`)
			}

			$(`#frame${i}Roll2`).on('change', function () {
				var roll2 = parseInt(this.value);

				if (roll1 === 10) {
					$(`#frame${i}Score`).text(roll1);
				} else{
					$(`#frame${i}Score`).text(roll1 + roll2);
				}
			})
		})
	}
})
