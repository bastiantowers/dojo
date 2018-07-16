import Copa from './Copa'
class CincoDeCopa extends Copa {
  constructor() {
    super();
    this.envidoValue = 5;
  }

  challenge(card) {
    return card.challengeCincoDeCopa(this);
  }

  getEnvidoValue() {
    return this.envidoValue;
  }

  getPalo() {
    return super.getPalo();
  }
}

export default CincoDeCopa;