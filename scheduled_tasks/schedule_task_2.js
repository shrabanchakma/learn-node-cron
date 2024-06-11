const cron = require("node-cron");
const fs = require("fs");
const path = require("path");
const products = require("../data/purchasedProducts");

const archiveProducts = () => {
  console.log("check in started in ", Date.now());
  const paidProducts = products.filter((item) => item.status === "paid");

  //  delete products from purchase products
  if (paidProducts.length > 0) {
    paidProducts.forEach(products.splice());
  }
  console.log("check in ended");
};

cron.schedule("* * * * * *", archiveProducts);
