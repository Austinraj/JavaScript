const apiUrl = "https://restcountries.com/v3.1/all";

async function fetchCountryData() {
  try {
    const response = await fetch(apiUrl);
    const countries = await response.json();

    countries.map(country => {
      const countryName = country.name.common;
      const region = country.region;
      const subRegion = country.subregion;
      const population = country.population;

      console.log(`Country: ${countryName}`);
      console.log(`Region: ${region}`);
      console.log(`Sub-Region: ${subRegion}`);
      console.log(`Population: ${population}`);
      console.log("------------");
    });
  } catch (error) {
    console.error("Error fetching country data:", error);
  }
}

fetchCountryData();
