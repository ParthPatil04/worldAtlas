import "../../App.css";
import { NavLink } from "react-router-dom";

export const CountryCard = ({ name, population, region, capital, flags }) => {
  // export const CountryCard = ({curCountry}) => {
  // const { name, population, region, capital, flags } = curCountry;
  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        <img src={flags.svg} alt={flags.alt} />
        <div className="countryInfo">
          {/* <p className="card-title">{name.common.length > 10 ? name.common.slice(0,10) + '...' : name.common}</p> */}
          <p
            className="card-title"
            title={name.common.length > 10 ? name.common : ""}
          >
            {name.common.length > 10
              ? `${name.common.slice(0, 10)}...`
              : name.common}
          </p>
          <p>
            <span className="card-description">Population:</span>
            {population.toLocaleString("en-IN")}
          </p>
          <p>
            <span className="card-description">Region:</span> {region}
          </p>
          <p>
            <span className="card-description">Capital:</span>
            <span title={capital?.[0]?.length > 10 ? capital[0] : ""}>
              {capital?.[0]?.length > 10
                ? `${capital[0].slice(0, 12)}...`
                : capital?.[0] || "N/A"}
            </span>
          </p>

          <NavLink
            to={`/country/${name.common}`}
            style={{ textDecoration: "none" }}
          >
            <button className="btn-primary-read-more">Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
