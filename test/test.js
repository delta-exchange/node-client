const DeltaRestClient = require("../index");

const api_key = "---";
const api_secret = "---";

function inspect(client) {
  console.log("Inspecting Delta API...");
  Object.keys(client).forEach(function(model) {
    if (!client[model].operations) return;
    console.log(
      "Available methods for %s: %s",
      model,
      Object.keys(client[model].operations).join(", ")
    );
  });
  console.log("------------------------\n");
}

new DeltaRestClient(api_key, api_secret).then(client => {
  // Inspect Client
  inspect(client.apis);

  // Get products
  client.Products.getProducts()
    .then(function(response) {
      var products = JSON.parse(response.data.toString());
      console.log("\nProducts:\n----\n", JSON.stringify(products));
    })
    .catch(function(e) {
      // Error handling...
      console.log("Error:", e.statusText);
    });

  // Get open orders
  client.Orders.getOrders({ product_id: 3, state: "open" })
    .then(function(response) {
      var orders = JSON.parse(response.data.toString());
      console.log("Open Orders:", orders);
    })
    .catch(function(e) {
      // Error handling...
      console.log("Error:", e.statusText);
    });

  // Place new order
  // client.Orders.placeOrder({
  //   order: {
  //     product_id: 3,
  //     size: 1,
  //     side: "sell",
  //     limit_price: "4400",
  //     order_type: "limit_order"
  //   }
  // }).then(response => console.log(JSON.parse(response.data.toString())));

  // Get Wallet Balances
  client.Wallet.getWalletBalances()
    .then(function(response) {
      var balances = JSON.parse(response.data.toString());
      console.log("\nWallet Balances:", balances);
    })
    .catch(function(e) {
      // Error handling...
      console.log("Error:", e.statusText);
    });
});
