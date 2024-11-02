const express = require("express");
const router = require("./routes/notes");
const port = 3000;

const app = express();

app.get("/api/v1", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
