export default class Inventario{
    constructor(){
        this.primero = null;
        this.size = 0;
    }


    agregar(nuevo){
        let temp;

        if (this.primero == null){
            this.primero = nuevo;
        }else if(nuevo.getCodigo() < this.primero.getCodigo()) {
            temp = this.primero;
            nuevo.next = temp;
            temp.previous = nuevo;
            this.primero = nuevo;
        }else {
            temp = this.primero;
            while (temp.next != null && temp.getCodigo() < nuevo.getCodigo()){
                temp = temp.next;
            }
            if(nuevo.getCodigo() < temp.getCodigo()) {
                nuevo.next = temp;
                nuevo.previous = temp.previous;
                temp.previous.next = nuevo;
                temp.previous = nuevo;
            } else if(nuevo.getCodigo() > temp.getCodigo()) {
                nuevo.previous = temp;
                temp.next = nuevo;
            }
        }
        this.size++;
    }

    eliminar(numero){
        let aux = null;

        if(!this.primero) {
            return null;
        }else {
            let temp = this.primero;

            while(temp.next != null) {
                temp = temp.next;
                if(this.primero.getCodigo() == numero) {
                    aux = this.primero;
                    this.primero = this.primero.next;
                }else if (temp.getCodigo() == numero) {
                    aux = temp;
                    aux.previous.next = aux.next;
                    aux.next = null;
                    aux.previous = null;
                    return aux;
                }
            }
        }

        this.size--;
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