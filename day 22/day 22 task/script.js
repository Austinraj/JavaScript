const API_URL = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json";

async function Country() {
  const data = await fetch(API_URL);
  const user = await data.json();
  console.log(user);
  document.getElementById("containerdiv").innerHTML = user.map(({name,capital,region,alpha3Code}) => {
    return `
    <div class="card col-lg-4 col-sm-12 m-2" style="width: 18rem;">
        <div class="card-title ">
            <p class="card-title bg-dark text-light text-center" >${name}</p>
        </div>
        
        <div class="card-body">
          <p class="card-text">Capital:${capital}</p>
          <p class="card-text">Region:${region}</p>
          <p class="card-text">Country codes:${alpha3Code}</p>
          <a href="./weather.html" class="btn btn-primary btn-small d-flex justify-content-center" >Click weather</a>
        </div>
      </div>`
  }).join("")
  
}
Country();

const apiKey = "ed98a97bbb76a23796fb33bc79c909ac";
const api_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

 async function weather(CountryName){
     const data1 = await  fetch(api_URL + CountryName +`&appid=${apiKey}`);
     const weather = await data1.json();
     console.log(weather);
     document.getElementById("weather").innerHTML = `
     <div class="m-5 d-flex justify-content-center">
        <div class="card" style="width: 19rem; height: 18rem;">
            <div class="card-body">
              <h5 class="card-title d-flex justify-content-center">Weather</h5>
              <h6 class="card-text mb-2 ">CountryName - ${weather.name}</h6>
              <p class="card-text">Temperature - ${weather.main.temp} °C</p>
              <p class="card-text">Windspeed - ${weather.wind.speed} km/h</p>
              <p class="card-text">Clouds - ${weather.clouds.all} ☁️</p>
              
              <a href="./index.html" class="btn btn-primary btn-small d-flex justify-content-center">Back To List</a>
            </div>
          </div>
    </div>`
      
 }
weather("Afghanistan");
weather("American Samoa");














