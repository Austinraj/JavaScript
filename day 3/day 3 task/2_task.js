// Define the API endpoint
const apiUrl = "https://restcountries.com/v3.1/all";

// Function to fetch country data
async function fetchCountryData() {
  try {
    const response = await fetch(apiUrl);
    const countries = await response.json();

    // Loop through the countries and display their flags
    countries.forEach(country => {
      const flagUrl = country.flags.png;
      console.log(`Country: ${country.name.common}, Flag: ${flagUrl}`);
    });
  } catch (error) {
    console.error("Error fetching country data:", error);
  }
}

// Call the function to fetch country data
fetchCountryData();