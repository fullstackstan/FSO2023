import { useState, useEffect } from "react";
import countryService from "./services/country";

const Search = ({countries}) =>{

  if(countries.length>0){ console.log('search', countries[0].name.common);
return (
  <>
  {countries.map((country)=>(
    <li key={country.name.common} className={country}>
      {country.name.common}
    </li>
  ))}
  </>
)
}
 
  return (
    <>
    ads
    </>
  )
}

const App =()=>{

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log("use effect");
    countryService.getAll().then((response) => {
      console.log("promise fulfilled");
      setCountries(response.data);
      ;
    });
  }, []);


  return (
    <div>
    <h2>Country Information and Wearther Data</h2>
    <Search countries={countries}/>
    </div>
  )
}
export default App;
