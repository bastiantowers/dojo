import Review from './../pasos/Review';

class Flow {
  constructor() {
    //super();

    this.flowMapperConfig = {
      "undefined": this.getUndefinedStep,
    };
  }

  resolveStep(currentSelection) {
    return this.flowMapperConfig[currentSelection]();
  }

  getUndefinedStep() {
    return "pepe";
  }
}

export default Flow;