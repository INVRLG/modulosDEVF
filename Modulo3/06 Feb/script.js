class nodo{
    constructor(valor){
        this.valor = valor;
        this.hijoizquierdo = null;
        this.hijoderecho = null;
    }
}

class arbolBinario{
    constructor(){
        this.raiz = null;
    }
    insertar(valor){
        if(this.raiz == null){
            let nuevoNodo = new nodo(valor);
            this.raiz = nuevoNodo;
        }
        else{
            let nodoActual = this.raiz;

            while(true){
            //preguntar si me muevo izq o der 
                if(valor <= nodoActual.valor)
                {   
                    //preguntar si hay alguien en la izq
                    if(nodoActual.hijoizquierdo==null){
                        let nuevoNodo= new nodo(valor);
                        nodoActual.hijoizquierdo = nuevoNodo;
                        return;
                    }
                    else{
                        nodoActual = nodoActual.hijoizquierdo;
                    }
                    //si no hay hijo izq el nuevo nodo se agrega aqui 
                        
                }   
                else{
                    //preguntar si hay alguien en la der
                    if(nodoActual.hijoderecho==null){
                        let nuevoNodo= new nodo(valor);
                        nodoActual.hijoderecho = nuevoNodo;
                        return;
                    }
                    else{
                        nodoActual = nodoActual.hijoderecho;
                        //si no hay hijo izq el nuevo nodo se agrega aqui 

                    }
                }

            }
        }
    }
}