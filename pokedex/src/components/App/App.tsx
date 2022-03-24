import React from 'react';
import './App.css';
import Pokedex from './../Pokedex/Pokedex';
import { pokemonData } from "./../../data/pokemonData";
import { PokemonSchema, PokemonSpritesSchema, UnpatchedPokemonSchema } from '../../types/PokemonSchema';

interface AppState {
    searchField: string;
    allPokemons: PokemonSchema[];
    searchPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
}

class App extends React.Component<any, AppState> {
    state = {
        searchField: '',
        allPokemons: [],
        searchPokemons: [],
        selectedPokemon: undefined
    };

    patchPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
        const patchedPokemons = pokemons.map( (item) => {
            let parsedSprites: PokemonSpritesSchema = {
                normal: undefined,
                animated: undefined,
            };

            try {
                parsedSprites = item.sprites && JSON.parse(item.sprites);
            }
            catch (e) {
                console.log("Exception while parsing the sprites: ", e);
            }

            const patchedPokemon: PokemonSchema = {
                ...item,
                sprites: parsedSprites
            }
            return patchedPokemon;
        });
        return patchedPokemons;
    };

    componentDidMount() {
        // Patch the stringified pokemon sprites
        const patchedPokemons: PokemonSchema[] = this.patchPokemonData(
            pokemonData
        );

        // Update the state wiith the patched pokemons
        this.setState( {
            allPokemons: patchedPokemons,
            searchPokemons: patchedPokemons
        });
    }
    
    selectPokemon = (value: string) => {
        const { searchPokemons } = this.state;
        const selectedPokemon = searchPokemons.find( (pokemon: PokemonSchema) => pokemon.name === value);
        this.setState({ selectedPokemon })
    }


    handleSearch = (value: string) => {
        const { allPokemons } = this.state;
        const searchPokemons = allPokemons.filter(
            (pokemon: PokemonSchema) => {
                return (
                    pokemon.name && 
                    pokemon.name
                        .toLowerCase().includes(value.toLowerCase())
                )
            }
        );
        this.setState({searchField: value, searchPokemons});
    }

    render() {
        return (
            <div className="app">
                <h1>Pokedex</h1>
                <Pokedex searchPokemons={this.state.searchPokemons} selectedPokemon={this.state.selectedPokemon} handleSearch={this.handleSearch} selectPokemon={this.selectPokemon} />
            </div>
        );
    }
};
export default App;