export const SearchFilter = ({search, setSearch, filter, setFilter, countries, setCountries}) => {


    const handleInputChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };
    
    const handleSelectChange = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
    }

    const sortCountries = (order) => {
      const sortedList = [...countries].sort((a, b) => 
      {
       return (
        order === "ascending" ? a.names.common.localeCompare(b.names.common) : b.names.common.localeCompare(a.names.common)
       )
      });
      setCountries(sortedList);
    }
    
    return (
        <section className="section-searchFilter">
            <input type="text"  className="select-section" placeholder="search" value={search} onChange={handleInputChange} />

            <button onClick={() => sortCountries("ascending")} className="select-section">Ascending</button>
            <button onClick={() => sortCountries("descending")} className="select-section">Descending</button>

            <div>
                <select name="" id="" className="select-section" value={filter} onChange={handleSelectChange} >
                    <option value="all">All</option>
                    <option value="africa">Africa</option>
                    <option value="americas">Americas</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}