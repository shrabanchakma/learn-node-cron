const cron = require("node-cron");

const task = () => {
  console.log("hi this is working");
};
cron.schedule(" * * * * *", task);
