import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import'./countries.css'


const Countries = () => {
    const [countries, setCountries]= useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data => setCountries(data))
    },[])
    // adding name
    const [visitedcountry,setVisitedCountry]=useState([])
    const handleVisited= country =>{
        // console.log('add visited country ')
       const newVisitedCountry =[...visitedcountry, country]
       setVisitedCountry(newVisitedCountry)
    }
    // addd visited flag
    

 const [visitedflag,setvisitedFlag]=useState([])
 const handleflag = flag=> {
    const newFlag =[...visitedflag,flag]
    setvisitedFlag(newFlag)
 }

    return (
        <div>
            <h4>countries:{countries.length}</h4>
            {/* show name  */}
            <div>
                <h3>visited: {visitedcountry.length}</h3>
                {
                    visitedcountry.map(country=> <li key={country.cca3}>{country.name.common}</li>)
                }
            </div>
            {/* show flag */}
            <div className="flag">
                {
                    visitedflag.map((flag,idx)=> <img key={idx } src={flag}></img>)
                }
            </div>
            <div className="countries-container grid grid-cols-1 lg:grid-cols-3">
            {
                countries.map(country=><Country key={countries.cca3} 
                     country={country} handleVisited={handleVisited} visitedflag={handleflag}>
                     </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;