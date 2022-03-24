import './PokeList.css';
import PokeCard from './../PokeCard/PokeCard';
import { PokemonSchema } from './../../types/PokemonSchema';

interface PokeListProps {
    searchPokemons: PokemonSchema[];
    selectPokemon: (value: string) => void;
}
const PokeList = ({ searchPokemons, selectPokemon }: PokeListProps) => {
    return (
        <div className="poke-list-container">
            {
                searchPokemons.map( (pokemon) => {
                    return (
                        pokemon.name && (
                            <PokeCard
                                key = {pokemon.id}
                                name = {pokemon.name}
                                spriteUrl = {pokemon.sprites ? pokemon.sprites.normal : ""}
                                selectPokemon = {selectPokemon}
                            />
                        )
                    );
                })
            }
        </div>   
    )
};

export default PokeList;