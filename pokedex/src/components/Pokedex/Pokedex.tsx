import React from "react";
import './Pokedex.css';
import PokeSearchResult from './../PokeSearchResult/PokeSearchResult';
import SearchBox from './../SearchBox/SearchBox';
import PokeList from './../PokeList/PokeList';
import { PokemonSchema } from "../../types/PokemonSchema";

interface PokedexProps {
    searchPokemons: PokemonSchema[];
    handleSearch: (value: string) => void;
    selectPokemon: (value: string) => void;
    selectedPokemon: PokemonSchema | undefined;
}

const Pokedex = ( { searchPokemons, selectedPokemon, handleSearch, selectPokemon }: PokedexProps ) => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <p>list of pokemon</p>
                <SearchBox handleSearch={handleSearch} />
                <PokeList searchPokemons={searchPokemons} selectPokemon={selectPokemon} />
            </div>
            <div className="poke-search-result-container">
                <PokeSearchResult selectedPokemon={selectedPokemon}/>
            </div>
        </div>
    );
};

export default Pokedex;