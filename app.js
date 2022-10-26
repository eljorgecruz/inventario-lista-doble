import Producto from "./producto.js";
import Inventario from "./inventario.js";

let inventario = new Inventario();

const btnAgregar = document.getElementById("agregar");
btnAgregar.addEventListener('click', () => {
    let tcod = document.getElementById("codigo").value;
    let tnom = document.getElementById("nombre").value;
    let tcan = document.getElementById("cantidad").value;
    let tcos = document.getElementById("costo").value;

    let pro = new Producto(tnom, tcod, tcan, tcos);
    inventario.agregar(pro);
    listado.innerHTML += `Se ha agregado un producto al inventario: ${tcod}.- Nombre: ${tnom} - Cantidad: ${tcan} - Costo: ${tcos}<br>`;
});

const btnEliminar = document.getElementById('eliminar');
btnEliminar.addEventListener('click', ()=>{
    let tcod = document.getElementById("codigo").value;

    inventario.eliminar(tcod);
    listado.innerHTML += `Se ha eliminado un producto ${tcod} del inventario <br>`;
})

const btnListar = document.getElementById("listar");
btnListar.addEventListener('click', ()=>{
    let tabla = document.getElementById("tabla");
    tabla.innerHTML = '';
    tabla.innerHTML = inventario.listado();
    document.getElementById('titulolistado').innerHTML='';
    document.getElementById('titulolistado').innerHTML='Listado';
    listado.innerHTML += "Se enlistaron los productos del inventario <br>"
});

const btnListarInvertido = document.getElementById("listarInverso");
btnListarInvertido.addEventListener('click', ()=>{
    let tabla = document.getElementById("tabla");
    tabla.innerHTML = '';
    tabla.innerHTML = inventario.listadoInverso();
    document.getElementById('titulolistado').innerHTML='';
    document.getElementById('titulolistado').innerHTML='Listado Inverso';
    listado.innerHTML += "Se enlistaron los productos del inventario a la inversa <br>"
});


const btnBuscar = document.getElementById("buscar");
btnBuscar.addEventListener("click",()=>{
    let tcod = document.getElementById("codigo").value; 
    let pro = inventario.busqueda(tcod);

    document.getElementById("listadoTotal").innerHTML += pro;
    listado.innerHTML += "Se realizo la busqueda del producto <br>"
     
});
