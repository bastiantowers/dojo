function Efecty() {

}

Efecty.fromJSON = function (paymentFromAPI) {
  return new Efecty();
};

// For tests
var window = window || undefined;

// Expose
if(window){
  window.Efecty = Efecty;
} else {
  module.exports = Efecty;
}
