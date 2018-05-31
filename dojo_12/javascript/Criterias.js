function Criterias(name, capacity, label) {
  this.name = name;
  this.capacity = capacity;
  this.label = label;
}

Criterias.prototype.returnIfAppliesByCapacityOrDefault = function(capacityNeeded, defaultValue) {
  return this.capacity > capacityNeeded ? this : defaultValue;
};

Criterias.prototype.returnIfAppliesOrDefault = function (criterias, defaultValue) {
  criterias.returnThisIfApplies
};

module.exports = Criterias;