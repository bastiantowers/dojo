import Espada from './Espada'
class AnchoDeEspada extends Espada {
  constructor() {
    super();
    this.envidoValue = 1;
  }

  challenge() {
    return this;
  }

  challengeAnchoDeBasto(/* anchoDeBasto */) {
    return this;
  }

  getEnvidoValue() {
    return this.envidoValue;
  }
}

export default AnchoDeEspada;