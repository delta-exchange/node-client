const DeltaRestClient = require("../index");

const api_key = "6156f5621f06abacd60f6bed0411d7";
const api_secret = "0c90314ea3610ee398172b20e5b8a831c6e5f9925897f34b2bd45444882e";

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
  // console.log('1111 client: ', client)
      
  // Inspect Client
  // inspect(client.apis);

  // Get products
  // client.Products.getProducts()
  //   .then(function(response) {
  //     var products = JSON.parse(response.data.toString());
  //     console.log("\nProducts:\n----\n", JSON.stringify(products));
  //   })
  //   .catch(function(e) {
  //     // Error handling...
  //     console.log("Error:", e.statusText);
  //   });

  // Get open orders
  
  // client.apis.Products.getProducts()
  client.apis.Orders.getOrders()
    .then(function(response) {
      // console.log('1111 response.data: ', response.data)
          
      // var getOrderLeverage = JSON.parse(response.data.toString());
      console.log("res products:", response.body);
    })
    .catch(function(e) {
      // Error handling...
      console.log("Error: ", e);
    });

    
    // client.Products.getProducts({})
    // .then(function(response) {
    //   var Products = JSON.parse(response.data.toString());
    //   console.log("1111 Products:", Products);
    // })
    // .catch(function(e) {
    //   // Error handling...
    //   console.log("Error: ", e);
    // });


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
  
  // client.Wallet.getWalletBalances()
  //   .then(function(response) {
  //     var balances = JSON.parse(response.data.toString());
  //     console.log("\nWallet Balances:", balances);
  //   })
  //   .catch(function(e) {
  //     // Error handling...
  //     console.log("Error:", e.statusText);
  //   });
});
