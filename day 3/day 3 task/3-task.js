const http = new XMLHttpRequest();

http.onreadystatechange = function ({readyState,status,responseText}){
    if(readyState === 4){
        if(status === 200){
            const user =JSON.parse(responseText);
            user.forEach(country => {
                const countryname =country.name.common;
                const region = country.region;
                const subRegion = country.subregion;
                const population = country.population;
          
                const countryflage =country.flags.png;
               console.log(countryname);
                console.log(region);
               console.log(subRegion);
               console.log(population);
               console.log(countryflage);

                console.log(country);
            });
        }
        else{
            console.error("404 not found");
        }
    }
}

http.open("GET","https://restcountries.com/v3.1/all");
http.send();