const CreditCard = require('./creditCard');
const Efecty = require('./efecty');

function Payment() {

}

Payment.fromJSON = function (paymentFromAPI) {
    return paymentFromAPI.payments[0].payment_type === "credit_card"
        ? CreditCard.fromJSON(paymentFromAPI)
        : Efecty.fromJSON(paymentFromAPI);
};

// For tests
var window = window || undefined;

// Expose
if(window){
  window.Payment = Payment;
} else {
  module.exports = Payment;
}
