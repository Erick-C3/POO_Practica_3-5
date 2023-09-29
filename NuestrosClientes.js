//const Producto  = require("./Producto.js");
//
class NuestrosClientes {
    #nombreCliente;    // nombre completo 
    #montoComprado;    //acumulado por cliente 
     
    constructor(nombre, comprado) {
        this.#nombreCliente = nombre;
        this.#montoComprado = comprado;
        
    }

    setNombreCliente (nombre) {
        this.#nombreCliente = nombre;
    }

    getNombreCliente() {
        return (this.#nombreCliente);
    }

    setMontoComprado (monto) {
        this.#montoComprado += monto;   // se podría hacer una para poner en cero
    }

    getMontoComprado() {
        return (this.#montoComprado);
    }

// Procedimientos

    cualEstuNombre () {
        console.log("El Nombre de cliente es: "+this.getNombreCliente());
    }

    comprarProducto (prod, cant) {
        let desc = this.getDescuento();
        console.log("DescCompraProd: "+desc);
        console.log("Cliente: " + this.#nombreCliente + " está comprando: " + cant + " unidad/es de: "+prod.getNombreProducto() );
        this.#montoComprado += ((prod.getPrecioProducto())*cant)*(1-desc); 
    }
       
    montoGastado () {
        console.log("Cliente: " + this.#nombreCliente+", Cumpleaños: "+ this.getFechaCumpleanios() + ", lleva gastado: "+this.#montoComprado);
    }
    
    getDescuento () {   // El Descuento es de la subclase Clientes Comerciales
        return (0);
    }

    getFechaCumpleanios() { // El Cuemplanios es de la subclase CLientes Residenciales
        return ("no/aplica");
    }
}

module.exports = NuestrosClientes;
