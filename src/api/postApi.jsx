import axios from "axios";

// const api = axios.create({
//     baseURL:"https://api.restcountries.com/countries/v5",
//     headers: {
//     Authorization: "Bearer rc_live_e4e131c0c1d74d6b98aa3f2e6171c4aa", 
//   },
// })

const api = axios.create({
  baseURL: "https://api.restcountries.com/countries/v5",
  headers: {
    Authorization: "Bearer rc_live_db098884f1df4cf8816ef28c1cb3941a",
  },
});

// HTTP GET Request
// export const getAllCountryData = () => {
//     return api.get("/all?fields=name,population,region,capital,flags")
// }

// export const getAllCountryData = async () => {
//   return api.get("");
// };
export const getAllCountryData = async () => {
  const first = await api.get("", {
    params: {
      limit: 100,
      offset: 0,
    },
  });

  const second = await api.get("", {
    params: {
      limit: 100,
      offset: 100,
    },
  });

  const third = await api.get("", {
    params: {
      limit: 100,
      offset: 200,
    },
  });

  return {
    data: {
      data: {
        objects: [
          ...first.data.data.objects,
          ...second.data.data.objects,
          ...third.data.data.objects,
        ],
      },
    },
  };
};

// HTTP GET Request for single country details
export const getSingleCountryData = (name) => {
    return api.get( `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
}