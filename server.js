const express = require("express");
const cors = require("cors");

const app = express();
const port = 4567;

//middleware
app.use(cors());
app.use(express.json());

const testRoute = require("./routes/test");
app.use("/", testRoute);

app.listen(port, () => {
  console.log("Server started on port: " + port);
});
