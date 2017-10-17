function CreditCard() {

}

CreditCard.fromJSON = function (paymentFromAPI) {
  return new CreditCard();
};

// For tests
var window = window || undefined;

// Expose
if(window){
  window.CreditCard = CreditCard;
} else {
  module.exports = CreditCard;
}
