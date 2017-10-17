function Payment() {

}

Payment.fromJSON = function (paymentFromAPI) {
  if(paymentFromAPI.payment_method_id === "visa"){
    return CreditCard.fromJSON(paymentFromAPI);
  } else {
    return Efecty.fromJSON(paymentFromAPI);
  }
};

// For tests
var window = window || undefined;

// Expose
if(window){
  window.Payment = Payment;
} else {
  module.exports = Payment;
}
