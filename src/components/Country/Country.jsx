
import { useState } from 'react';
import './country.css'
const Country = ({country,handleVisited,visitedflag}) => {
    // console.log(handleVisited)
    const {name,flags,area,population,cca3}= country
    const [visited,setVisited]=useState(false)

   const handleClicked =() =>{
      setVisited(!visited)
   }

    return (
        <div className={`country ${visited?'visited':'none-visited'}`}>
            <h4 style={{color:visited?'red':'black'}}>Name: {name.common}</h4>
            <img src={flags.png} alt="" />
            <h3>Area: {area}</h3>
            <h4>population: {population}</h4>
            <h4><small>Code:{cca3}</small></h4>
            <button onClick={handleClicked}>{visited?'visited':'going'}</button>
            {/* {visited&&'yes iam visit this country'} */}
            {visited?'Yes I Am visited':'No I want to visit this country'}
            <button onClick={()=>handleVisited(country)}>Visited country</button>
            <button onClick={()=>visitedflag(country.flags.png)} >Add flag</button>
        </div>
    );
};

export default Country;