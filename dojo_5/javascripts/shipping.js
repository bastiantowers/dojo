const CustomShipping = require('./customShipping');

function Shipping(shippingFromAPI) {
  this._shippingFromAPI = shippingFromAPI;
}

Shipping.fromJSON = function (shippingFromAPI) {
  const shippingJSON = shippingFromAPI.shipping;
  return shippingJSON.shipment_type === "custom_shipping"
      ? CustomShipping.fromJSON(shippingJSON)
      : new Shipping(shippingJSON);
};

// For tests
var window = window || undefined;

// Expose
if(window){
  window.Shipping = Shipping;
} else {
  module.exports = Shipping;
}
