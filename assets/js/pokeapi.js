const pokeApi = {}


function convertPokeAPIemModelPokemon(pokeDetail){
    const poke = new Pokemon()
    poke.number=pokeDetail.order;
    poke.name=pokeDetail.name;
    const types = pokeDetail.types.map((typeSlot)=>typeSlot.type.name);
    const [type] = types;    
    poke.types=  types;
    poke.type =type;
    poke.photo = pokeDetail.sprites.other.dream_world.front_default;

    return  poke;
}

pokeApi.getPokemonDetails = (pokemon)=>{
    return fetch(pokemon.url)
            .then((response)=>response.json())
            .then(convertPokeAPIemModelPokemon)
}

pokeApi.getPokemons = (poffset=0, plimite=3)=>{
    const url = 'https://pokeapi.co/api/v2/pokemon?offset='+poffset+'?limit='+plimite+'';
    return fetch(url)
    .then((response)=>response.json())
    .then((jsonBody)=>jsonBody.results)    
    .then((pokemons)=>pokemons.map(pokeApi.getPokemonDetails))
    .then((detailsRequest)=>Promise.all(detailsRequest))
    .then((pokemonDetails)=>pokemonDetails)
    
}



