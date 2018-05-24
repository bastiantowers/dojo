import { expect } from 'chai';

import SeleccionDeEnvio from '../src/pasos/SeleccionDeEnvio';
import SeleccionDeMedioDePago from '../src/pasos/SeleccionDeMedioDePago';
import MapaDeSucursales from '../src/pasos/MapaDeSucursales';
import Review from '../src/pasos/Review';

import Oxxo from '../src/pagos/Oxxo'
import Boleto from '../src/pagos/Boleto'


describe("Dojo 11", () => {
    it('cuando se selecciona envio a domicilio el proximo paso debería ser seleccion de medio de pago', () => {
        // Con Precargadas y Dinero En Cuenta o Tarjeta Precargada
        // Paso 1 -> Selecciona Express a Domicilio
        // Paso 2 -> ¿Como quieres pagar? -> Dinero en Cuenta
        // Paso 3 -> Review -> Modificar Envio
        // Paso 4 -> Selecciona Retiro en Sucursal
        // Paso 5 -> Selecciona Sucursal
        // Paso 6 -> Review

        // Paso 1 -> ¿Como queres recibir el producto? 00_01 -> Enviar a mi ubicacion actual
        // Paso 2 -> Envio a Villa Urquiza 01_01
        // Zeplin: https://zpl.io/25zKgWV
        const seleccionDeEnvio = new SeleccionDeEnvio();
        const proximoPaso = seleccionDeEnvio.envioADomicilio();

        // Zeplin: https://zpl.io/br1Km7L
        expect(proximoPaso instanceof SeleccionDeMedioDePago).to.be.true;
    });

    it('cuando se selecciona envio a domicilio desde la review el proximo paso debería ser review', () => {
        const review = new Review();

        const SeleccionDeEnvioReview = review.modificarEnvio();

        const proximoPaso = SeleccionDeEnvioReview.envioADomicilio();

        expect(proximoPaso instanceof Review).to.be.true;
    });

    it('cuando se selecciona envio a sucursal desde la review el proximo paso debería ser SucursalDeCorreo', () => {
        // Zeplin: https://zpl.io/be48RDa
        const review = new Review();

        const seleccionDeEnvioReview = review.modificarEnvio();

        // Zeplin: https://zpl.io/V10Ye52
        const proximoPaso = seleccionDeEnvioReview.retiroEnCorreo();

        expect(proximoPaso instanceof MapaDeSucursales).to.be.true;
    });

    it('cuando se selecciona envio a sucursal, y selecciono retiro en sucursal de correo, ' +
        ' llego al paso de payments y elijo OXXO, y llego a la Review. ' +
        'Desde la Review, modifico el envío a Envío a Domicilio, entonces genero una inconsistencia, ' +
        'que me pide modificar el medio de Pago, y selecciono entonces Boleto, ' +
        'por lo que entonces mi próximo paso debe ser Review', () => {

        const seleccionDeEnvio = new SeleccionDeEnvio();

        const mapaDeSucursales = seleccionDeEnvio.retiroEnCorreo();

        const seleccionDeMedioDePago = mapaDeSucursales.seleccionSucursalMasCercana();

        const review = seleccionDeMedioDePago.seleccionar(new Oxxo(0, 1000));

        const modificarEnvio = review.modificarEnvio();

        const inconsistencia =  modificarEnvio.envioADomicilio();

        const modificarMedioDePago = inconsistencia.modificarMedioDePago();

        const proximoPaso = modificarMedioDePago.seleccionar(new Boleto(0, 1500));

        expect(proximoPaso instanceof Review).to.be.true;
    });
});


