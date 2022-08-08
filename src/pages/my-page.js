import SectionTitle from '../components/section-title'
import Widget from '../components/widget'
import React, { useState, useEffect} from "react";
import axios from "axios";
import Image from "next/image";
import {List} from '../components/dashboard/list'

import Section from '../components/dashboard/section'
import Tasks from '../components/tasks'

// https://api.thecatapi.com/v1/images/search
// https://dog.ceo/api/breeds/image/random
// https://api.publicapis.org/entries
const Index = () => {
  const [data, setUsers] = useState( []);
  const [id, setid] = useState("");
  const APIKEY='7c57128d-80b9-4869-8915-87aa98c1e780'
  useEffect(() => {
    axios.get( `https://vampire-diaries.herokuapp.com/api/episodes?key=${APIKEY}&sortBy=USviewers&sortOrder=DESC`
  ).then(response => {
        setUsers(response.data);
      }).catch(error => {
        console.error(error);
        });
}, []);
console.log('데이터')
console.log(data);




// console.log('데이터json')
const value= JSON.stringify(data, null, 2);
// console.log(value)
// var obj = JSON.parse(value)
// console.log('obj')
// console.log(obj)

return (
    <>
      <Section>Hello</Section>

        
        <Widget>
            {data.map((field) => (
                    <p key={field.id}>{field.title}</p>
                  ))}
           
         
        </Widget>
        <Widget>
       
        </Widget>
 
      {/* <p>{data}</p> */}
      {/* <img src={value.Link} alt="img" /> */}
      {/* <input 
            value={id} 
            onChange={(e) => setid(e.target.value)} 
            type="text"
            placeholder='숫자를 입력하세요'
            /> */}
      
      


    </>
);
}
export default Index

