
import React, { useEffect, useState } from 'react';
import CheafCards from '../chefCards/CheafCards';
import { Container, Row } from 'react-bootstrap';
import TodaysPic from '../TodaysPick/TodaysPic';


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
      <Container className='mt-5 h-100 mb-5'>
<h1 className='mb-5  text-center'>Popular chef in Bangladesh</h1>
          <Row >
          {
            allChefs.map(allChef=><CheafCards key={allChef.chef_id} allChef={allChef}></CheafCards>)
          }

        </Row>
        <h1 className='mb-5 mt-5  text-center'>Todays Pic</h1>
        <TodaysPic></TodaysPic>
      </Container>
    );
};

export default Home;