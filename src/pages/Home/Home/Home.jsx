
import React, { useEffect, useState } from 'react';
import CheafCards from '../chefCards/CheafCards';
import { Container, Row } from 'react-bootstrap';
import TodaysPic from '../TodaysPick/TodaysPic';
import BestChef from '../BestChef/BestChef';
import Header from '../shared/Header/Header';
import "./Home.css"


const Home = () => {
 const [allChefs,setAllChefs] =useState([])

 useEffect(()=>{
    fetch('https://assignment10-server-rayhan108.vercel.app/alldata/')
    .then(res=>res.json())
    .then(data=>setAllChefs(data))
    .catch(error=>console.log(error))
 },[])
//  console.log(allChefs);
    return (
      
  <div>
    <Header></Header>
        <Container className='mt-5 h-100 mb-5'>
<h1 className='mb-5  text-center'>Popular chef in Bangladesh</h1>
          <Row >
          {
            allChefs.map(allChef=><CheafCards key={allChef.chef_id} allChef={allChef}></CheafCards>)
          }

        </Row>
        <h1 className='mb-5 mt-5  text-center'>Todays Pic</h1>
        <TodaysPic></TodaysPic>
        <div className='mb-5 mt-5'>
<h1 className='text-center mb-3'> <span className='orange'>meet our experts</span> <br /> Our Best Chef </h1>
<Row >
  
{
            allChefs.map(chef=><BestChef  key={chef.chef_id} chef={chef}></BestChef>).slice(0,3)
          }
</Row>
     
        </div>
      </Container>
  </div>
    );
};

export default Home;