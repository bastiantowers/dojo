const ClassRoomUnavailable = require('./classRoomUnavailable');

function ClassRoom(name, capacity, label, m2, computers) {
  this.name = name;
  this.capacity = capacity;
  this.label = label;
  this.m2 = m2;
  this.computers = computers
}

ClassRoom.prototype.returnIfAppliesByCapacityOrDefault = function(capacityNeeded, defaultValue) {
  return this.capacity > capacityNeeded ? this : defaultValue;
};

ClassRoom.prototype.returnIfAppliesByCapacityAndM2OrDefault = function (capacityNeeded, squareNeeded, defaultValue) {
  return this.capacity > capacityNeeded && this.m2 > squareNeeded ? this : defaultValue;
};

ClassRoom.prototype.returnIfAppliesByCapacityAndM2AndComputersOrDefault = function (capacityNeeded, squareNeeded, computersNeeded, defaultValue) {
  return this.capacity > capacityNeeded && this.m2 > squareNeeded && this.computers > computersNeeded ? this : defaultValue;
};


module.exports = ClassRoom;