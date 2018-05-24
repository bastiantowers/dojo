import PasoDeCheckout from './PasoDeCheckout';
import SeleccionDeEnvio from './SeleccionDeEnvio';

import MapaDeSucursales from '../pasos/MapaDeSucursales';
import Review from './Review';

import Inconsistencia from '../Inconsistencia';

import Oxxo from '../pagos/Oxxo'


class SeleccionDeEnvioReview extends SeleccionDeEnvio {
  constructor() {
    super();
  }

  envioADomicilio() {
    // Aca hay que saber si devuelve una inconsistencia o no
    // Hardcodeo un poco ahora para seguir...
    if(PasoDeCheckout.medioDePago instanceof Oxxo) {
      return new Inconsistencia();
    } else {
      return new Review();
    }
  }

  retiroEnCorreo() {
    return new MapaDeSucursales();
  }
}

export default SeleccionDeEnvioReview;