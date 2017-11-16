function Efecty(paymentFromAPI) {
  this._paymentFromAPI = paymentFromAPI;
  this.heading = "¡Apúrate a pagar!";
  this.title = "Paga ${price} en ${paymentMethodName} para reservar tu compra";
}

Efecty.fromJSON = function (paymentFromAPI) {
  return new Efecty(paymentFromAPI);
};

// For tests
var window = window || undefined;

// Expose
if(window){
  window.Efecty = Efecty;
} else {
  module.exports = Efecty;
}
