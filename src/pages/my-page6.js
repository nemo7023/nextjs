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
  const [data, setUsers] = useState({ data: [] });
  const [id, setid] = useState("");
  useEffect(() => {
    axios.get( `https://fakerapi.it/api/v1/books?_quantity=${id}`
  ).then(response => {
        setUsers(response.data);
      }).catch(error => {
        console.error(error);
        });
}, [id]);
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

        <Section>
          <input 
              value={id} 
              onChange={(e) => setid(e.target.value)} 
              type="text"
              placeholder='숫자를 입력하세요'
              />
        </Section>
        <br/>
        <Widget>
          <table className="table">
            <thead>
              <tr>
                <th>title</th>
                <th>author</th>
                <th>published</th>
                <th>genre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {data.data.map((field) => (
                    <p key={field.id}>{field.title}</p>
                  ))}
                </td>
                <td>
                  {data.data.map((field) => (
                    <p key={field.id}>{field.author}</p>
                  ))}
                </td>
                <td>
                  {data.data.map((field) => (
                    <p key={field.id}>{field.published}</p>
                  ))}
                </td>
                <td>
                  {data.data.map((field) => (
                    <p key={field.id}>{field.genre}</p>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
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

