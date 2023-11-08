import { useEffect } from "react";

function Filter({setActiveGenre, activeGenre, setFiltered, popular}) {

    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((movie) =>
         movie.genre_ids.includes(activeGenre)
         );
        setFiltered(filtered);
    },[activeGenre])

    return(
        <div className="filter-container">
            <button className={activeGenre === 0 ? 'active' : ''} onClick={() => setActiveGenre(0)}>All</button>
            <button className={activeGenre === 18 ? 'active' : ''} onClick={() => setActiveGenre(18)}>Triller</button>
            <button className={activeGenre === 28 ? 'active' : ''} onClick={() => setActiveGenre(28)}>Action</button>
        </div>
    )
}

export default Filter;