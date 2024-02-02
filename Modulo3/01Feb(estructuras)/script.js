//arreglo
let frutas = ['naranja','peras','mangos'];
console.log(frutas)

//agregar elemento a un arreglo
frutas.push('fresa');
console.log(frutas);

console.log(`el primer elemento es: ${frutas[0]}`);
console.log(`el ultimo elemento es: ${frutas[frutas.length - 1]}`);

//este metodo elimina el ultimo elemento del arreglo
frutas.pop();
console.log(frutas);

//este metodo elimina el primer elmento del arreglo
frutas.shift();
console.log(frutas);

let verduras = ['zanahoria','jitomate','cebolla'];

//arreglo de arreglos
let alimentos = [frutas, verduras];

//creamos un arreglao creando copias de los elementos de los otros arreglos
//x para evitar modificar un elemnto de alguno de los arreglos y modifique el nuevo arreglo de arreglos 
let alimentoscopias = [...frutas, ...verduras];
let alimentoscopias1 = [[...frutas], [...verduras]];

//arreglo de arreglo x copia
console.log(alimentoscopias);

//pilas
class pila{
    constructor(){
        this.elementos = [];
    }
    //metodo push
    agregar(nuevoElemento){
        this.elementos.push(nuevoElemento);
    }
    //metodo pop
    eliminar(){
        if (this.elementos != 0){
            this.elementos.pop();
        }
    }
    //metodo peek
    mostrarUltimoElemento(){
        if (this.elementos,length != 0){
        return this.elementos[this.elementos.length - 1];
        }
        return null
    }
}

let pilaNavegacionWEb = new pila();
pilaNavegacionWEb.agregar('www.google.com')
pilaNavegacionWEb.agregar('www.youtube.com')
pilaNavegacionWEb.agregar('www.linkedin.com')
pilaNavegacionWEb.agregar('www.liverpool.com.mx')