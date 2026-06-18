import "../../App.css";
import { NavLink } from "react-router-dom";

export const CountryCard = ({ names, population, region, capitals, flag }) => {
  // export const CountryCard = ({curCountry}) => {
  // const { name, population, region, capital, flags } = curCountry;
  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        {flag.url_svg && <img src={flag.url_svg} alt={flag.description} />}
        <div className="countryInfo">
          {/* <p className="card-title">{name.common.length > 10 ? name.common.slice(0,10) + '...' : name.common}</p> */}
          <p
            className="card-title"
            title={names.common.length > 10 ? names.common : ""}
          >
            {names.common.length > 10
              ? `${names.common.slice(0, 10)}...`
              : names.common}
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
            <span title={capitals?.[0]?.name}>
              {capitals?.[0]?.name?.length > 10
                ? `${capitals[0].name.slice(0, 12)}...`
                : capitals?.[0]?.name || "N/A"}
            </span>
            {/* <span>{`${capitals?.[0]?.name}`}</span> */}
          </p>

          <NavLink
            to={`/country/${names.common}`}
            style={{ textDecoration: "none" }}
          >
            <button className="btn-primary-read-more">Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
