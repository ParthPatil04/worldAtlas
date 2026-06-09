import axios from "axios";

const api = axios.create({
    baseURL:"https://restcountries.com/v3.1",
})

// HTTP GET Request
export const getAllCountryData = () => {
    return api.get("/all?fields=name,population,region,capital,flags")
}

// HTTP GET Request for single country details
export const getSingleCountryData = (name) => {
    return api.get( `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
}