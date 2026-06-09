import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Loader } from "../UI/Loader";
import { getSingleCountryData } from "../../api/postApi";

export const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [individualCountry, setIndividualCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const countryData = await getSingleCountryData(params.id);
      console.log(countryData);
      if(countryData.status === 200){
         setIndividualCountry(countryData.data[0]);
      }
      
    });
  }, []);


  if (isPending || !individualCountry) {
    return <Loader />;
  }
  const { name, population, region, subregion, capital, tld, currencies, languages, borders, flags } = individualCountry;
//   console.log(params);
      console.log(individualCountry);
  return (
    <section className="country-details-card container card">
        <div className="container-card bg-white-box">
            {individualCountry && (
            <div className="country-image grid grid-two-cols">
                <img src={flags.svg} alt={flags.alt} className="flag"/>
                <div className="country-content">
              <p className="card-title"> {name.official} </p>

              <div className="infoContainer">
                <p>
                  <span className="card-description"> Native Names:</span>
                  {Object.keys(name.nativeName)
                    .map((key) => name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description"> Population: </span>
                  {population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description"> Region:</span>
                  {region}
                </p>
                <p>
                  <span className="card-description"> Sub Region:</span>{subregion}
                </p>
                <p>
                  <span className="card-description"> Capital:</span>{capital}
                </p>

                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {tld[0]}
                </p>
                <p>
                  <span className="card-description"> Currencies: </span>
                  {Object.keys(currencies)
                    .map((curElem) => currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {Object.keys(languages)
                    .map((key) => languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
            )}
            <div className="country-card-backBtn">
                <NavLink to="/country" className="backBtn">
                    <button>Go Back</button>
                </NavLink>
            </div>
        </div>
    </section>
  )
};
