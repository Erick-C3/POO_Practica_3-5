const ClienteComercial = require("./ClienteComercial.js");
const ClienteResidencial = require("./ClienteResidencial.js");

//  AQUÍ SE GENERAN LOS CLIENTES (solamente agregar a continuacíon dentro de los corchetes)
const clientes = [ new ClienteResidencial("Juan", 0, "2505"),  // Nombre, saldo y fecha de nac 25 de mayo
                   new ClienteResidencial("Pedro", 0, "0907"),
                   new ClienteResidencial("Carlos", 0, "1708"),
                   new ClienteResidencial("Luis", 0, "1210"),   
                   new ClienteComercial("AlmacenDonPepe", 0, 0.25),
                   new ClienteComercial("MercadoTito", 0, 0.25),
                 ];
//
// Definición de los nombres
const Juan              = clientes[0];
const Pedro             = clientes[1];
const Carlos            = clientes[2];
const Luis              = clientes[3];
const AlmacenDonPepe    = clientes[4];
const MercadoTito       = clientes[5];


// Exportación de objetos
module.exports = { clientes, Juan, Pedro, Carlos, Luis, 
                   AlmacenDonPepe, MercadoTito };
