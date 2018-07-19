import Basto from './Basto'
class AnchoDeBasto extends Basto {
  constructor() {
    super();
    this.envidoValue = 1;
  }

  challenge(card) {
    return card.challengeAnchoDeBasto(this);
  }

  getEnvidoValue() {
      return this.envidoValue;
  }

}

export default AnchoDeBasto;