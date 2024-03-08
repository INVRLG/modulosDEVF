import request from "request"

const url = 'https://pokeapi.co/api/v2/pokemon/snorlax';

request.get(url, (error, response)=>{
    console.log('Error',error);
    console.log('Respuesta',response);
}); 