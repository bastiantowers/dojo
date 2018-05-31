const ClassRoomUnavailable = require('./classRoomUnavailable');

function ClassRoom(name, capacity, label) {
  this.name = name;
  this.capacity = capacity;
  this.label = label;
}

ClassRoom.prototype.returnIfAppliesByCapacityOrDefault = function(capacityNeeded, defaultValue) {
  return this.capacity > capacityNeeded ? this : defaultValue;
};

module.exports = ClassRoom;