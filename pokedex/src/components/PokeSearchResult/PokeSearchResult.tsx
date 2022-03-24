import { PokemonSchema } from "../../types/PokemonSchema";
import './PokeSearchResult.css';

interface PokeSearchResultProps {
    selectedPokemon: PokemonSchema | undefined;
}
const PokeSearchResult = ( {selectedPokemon}: PokeSearchResultProps) => {   
    return (
        <div className="poke-result-card">
            {
                selectedPokemon
                    ?(
                        <div>
                            <p>{selectedPokemon.name}</p>
                            {selectedPokemon.sprites && (
                                <img 
                                    className="pokemon-selected"
                                    src={selectedPokemon.sprites.animated || selectedPokemon.sprites.normal} 
                                    alt={selectedPokemon.name} 
                                />
                            )}
                            <p>Id: {selectedPokemon.id}</p>
                            <p>Height: {selectedPokemon.height}</p>
                            <p>Weight: {selectedPokemon.weight}</p>
                            <p>Base XP:{selectedPokemon.base_experience}</p>
                        </div>
                    )
                    :(
                        <div>Welcome to Pokedex</div>
                    )
            }
        </div>
    );
}

export default PokeSearchResult;