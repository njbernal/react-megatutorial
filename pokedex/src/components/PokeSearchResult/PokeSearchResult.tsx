import { render } from "@testing-library/react";
import React from "react";
import './PokeSearchResult.css';

const PokeSearchResult = () => {
    const selectedPokemon = true;

    return (
        <div className="poke-result-card">
            {
                selectedPokemon
                    ?(
                        <div>
                            <p>Name:</p>
                            <p>Id:</p>
                            <p>Height:</p>
                            <p>Weight:</p>
                            <p>Base Exp: 100xp:</p>
                        </div>
                    )
                    :(
                        <div>something else</div>
                    )
            }
        </div>
    );
}

export default PokeSearchResult;