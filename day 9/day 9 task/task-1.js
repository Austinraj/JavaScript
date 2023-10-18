
// 1.Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// a.Get all the countries from Asia continent /region using Filter function
// b.Get all the countries with a population of less than 2 lakhs using Filter function
// c.Print the following details name, capital, flag using forEach function
// d.Print the total population of countries using reduce function
// e.Print the country which uses US Dollars as currency.



const htpp = new XMLHttpRequest();

htpp.onreadystatechange = function(){
    if(this.readyState == 4){
        if(this.status == 200){
                const user =JSON.parse(this.responseText);
// a. ans
                const filter = user.filter(e=>{
                    return e.region === "Asia" ;
                })
                console.log(filter);
//b. ans
                const population = user.filter(({population}) => population < 200000);
                console.log(population);

//c. ans
                user.forEach(element => {
                   const name = element.name.common;
                   const capital = element.capital;
                   const flag = element.flag;
                   console.log(`countryName: ${name}`, `Capital: ${capital}`, `flag: ${flag}`);
                });        
//d. ans
                const population1 = user.reduce((acc,e)=>{
                    acc += e.population;
                    return acc;
                },0);
                console.log(population1);
//e. ans
                    user.forEach(element => {
                        const currency = element.currencies;
                       // const Usd = element.name.common;
                       console.log(currency);
                       // console.log(Usd);
                    });
          
               
        }else{
            console.error("404 Not Found")
        }
    }
}
htpp.open("GET","https://restcountries.com/v3.1/all");
htpp.send();