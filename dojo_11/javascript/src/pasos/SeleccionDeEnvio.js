import PasoDeCheckout from './PasoDeCheckout';

import SeleccionDeMedioDePago from '../pasos/SeleccionDeMedioDePago';
import MapaDeSucursales from '../pasos/MapaDeSucursales';

class SeleccionDeEnvio extends PasoDeCheckout {
    constructor() {
        super();
    }

    envioADomicilio() {
        const nextStep = new SeleccionDeMedioDePago();
        return nextStep;
    }

    retiroEnCorreo() {
        return new MapaDeSucursales();
    }
}

export default SeleccionDeEnvio;