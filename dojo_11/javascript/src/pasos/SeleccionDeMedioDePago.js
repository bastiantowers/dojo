import PasoDeCheckout from './PasoDeCheckout';
import Review from './Review';

class SeleccionDeMedioDePago extends PasoDeCheckout {
  constructor() {
    super();
  }

  seleccionar(medioDePago) {
    PasoDeCheckout.medioDePago = medioDePago;
    return new Review();
  }
}

export default SeleccionDeMedioDePago;