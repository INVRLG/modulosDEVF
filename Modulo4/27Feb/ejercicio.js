//PILA = LIFO
function obtenerElementosDePila(pila, numero) {
    const resultado = [];
  
    // Verificar que el número sea válido
    if (numero <= 0) {
      console.log('El número debe ser mayor que cero.');
      return resultado;
    }
  
    // Extraer elementos de la pila hasta alcanzar el número dado o hasta que la pila esté vacía
    for (let i = 0; i < numero && pila.length > 0; i++) {
      resultado.push(pila.pop());
    }
  
    return resultado; // Invertir el resultado para que coincida con el orden original
  }
  
  // Ejemplo de uso
  const pila = ['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandía', 'Melón'];
  const numero = 4;
  
  const elementosObtenidos = obtenerElementosDePila(pila.slice(), numero);
  console.log('Resultado:', elementosObtenidos);
  console.log(pila);

  
  let arreglos = [2,10,1,9,5,19,1];

console.log("arreglo desordenado");

//sort convierte los valores a cadenas y orden alfabeticamente
arreglos.sort();

console.log("arreglo ordenado")
console.log(arreglos);



//ARREGLO 2 
let arreglos2 = [2,10,1,9,5,19,1];

console.log("arreglo desordenado");

//sort convierte los valores a cadenas y orden alfabeticamente
arreglos2.sort();



console.log("arreglo ordenado")
console.log(arreglos2);