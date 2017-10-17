
function Order(payment, shipping) {
  this.payment = payment;
  this.shipping = shipping;
}

Order.fromJSON = function(orderFromAPI){
  return new Order(
      Payment.fromJSON(orderFromAPI.payments[0]),
      Shipping.fromJSON(orderFromAPI.shipping)
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
