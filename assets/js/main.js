console.log("Sucesso!")

const offset =0;
const limite=10
const url = 'https://pokeapi.co/api/v2/pokemon?offset='+offset+'?limit='+limite+'';

const pokemonList = document.getElementById("pokemonslist");
const btnLoadMore = document.getElementById("loadMoreButton");
var limitPadrao= 10;
var offsetPadrao=0.;

btnLoadMore.addEventListener('click',()=>{ 
    offsetPadrao+=limitPadrao;   
    loadMorePokemons(offsetPadrao,limitPadrao);
})
// function convertPokemonTypeList(pList){
//     return pList.map((typeSlot)=>`<li  class="type">${type}</li>`)
// }

function converterPokemonToHTML(pokemon){
   return `
   <li class="pokemon" >
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type)=>`<li class="type">${type}</li>`).join('')}                   
        </ol>
        <img src="${pokemon.photo}"  alt="  Bulbasaur"></img>
    </div>            
</li>
    `
}


function loadMorePokemons(poffset, plimite){
    
    pokeApi.getPokemons(poffset,plimite).then((pokemons =[])=>{
        pokemonList.innerHTML +=  pokemons.map(converterPokemonToHTML).join('');      
    })    
}
loadMorePokemons(offsetPadrao,limitPadrao);