$(document).ready(function() {
    const frames = [];

    for(let i = 0; i <= 9; i++) {
        frames.push(new Frame());

        $("#bowling_card").append(`
        <div>
            <h2> Frame ${i + 1} </h2>
            <label>Roll 1
                <input type="text" id="frame_${i}_roll_1" />
            </label>
            <button id="frame_${i}_roll_1_submit">Submit</button>
            <label>Roll 2
                <input type="text" id="frame_${i}_roll_2"/>
            </label>
            <button id="frame_${i}_roll_2_submit">Submit</button>
            <h2>Total: <span id="frame_${i}_total">--</span></h2>
        </div>
        `);

        $("#frame_" + i + "_roll_1_submit").click(function() {
            const value = parseInt($("#frame_" + i + "_roll_1").val());
            frames[i].firstRoll(value);
        });
    
        $("#frame_" + i + "_roll_2_submit").click(function() {
            const value = parseInt($("#frame_" + i + "_roll_2").val());
            frames[i].secondRoll(value);
            
            $("#frame_" + i + "_total").text(frames[i].cell1 + frames[i].cell2);
        });
    }
    
});