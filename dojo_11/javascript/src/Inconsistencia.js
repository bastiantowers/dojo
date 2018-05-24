import SeleccionDeMedioDePago from './pasos/SeleccionDeMedioDePago';

class Inconsistencia {
  constructor() {}

  modificarMedioDePago() {
    return new SeleccionDeMedioDePago();
  }
}

export default Inconsistencia;