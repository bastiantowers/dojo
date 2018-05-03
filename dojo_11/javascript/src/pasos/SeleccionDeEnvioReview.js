import PasoDeCheckout from './PasoDeCheckout';
import SeleccionDeEnvio from './SeleccionDeEnvio';

import MapaDeSucursales from '../pasos/MapaDeSucursales';
import Review from './Review';


class SeleccionDeEnvioReview extends PasoDeCheckout {
  constructor() {
    super();
  }

  envioADomicilio() {
    const nextStep = new Review();
    return nextStep;
  }

  retiroEnCorreo() {
    return new MapaDeSucursales();
  }
}

export default SeleccionDeEnvioReview;