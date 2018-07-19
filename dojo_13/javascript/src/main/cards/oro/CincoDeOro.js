import Oro from './Oro'
class CincoDeOro extends Oro{
  constructor() {
    super();
    this.envidoValue = 1;
  }

  challenge(card) {
    return card.challengeCincoDeOro(this);
  }

  getEnvidoValue() {
      return this.envidoValue;
  }

}

export default CincoDeOro;