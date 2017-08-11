function Display() {
}

Display.prototype.framesToHTMLTable = function(frames) {
  string = "";
  string += "<table class='table table-bordered'><thead><tr>";
  string += "<th>Frame</th>";
  string += "<th>Score1</th>";
  string += "<th>Score2</th>";
  string += "<th>Bonus</th>";
  string += "<th>Total</th></tr></thead><tbody>";
  for(i = frames.length; i > 0; i--) {
    var frame = frames[i-1];
     string += "<tr><td>" + i + "</td>";
     string += "<td>" + (frame.score1 ? frame.score1 : "-") + "</td>";
     string += "<td>" + (frame.score2 ? frame.score2 : "-") + "</td>";
     string += "<td>" + (frame.bonue ? frame.bonus : "-") + "</td>";
     string += "<td>" + frame.totalScore + "</td>";
     string += "</tr>";
   }
   string += "</tbody></table>";
   return string;
};
