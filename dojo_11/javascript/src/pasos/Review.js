import SeleccionDeEnvioReview from './SeleccionDeEnvioReview';
import PasoDeCheckout from './PasoDeCheckout';
import Inconsistencia from './../Inconsistencia'

class Review extends PasoDeCheckout {
    constructor() {
        super();
    }

    modificarEnvio() {
        return new SeleccionDeEnvioReview();
    }
}

export default Review;