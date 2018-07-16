import Espada from './Espada'
class AnchoDeEspada extends Espada {
  constructor() {
    super();
    const envidoValue = 1;
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

  getPalo() {
    return super.getPalo();
  }
}

export default AnchoDeEspada;