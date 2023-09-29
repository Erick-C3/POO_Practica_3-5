const NuestrosClientes = require("./NuestrosClientes.js");
const Producto  = require("./Producto.js");

//
class ClienteComercial extends NuestrosClientes {
    #descuento;
    constructor(nombre, monto, desc) {
        super(nombre, monto);
        this.#descuento = desc;    
    }
    
    setDescuento (desc) {
        this.#descuento = desc;
    }

    getDescuento() {
        return (this.#descuento);
    }

// Procedimientos 



}

module.exports = ClienteComercial;


