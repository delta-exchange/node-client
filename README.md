# Delta Rest Client

Delta Exchange is a crypto derivatives exchange where you can trade bitcoin, ethereum, ripple futures at 20x leverage. This npm package is a wrapper around rest apis of Delta Exchange.

# Get started

1. Create an account on https://www.delta.exchange/app
2. Generate your api key and api secret
3. Install the package:

```
npm install --save delta-rest-client
```

4. Follow the below snippet to trade on testnet:

```javascript
const DeltaRestClient = require("delta-rest-client");
new DeltaRestClient(api_key, api_secret).then(client => {
  // Get List of Products
  client.apis.Products.getProducts().then(function(response) {
    var products = JSON.parse(response.data.toString());
    console.log("\nProducts:\n----\n", JSON.stringify(products));
  });

  // Get Open orders for product_id = 3
  client.apis.Orders.getOrders({ product_id: 3, state: "open" }).then(function(
    response
  ) {
    var orders = JSON.parse(response.data.toString());
    console.log("Open Orders:", orders);
  });

  // Place new order
  client.apis.Orders.placeOrder({
    order: {
      product_id: 13,
      size: 100,
      side: "sell",
      limit_price: "4400",
      order_type: "limit_order"
    }
  }).then((response) => console.log(JSON.parse(response.data.toString()));
});
```

5. Checkout documentation & swagger file for all available operations

- [Detailed Documentation](https://docs.delta.exchange)
- [Swagger JSON](https://docs.delta.exchange/api/swagger_v2.json)
