const Payment = require('./payment');
const Shipping = require('./shipping');

function Order(payment, shipping) {
  this._payment = payment;
  this._shipping = shipping;
}

Order.fromJSON = function(orderFromAPI){
  return new Order(
      Payment.fromJSON(orderFromAPI),
      Shipping.fromJSON(orderFromAPI)
  );
};

// For tests
var window = window || undefined;

// Expose
if(window){
  window.Order = Order;
} else {
  module.exports = Order;
}
