const DeltaRestClient = require("../index");
var DeltaAPIKeyAuthorization = require("./../lib/DeltaAPIKeyAuthorization");
const api_key = "22226156f5621f06abacd60f6bed0411d7";
const api_secret = "22220c90314ea3610ee398172b20e5b8a831c6e5f9925897f34b2bd45444882e";

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

  // to get products
  client.apis.Products.getProducts()
    .then(function(response) {
      // console.log("res products:");
      console.log("Products.getProducts success: ");
    })
    .catch(function(e) {
      console.log("Error 111: ", e);
    });
      
  // client.apis.Positions.changePositionMargin({
  //     "product_id": 7,
  //     "delta_margin": 1.2
  //   })
  //   .then(function(response) {
  //     console.log("Positions.changePositionMargin success: ", response);
  //   }).catch(function(e) {
  //     console.log("Error 111: ", e);
  //   });

  // // get wallet balance
  // client.apis.Assets.getAssets()
  //   .then(function(response) {
  //     console.log("Assets.getAssets success:");
  //   })
  //   .catch(function(e) {
  //     console.log("Error 111: ", e);
  //   });

  // to get orders
  // client.apis.Orders.getOrders({
  //     page_size: 1
  //   })
  //   .then(function(response) {
  //     console.log("Orders.getOrders success:");
  //   }).catch(function(e) {
  //     console.log("Error 111: ", e);
  //   });

  // TO DO endpoint

  // client.apis.Orders.getOrderLeverage({
  //     product_id: 2
  //   })
  //   .then(function(response) {
  //     console.log("Orders.getOrderLeverage success: ");
  //   }).catch(function(e) {
  //     console.log("Error 111: ", e);
  //   });


  // client.apis.TradeHistory.getOrderHistory()
  //   .then(function(response) {
  //     console.log("Orders.getOrders success: ");
  //   }).catch(function(e) {
  //     console.log("Error 111: ", e);
  //   });

  // client.apis.TradeHistory.getUserFillsByFilters()
  //   .then(function(response) {
  //     console.log("TradeHistory.getUserFillsByFilters success: ");
  //   }).catch(function(e) {
  //     console.log("Error 111: ", e);
  //   });

  // client.apis.TradeHistory.downloadFillsHistory()
  //   .then(function(response) {
  //     console.log("TradeHistory.downloadFillsHistory success: ");
  //   }).catch(function(e) {
  //     console.log("Error 111: ", e);
  //   });


  // to get positions
  // NOTE working: error from TE(might be data issue)
  // client.apis.Positions.getPositions({
  //     product_ids: "7"
  //   })
  //   .then(function(response) {
  //     console.log("Positions.getPositions success: ", response.data);
  //   }).catch(function(e) {
  //     console.log("Error 111: ", e);
  //   });

  // TO DO pending
  // client.apis.Orderbook.getL2Orderbook({
  //     product_id: 2
  //   })
  //   .then(function(response) {
  //     console.log("TradeHistory.getUserFillsByFilters success: ");
  //   }).catch(function(e) {
  //     console.log("Error 111: ", e);
  //   });


  // client.apis.Wallet.getBalances()
  //   .then(function(response) {
  //     console.log("Wallet.getBalances success: ");
  //   }).catch(function(e) {
  //     console.log("Error 111: ", e);
  //   });

  // client.apis.Wallet.getTransactions()
  //   .then(function(response) {
  //     console.log("Wallet.getTransactions success: ");
  //   }).catch(function(e) {
  //     console.log("Error 111: ", e);
  //   });

  // client.apis.Wallet.downloadTransactions()
  //   .then(function(response) {
  //     console.log("Wallet.downloadTransactions success: ");
  //   }).catch(function(e) {
  //     console.log("Error 111: ", e);
  //   });

  // client.apis.SpotIndice.getSpotIndices()
  //   .then(function(response) {
  //     console.log("SpotIndice.getSpotIndices success: ");
  //   }).catch(function(e) {
  //     console.log("Error 111: ", e);
  //   });

  // // to get orders
  // client.apis.Orders.placeOrder({})
  //   .then(function(response) {
  //     console.log("Orders.placeOrder success:");
  //   }).catch(function(e) {
  //     console.log("Error 111: ", e);
  //   });



});