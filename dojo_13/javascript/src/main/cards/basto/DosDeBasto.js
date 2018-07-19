import Basto from './Basto'
class DosDeBasto extends Basto {
  constructor() {
    super();
    this.envidoValue = 2;
  }

  challenge(card) {
    return card.challengeDosDeBasto(this);
  }

  getEnvidoValue() {
      return this.envidoValue;
  }

}

export default DosDeBasto;