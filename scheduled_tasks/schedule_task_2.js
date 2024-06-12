const cron = require("node-cron");
const fs = require("fs");
const path = require("path");
const products = require("../data/productDetails.json");

const archiveProducts = () => {
  console.log("check in started in ", Date.now());
  try {
    const paidProducts = products.filter((item) => item.status === "paid");

    //  delete products from purchase products
    if (paidProducts.length > 0) {
      paidProducts.forEach((item) =>
        products.splice(
          products.findIndex((e) => e.status === item.status),
          1
        )
      );
      fs.writeFileSync(
        path.join(__dirname, "../", "data", "productDetails.json"),
        JSON.stringify(products),
        "utf-8"
      );

      fs.writeFileSync(
        path.join(__dirname, "../", "data", "purchasedProducts.json"),
        JSON.stringify(paidProducts),
        "utf-8"
      );
    }
  } catch (err) {
    console.log(err.message);
  }

  console.log("check in ended");
};

cron.schedule("*/5 * * * * *", archiveProducts);
