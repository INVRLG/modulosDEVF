//COLA = FIFO
class cola{

    constructor(){
        this.elementos =[];
    }
    //enqueue
    agregarElemento(nuevoelemento){
        this.elementos.unshift(nuevoelemento);
    }

    //queue
    eliminarElemento(){
        this.elementos.pop();
    }

    mostrarUltimoElemento(){
    }
    mostrarPrimerElemento(){
        return this.elementos[this.elementos.length - 1];
    }
}

let filaBoletos = new cola();
filaBoletos.agregarElemento('juan');
filaBoletos.agregarElemento('pedro');
filaBoletos.agregarElemento('carlos');
filaBoletos.agregarElemento('joss');
filaBoletos.agregarElemento('isa');

console.log(`La primera persona en llegar fue: ${filaBoletos.mostrarPrimerElemento()}`);
console.log(`La siguiente persona en llegar fue: ${filaBoletos.mostrarUltimoElemento()}`);

filaBoletos.eliminarElemento();
console.log(`el siguiente en llegar fue: ${filaBoletos.mostrarPrimerElemento()}`);




const colaBoletos = [
    { user: 'User1', ticket: true },
    { user: 'User2', ticket: true },
    { user: 'User3', ticket: false },
    { user: 'User4', ticket: true },
    { user: 'User5', ticket: false },
    { user: 'User6', ticket: false },
    { user: 'User7', ticket: true },
    { user: 'User8', ticket: true },
    { user: 'User9', ticket: true },
    { user: 'User10', ticket: false },
    { user: 'User11', ticket: true }
];
