import Espada from './Espada'
class SieteDeEspada extends Espada {
  constructor() {
    super();
    this.envidoValue = 7;
  }

  challengeAnchoDeBasto(anchoDeBasto) {
    return anchoDeBasto;
  }

  getEnvidoValue() {
    return this.envidoValue;
  }

  getPalo() {
    return super.getPalo();
  }
}

export default SieteDeEspada;