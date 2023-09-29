const NuestrosClientes = require("./NuestrosClientes.js");
const Producto  = require("./Producto.js");
//
class ClienteResidencial extends NuestrosClientes {
    #fechaCumpleanios;
    constructor(nombre, monto, fechaCumple) {
        super(nombre, monto);
        this.#fechaCumpleanios = fechaCumple;    // string cuatro caracteres
    }
    
    setFechaCumpleanios (fechaC) {
        this.#fechaCumpleanios = fechaC;
    }

    getFechaCumpleanios() {
        return (this.#fechaCumpleanios);
    }

}

module.exports = ClienteResidencial;


