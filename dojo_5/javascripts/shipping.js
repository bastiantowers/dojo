function Shipping() {

}

Shipping.fromJSON = function (shippingFromAPI) {
  if(shippingFromAPI.shipment_type === "custom_shipping"){
    return CustomShipping.fromJSON(shippingFromAPI);
  }
};

// For tests
var window = window || undefined;

// Expose
if(window){
  window.Shipping = Shipping;
} else {
  module.exports = Shipping;
}
