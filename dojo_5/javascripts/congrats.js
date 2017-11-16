function Congrats(order) {
  this._order = order;
}

Congrats.prototype.asJSON = function(){
  return {
    "status" : "success",
    "substatus" : null,
    "heading" : this.getHeadingAsString(),
    "title" : this.getTitleAsString()
  }
};

Congrats.prototype.getHeadingAsString = function(){
  return this._order._payment.heading;
};

Congrats.prototype.getTitleAsString = function() {
  return this._order._payment.title;
};

// For tests
var window = window || undefined;

// Expose
if(window){
  window.Congrats = Congrats;
} else {
  module.exports = Congrats;
}
