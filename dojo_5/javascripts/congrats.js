function Congrats() {

}

Congrats.prototype.asJSON = function(){
  return {
    "status": "success",
    "substatus": null,
    "heading": "¡Apúrate a pagar!",
    "title": "Paga ${price} en ${paymentMethodName} para reservar tu compra",
  };
};

// For tests
var window = window || undefined;

// Expose
if(window){
  window.Congrats = Congrats;
} else {
  module.exports = Congrats;
}
