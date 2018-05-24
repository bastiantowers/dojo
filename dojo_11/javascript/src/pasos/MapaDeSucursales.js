import PasoDeCheckout from './PasoDeCheckout';
import SeleccionDeMedioDePago from '../pasos/SeleccionDeMedioDePago'

class MapaDeSucursales extends PasoDeCheckout {
  constructor() {
    super();
  }

  seleccionSucursalMasCercana () {
    const nextStep = new SeleccionDeMedioDePago();
    return nextStep;
  }

}

export default MapaDeSucursales;