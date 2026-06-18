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
      if (countryData.status === 200) {
        //  setIndividualCountry(countryData.data[0]);
        setIndividualCountry(countryData.data.data.objects[0]);
      }
    });
  }, []);

  if (isPending || !individualCountry) {
    return <Loader />;
  }
  const {
    names,
    population,
    region,
    subregion,
    capitals,
    tlds,
    currencies,
    languages,
    borders,
    flag,
  } = individualCountry;
  //   console.log(params);
  console.log(individualCountry);
  console.log(names);
  return (
    <section className="country-details-card container card">
      <div className="container-card bg-white-box">
        {individualCountry && (
          <div className="country-image grid grid-two-cols">
            <img src={flag.url_svg} alt={flag.description} className="flag" />
            <div className="country-content">
              <p className="card-title"> {names.official} </p>

              <div className="infoContainer">
                <p>
                  <span className="card-description"> Native Names:</span>
                  {Object.keys(names.native || {})
                    .map((key) => names.native[key].common)
                    .join(", ") || names.common}
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
                  <span className="card-description"> Sub Region:</span>
                  {subregion}
                </p>
                <p>
                  <span className="card-description"> Capital:</span>
                  {capitals?.[0]?.name}
                </p>

                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {tlds[0]}
                </p>
                <p>
                  <span className="card-description"> Currencies: </span>
                  {currencies
                    .map((curElem) => curElem.name)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {languages
                    .map((key) => key.bcp47)
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
  );
};
