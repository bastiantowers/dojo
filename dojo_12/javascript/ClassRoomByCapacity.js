function ClassRoomByCapacity(name, capacity, label) {
  this.name = name;
  this.capacity = capacity;
  this.label = label;
}

ClassRoomByCapacity.prototype.returnIfAppliesByCapacityOrDefault = function(capacityNeeded, defaultValue) {

};

module.exports = ClassRoomByCapacity;