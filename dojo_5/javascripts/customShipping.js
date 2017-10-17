function CustomShipping() {

}

CustomShipping.fromJSON = function (shippingFromAPI) {
  return new CustomShipping();
};

// For tests
var window = window || undefined;

// Expose
if(window){
  window.CustomShipping = CustomShipping;
} else {
  module.exports = CustomShipping;
}
