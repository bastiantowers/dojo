import Basto from './Basto'
class TresDeBasto extends Basto {
  constructor() {
    super();
    this.envidoValue = 1;
  }

  challenge(card) {
    return card.challengeTresDeBasto(this);
  }

  getEnvidoValue() {
      return this.envidoValue;
  }

}

export default TresDeBasto;