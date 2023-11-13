

const API_URL =fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",{headers:"Contetn-type: json"})

async function country({capital,name,region,flag,alpha3Code}){
  try{
  const countrycapital = await capital;
  const countryname = await name;
  const countryregion = await region;
  const countryflag = await flag;
  const countrycodes = await alpha3Code;
  document.getElementById("containerdiv").innerHTML =
  `<div class="row ">
  <div class="card col-lg-4 col-sm-12 m-2" style="width: 18rem;">
      <div class="card-title bg-dark">
          <p class="card-title text-light" >${countryname}</p>
      </div>
      <img src="${countryflag}" class="card-img-top" alt="flag">
      <div class="card-body">
        <p class="card-text">Capital:${countrycapital}</p>
        <p class="card-text">Region:${countryregion}</p>
        <p class="card-text">Country codes:${countrycodes}</p>
        <a href="#" class="btn btn-primary">Click weather</a>
      </div>
    </div>
    
    </div>`;
  }
  catch{
    console.error("fecth is error")
  }
}
country(API_URL);


