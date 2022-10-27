export default class Producto{
    constructor(nombre, codigo, cantidad, costo){
        this.nombre = nombre;
        this.codigo = codigo;
        this.cantidad = cantidad;
        this.costo = costo;
        this.next = null;
        this.previous = null;
    }

    getCodigo(){
        return this.codigo; 
    }

    getNombre(){
        return this.nombre; 
    }

    getCantidad(){
        return this.cantidad; 
    }

    getCosto(){
        return this.costo;    
    }

    getInfo(){
        return `<p> ${this.getCodigo()}.- Producto: ${this.getNombre()} Cantidad: ${this.getCantidad()} Costo: ${this.getCosto()}$ </p>`; 
    }
}
