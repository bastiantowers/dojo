import Espada from './Espada'
class CuatroDeEspada extends Espada {
    constructor() {
        super();
        this.envidoValue = 4;
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

export default CuatroDeEspada;