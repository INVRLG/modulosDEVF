document.addEventListener('DOMContentLoaded', function() {
    const pokedexContainer = document.getElementById('pokedex');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    const searchInput = document.getElementById('searchInput');
  
    function getPokemonData(url) {
      return fetch(url).then(response => response.json());
    }
  
    // Función para mostrar los detalles del Pokémon
    function displayPokemonDetails(pokemon) {
      // Función para capitalizar la primera letra del nombre del Pokémon
      function letraMayuscula(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
  
      const firstAbility = pokemon.abilities[0].ability.name;
      const firstMove = pokemon.moves[0].move.name;
      const pokemonType = pokemon.types[0].type.name;
      const capitalizedPokemonName = letraMayuscula(pokemon.name);
  
      modalContent.innerHTML = `
        <h2>${capitalizedPokemonName}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${capitalizedPokemonName}">
        <p>Tipo: ${pokemonType}</p>
        <p>Habilidad principal: ${firstAbility}</p>
        <p>Movimiento: ${firstMove}</p>
      `;
  
      // Se crea un nuevo modal con Bootstrap y se muestra
      const modalInstance = new bootstrap.Modal(modal);
      modalInstance.show();
    }
  
    // Listener para la búsqueda
    searchInput.addEventListener('input', function() {
      const searchText = this.value.trim().toLowerCase(); // Elimina espacios y convierte a minúsculas para buscar en el endpoint
      const pokeapiUrl = `https://pokeapi.co/api/v2/pokemon/${searchText}`; // Se envuelve la URL en comillas invertidas para crear un template string válido
      getPokemonData(pokeapiUrl)
        .then(pokemonData => displayPokemonDetails(pokemonData))
        .catch(error => console.error('Error obteniendo el pokemon:', error));
    });
  });
  