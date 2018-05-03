import SeleccionDeEnvioReview from './SeleccionDeEnvioReview';
import PasoDeCheckout from './PasoDeCheckout';

class Review extends PasoDeCheckout {
    constructor() {
        super();
    }

    modificarEnvio() {
        //return new SeleccionDeEnvio(true);
        return new SeleccionDeEnvioReview();
    }
}

export default Review;