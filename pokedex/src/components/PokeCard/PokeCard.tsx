import './PokeCard.css';

interface PokeCardProps {
    spriteUrl?: string | undefined;
    name: string;
    selectPokemon: (value: string) => void;
}

const PokeCard = ({spriteUrl, name, selectPokemon}: PokeCardProps) => {

    const handleClick = (pokemon: string) => {
        selectPokemon(pokemon);
    }

    return (
        <div className="poke-card-container">
            <div className="poke-card-image" onClick={ (e) => selectPokemon(name) }>
                <img src={spriteUrl} alt={name} className="pokemon-sprite" />
                <p>{name}</p>
            </div>
        </div>
    );
}

export default PokeCard;