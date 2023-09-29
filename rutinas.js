const {clientes} = require("./defClientes.js");
const productos = require("./defProductos.js");

function reporteClientes() {
    for(let i=0; i  <clientes.length; i++)
    clientes[i].montoGastado();
}

function reporteProductos() {
    for(let i=0; i < productos.length; i++)
    productos[i].cuantoStockTienes();
}

function reporteVentasA() {
    for(let i=0; i < productos.length; i++)
    productos[i].reporteDeVentas();
}

function estadoProductosClientes() {
    reporteClientes();
    reporteProductos();
    reporteVentasA();
}

module.exports = {  reporteClientes,
                    reporteProductos,
                    reporteVentasA,
                    estadoProductosClientes };