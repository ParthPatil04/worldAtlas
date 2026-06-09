import { useEffect, useState, useTransition } from "react";
import { getAllCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

const Country = () => {
  
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
      startTransition(async () => {
          const countryData = await getAllCountryData();
          console.log(countryData);
          setCountries(countryData.data);
      })
  }, []);

  if(isPending){
      return <Loader />;
  }
  console.log(search, filter);

   const searchCountry = (country) => {
    if(search){
     return country.name.common.toLowerCase().includes(search.toLowerCase());
    } else {
      return true;
    }
   }

   const filterRegion = (country) => {
     if(filter === "all"){
        return true;
     } 
     return country.region.toLowerCase() === filter.toLowerCase();
   }

  // filtering the countries based on search and filter criteria
  const filteredCountries = countries.filter((country) => {
     return searchCountry(country) && filterRegion(country);
  })

  return (
    <section className="country-section container">

      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries} />
        <ul className="grid grid-four-cols">
          {
            filteredCountries.length === 0 ? <p>No Results Found</p> : 
            filteredCountries.map((curCountry, index) => {
              const { name, population, region, capital, flags } = curCountry;
              return (
                // <CountryCard key={index} country={curCountry} />
                <CountryCard key={index} name={name} population={population} region={region} capital={capital} flags={flags} />
              )
            })
          }

        </ul>
    </section>
  )
}

export default Country