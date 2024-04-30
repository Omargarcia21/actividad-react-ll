import { useState } from "react";
import Results from "./results";
import style from "./searchBarStyle.css"

export default function SearchBar({items, onItemSelected}){
    const [query, setQuery] = useState("ma");
    const [results, setResults] = useState([]);

    function handleChange (e){
        const value = e.target.value;
        setQuery(value);
    }


    function handleResults(items) {
        setResults(items);
    }



    return (
        <div className="searchbar" style={style}>
            {results && <div>{results.length} results</div>}
            <input className="inputSearchBar" style={style} type="text" onChange={handleChange} value={query} />
            <Results items={items} onItemSelected={onItemSelected} query={query} onResultsCalculated={handleResults}  />
        </div>
    )
};