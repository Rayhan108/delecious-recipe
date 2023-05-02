
import React, { useEffect, useState } from 'react';
import CheafCards from '../chefCards/CheafCards';


const Home = () => {
 const [allChefs,setAllChefs] =useState([])

 useEffect(()=>{
    fetch('http://localhost:5000/alldata/')
    .then(res=>res.json())
    .then(data=>setAllChefs(data))
    .catch(error=>console.log(error))
 },[])
//  console.log(allChefs);
    return (
        <div>
          {
            allChefs.map(allChef=><CheafCards key={allChef.chef_id} allChef={allChef}></CheafCards>)
          }

        </div>
    );
};

export default Home;