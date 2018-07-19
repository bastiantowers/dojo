import Copa from './Copa'
class SieteDeCopa extends Copa {
  constructor() {
    super();
    this.envidoValue = 1;
  }

  challengeDosDeBasto(dosDeBasto) {
    return dosDeBasto;
  }

  getEnvidoValue() {
      return this.envidoValue;
  }

}

export default SieteDeCopa;