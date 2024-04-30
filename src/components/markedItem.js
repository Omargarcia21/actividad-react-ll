import { useMemo } from "react";
import style from "./markedItemStyle.css";

export default function MarkedItem ({item, query, onClick}) {

    const {left, center, right} = useMemo(() => getPosition(item, query),[item, query])

    function getPosition(item, query){
        const index = item.title.toLowerCase().indexOf(query);
        const left =item.title.slice(0, index);
        const right = item.title.slice(index + query.length);
        const center = item.title.slice(index, index + query.length);

        return {
            left,
            center,
            right,
        };
    }
    function handleClick () {
        onClick(item);
    }
    return ( 
        <a onClick={handleClick}   style={style}>
            {left} 
            <span>{center}</span> 
            {right}
        </a>
    );
}