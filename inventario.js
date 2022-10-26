export default class Inventario{
    constructor(){
        this.primero = null;
        this.size = 0;
    }


    agregar(nuevo){
        if(this.primero===null){
            this.primero = nuevo;
        }else{
            let aux = this.primero;
            while(aux.next != null){
                aux = aux.next;
            }
            aux.next = nuevo;
        }
        this.size++
    }

    agregarInicio(nuevo){
        primero = this.primero;

        nuevo.next = primero; 
    }

    eliminar(numero){
        let current = this.primero;
        let previous = null;

        while(current != null){
            if(current.numero === numero){
                if(!previous){
                    this.primero = current.next;
                }else {
                    previous.next = current.next;
                }
                this.size--;
                return current.numero;
            }
            else{
                previous=current;
                current=current.next;
            }
        }
        return null;
    }


    listado(){
        if(!this.size){
            return null;
        } else {
            let current = this.primero;
            let result = '';
            while (current!=null) {
                result += `<tr id='${current.codigo}'><td>Codigo: ${current.codigo} Nombre: ${current.nombre} Cantidad: ${current.cantidad} Costo: ${current.costo} </td></tr>`;
                current = current.next;
            }
    
            return result;
        }
    }

    listadoInverso(){
        if(!this.size){
            return null;
        } else {
            let current = this.primero;
            let result = '';
            
            while (current) {
                result = `<tr id='${current.codigo}'><td>Codigo: ${current.codigo} Nombre: ${current.nombre} Cantidad: ${current.cantidad} Costo: ${current.costo}</td></tr>`+result;
                current = current.next;
            }
    
            return result;
        }
    }


    busqueda(codigo){
        let current = this.primero;
        let previous = null;
        let result = "";
        let key = false;

        while(current != null && key != true){
            if(current.codigo == codigo){
                key = true
                result += `<tr id='${current.codigo}'><td>Codigo: ${current.codigo} Nombre: ${current.nombre} Cantidad: ${current.cantidad} Costo: ${current.costo} </td></tr>`;
            }
            else{
                previous=current;
                current=current.next;
            }
        }
        return result;
    }
}