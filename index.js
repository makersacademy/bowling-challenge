document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  let data = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0, 0],
  ];

  const reset = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0, 0],
  ];

  const updateScores = (data) => {
    game.score(data);
  };

  const updateFrames = () => {
    document.querySelector("#fr-1").innerText = game.frames[0].frameTotal;
    document.querySelector("#fr-2").innerText = game.frames[1].frameTotal;
    document.querySelector("#fr-3").innerText = game.frames[2].frameTotal;
    document.querySelector("#fr-4").innerText = game.frames[3].frameTotal;
    document.querySelector("#fr-5").innerText = game.frames[4].frameTotal;
    document.querySelector("#fr-6").innerText = game.frames[5].frameTotal;
    document.querySelector("#fr-7").innerText = game.frames[6].frameTotal;
    document.querySelector("#fr-8").innerText = game.frames[7].frameTotal;
    document.querySelector("#fr-9").innerText = game.frames[8].frameTotal;
    document.querySelector("#fr-10").innerText = game.frames[9].frameTotal;
    document.querySelector("#total-score").innerText = game.gameTotal;
  };

  const update = (data) => {
    game.resetScores();
    updateScores(data);
    updateFrames();
  };

  update(data);

  const updateInputFields = () => {
    document.getElementById("fr-1-r-1").value = "";
    document.getElementById("fr-1-r-2").value = "";
    document.getElementById("fr-2-r-1").value = "";
    document.getElementById("fr-2-r-2").value = "";
    document.getElementById("fr-3-r-1").value = "";
    document.getElementById("fr-3-r-2").value = "";
    document.getElementById("fr-4-r-1").value = "";
    document.getElementById("fr-4-r-2").value = "";
    document.getElementById("fr-5-r-1").value = "";
    document.getElementById("fr-5-r-2").value = "";
    document.getElementById("fr-6-r-1").value = "";
    document.getElementById("fr-6-r-2").value = "";
    document.getElementById("fr-7-r-1").value = "";
    document.getElementById("fr-7-r-2").value = "";
    document.getElementById("fr-8-r-1").value = "";
    document.getElementById("fr-8-r-2").value = "";
    document.getElementById("fr-9-r-1").value = "";
    document.getElementById("fr-9-r-2").value = "";
    document.getElementById("fr-10-r-1").value = "";
    document.getElementById("fr-10-r-2").value = "";
    document.getElementById("fr-10-r-3").value = "";
    document.querySelector("#fr-1").innerText = "";
    document.querySelector("#fr-2").innerText = "";
    document.querySelector("#fr-3").innerText = "";
    document.querySelector("#fr-4").innerText = "";
    document.querySelector("#fr-5").innerText = "";
    document.querySelector("#fr-6").innerText = "";
    document.querySelector("#fr-7").innerText = "";
    document.querySelector("#fr-8").innerText = "";
    document.querySelector("#fr-9").innerText = "";
    document.querySelector("#fr-10").innerText = "";
    document.querySelector("#total-score").innerText = "";
  };

  updateInputFields();

  const resetEntireGame = () => {
    game.resetScores();
    data = reset;
    update(data);
    updateInputFields();
    updateFrames();
  };

  // reset
  document.querySelector("#reset-score").addEventListener("click", () => {
    // console.log("clicked");
    resetEntireGame();
  });

  // 1
  document.querySelector("#fr-1-r-1").addEventListener("change", (e) => {
    if (parseInt(e.target.value) === 10) {
      data[0] = [10];
      document.getElementById("fr-1-r-2").value = 0;
    } else {
      data[0] = [e.target.value ? parseInt(e.target.value) : 0, 0];
    }
    update(data);
  });

  document.querySelector("#fr-1-r-2").addEventListener("change", (e) => {
    data[0][1] = e.target.value ? parseInt(e.target.value) : 0;
    update(data);
  });

  // 2
  document.querySelector("#fr-2-r-1").addEventListener("change", (e) => {
    if (parseInt(e.target.value) === 10) {
      data[1] = [10];
      document.getElementById("fr-2-r-2").value = 0;
    } else {
      data[1] = [e.target.value ? parseInt(e.target.value) : 0, 0];
    }
    update(data);
  });

  document.querySelector("#fr-2-r-2").addEventListener("change", (e) => {
    data[1][1] = e.target.value ? parseInt(e.target.value) : 0;
    update(data);
  });

  // 3
  document.querySelector("#fr-3-r-1").addEventListener("change", (e) => {
    if (parseInt(e.target.value) === 10) {
      data[2] = [10];
      document.getElementById("fr-3-r-2").value = 0;
    } else {
      data[2] = [e.target.value ? parseInt(e.target.value) : 0, 0];
    }
    update(data);
  });

  document.querySelector("#fr-3-r-2").addEventListener("change", (e) => {
    data[2][1] = e.target.value ? parseInt(e.target.value) : 0;
    update(data);
  });

  // 4
  document.querySelector("#fr-4-r-1").addEventListener("change", (e) => {
    if (parseInt(e.target.value) === 10) {
      data[3] = [10];
      document.getElementById("fr-4-r-2").value = 0;
    } else {
      data[3] = [e.target.value ? parseInt(e.target.value) : 0, 0];
    }
    update(data);
  });

  document.querySelector("#fr-4-r-2").addEventListener("change", (e) => {
    data[3][1] = e.target.value ? parseInt(e.target.value) : 0;
    update(data);
  });

  // 5
  document.querySelector("#fr-5-r-1").addEventListener("change", (e) => {
    if (parseInt(e.target.value) === 10) {
      data[4] = [10];
      document.getElementById("fr-5-r-2").value = 0;
    } else {
      data[4] = [e.target.value ? parseInt(e.target.value) : 0, 0];
    }
    update(data);
  });

  document.querySelector("#fr-5-r-2").addEventListener("change", (e) => {
    data[4][1] = e.target.value ? parseInt(e.target.value) : 0;
    update(data);
  });

  // 6
  document.querySelector("#fr-6-r-1").addEventListener("change", (e) => {
    if (parseInt(e.target.value) === 10) {
      data[5] = [10];
      document.getElementById("fr-6-r-2").value = 0;
    } else {
      data[5] = [e.target.value ? parseInt(e.target.value) : 0, 0];
    }
    update(data);
  });

  document.querySelector("#fr-6-r-2").addEventListener("change", (e) => {
    data[5][1] = e.target.value ? parseInt(e.target.value) : 0;
    update(data);
  });

  // 7
  document.querySelector("#fr-7-r-1").addEventListener("change", (e) => {
    if (parseInt(e.target.value) === 10) {
      data[6] = [10];
      document.getElementById("fr-7-r-2").value = 0;
    } else {
      data[6] = [e.target.value ? parseInt(e.target.value) : 0, 0];
    }
    update(data);
  });

  document.querySelector("#fr-7-r-2").addEventListener("change", (e) => {
    data[6][1] = e.target.value ? parseInt(e.target.value) : 0;
    update(data);
  });

  // 8
  document.querySelector("#fr-8-r-1").addEventListener("change", (e) => {
    if (parseInt(e.target.value) === 10) {
      data[7] = [10];
      document.getElementById("fr-8-r-2").value = 0;
    } else {
      data[7] = [e.target.value ? parseInt(e.target.value) : 0, 0];
    }
    update(data);
  });

  document.querySelector("#fr-8-r-2").addEventListener("change", (e) => {
    data[7][1] = e.target.value ? parseInt(e.target.value) : 0;
    update(data);
  });
  // 9
  document.querySelector("#fr-9-r-1").addEventListener("change", (e) => {
    if (parseInt(e.target.value) === 10) {
      data[8] = [10];
      document.getElementById("fr-9-r-2").value = 0;
    } else {
      data[8] = [e.target.value ? parseInt(e.target.value) : 0, 0];
    }
    update(data);
  });

  document.querySelector("#fr-9-r-2").addEventListener("change", (e) => {
    data[8][1] = e.target.value ? parseInt(e.target.value) : 0;
    update(data);
  });

  // 10
  document.querySelector("#fr-10-r-1").addEventListener("change", (e) => {
    // console.log(data[9]);
    // console.log("";
    data[9][0] = e.target.value ? parseInt(e.target.value) : 0;
    update(data);
  });

  document.querySelector("#fr-10-r-2").addEventListener("change", (e) => {
    data[9][1] = e.target.value ? parseInt(e.target.value) : 0;
    update(data);
  });

  document.querySelector("#fr-10-r-3").addEventListener("change", (e) => {
    data[9][2] = e.target.value ? parseInt(e.target.value) : 0;
    update(data);
  });
});
