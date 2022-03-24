import "./SearchBox.css";

interface SearchBoxProps {
    handleSearch: (value: string) => void;
}


const SearchBox = ({ handleSearch }: SearchBoxProps) => {

    const handleChange = (e: string) => {
        handleSearch(e);
    }

    return (
        <input className="search" type="search" placeholder="Serach Pokemon" onChange={ (e) => handleChange(e.target.value) } />
    )
}

export default SearchBox