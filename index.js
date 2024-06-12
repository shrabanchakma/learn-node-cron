const express = require("express");
const app = express();
const port = 8001;
// require("./scheduled_tasks/schedule_task_1");
// require("./scheduled_tasks/schedule_task_2");
require("./scheduled_tasks/schedule_task_3");
app.get("/", (req, res) => {
  res.send("What's up!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
