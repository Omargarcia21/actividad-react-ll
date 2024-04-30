import { useState, useMemo, useEffect} from "react";
import MarkedItem from "./markedItem";
import style from "./resultsStyle.css";

//homeworks es people
//movies es calendar
//songs es emails

export default function Results({
    items, 
    onItemSelected, 
    query, 
    onResultsCalculated,
}) {

    const [results, setResults] = useState([]);

    const filteredItems = useMemo(() =>  findMatch(items, query), [items, query]);

    useEffect(() => {
        onResultsCalculated(results);
    }, [results]);

    function findMatch(items, query) {
        const res = items.filter(i => {
            return i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0;
        });
        setResults(res);
        return res;
    }

    return (
        <div className="results" style={style}>
            {query !== "" ? filteredItems.map((item) => <MarkedItem key={item.id} item={item} query={query} onClick={onItemSelected} />) : ""}
        </div>
    );
};