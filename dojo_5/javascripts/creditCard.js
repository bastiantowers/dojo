function CreditCard(paymentFromAPI) {
  this._paymentFromAPI = paymentFromAPI;
  this.heading = "¡Tu pago está aprobado!";
  this.title = "Coordina con el vendedor el envío";
}

CreditCard.fromJSON = function (paymentFromAPI) {
  return new CreditCard(paymentFromAPI);
};

// For tests
var window = window || undefined;

// Expose
if(window){
  window.CreditCard = CreditCard;
} else {
  module.exports = CreditCard;
}
