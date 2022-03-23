import React from "react";
import './Pokedex.css';
import PokeSearchResult from './../PokeSearchResult/PokeSearchResult'

const Pokedex = () => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <p>list of pokemon</p>
            </div>
            <div className="poke-search-result-container">
                <PokeSearchResult />
            </div>
        </div>
    );
};

export default Pokedex;