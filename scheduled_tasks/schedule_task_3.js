const cron = require("node-cron");
const products = require("../data/productDetails.json");
const fs = require("fs");
const path = require("path");
const cleaningJob = () => {
  try {
    products.map((product, idx) => {
      const currentDate = new Date().getTime();
      const purchaseDate = new Date(product.purchase_date).getTime();
      const timeGap = Math.floor(
        (currentDate - purchaseDate) / (1000 * 3600 * 24)
      );
      console.log(`No.1 ${idx + 1} product purchased ${timeGap} days ago`);
      if (timeGap > 180) {
        products.splice(idx, 1);
        fs.writeFileSync(
          path.join(__dirname, "../", "data", "productDetails.json"),
          JSON.stringify(products),
          "utf-8"
        );
      }
    });
  } catch (err) {
    console.error(err.message);
  }
};

cron.schedule("*/5 * * * * *", cleaningJob);
