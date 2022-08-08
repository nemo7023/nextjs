import SectionTitle from "../components/section-title";
import Widget from "../components/widget";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { List } from "../components/dashboard/list";
import useSWR from "swr";

import Section from "../components/dashboard/section";
import Tasks from "../components/tasks";

// https://api.thecatapi.com/v1/images/search
// https://dog.ceo/api/breeds/image/random
// https://api.publicapis.org/entries

const Index = () => {
  // const [users,setUsers] = useState({data:[]});

  // const fetcher = url => axios.get(`https://fakerapi.it/api/v1/companies?_quantity=5`
  // ).then(response =>
  //   (response.data)
  // ).then(data =>
  //   setUsers(data))
  // .catch(error => {
  //   console.error(error);
  //   });

  // const { data, error } = useSWR(`http://localhost:3000/my-page9`,fetcher)
  // useEffect( () =>{

  //   fetcher();
  // },[] )
  const url = "https://fakerapi.it/api/v1/";
  const [num, setNum] = useState(null);
  const [searchtext, setSearchText] = useState("");
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data: users, error: userserror } = useSWR(
    url + "persons?_quantity=" + `${num}`,
    fetcher
  );
  const { data: companies, error: companieserror } = useSWR(
    url + "companies?_quantity=" + `${num}`,
    fetcher
  );

  console.log("데이터");
  console.log(users);
  console.log(companies);

  // console.log('데이터json')

  // console.log(value)
  // var obj = JSON.parse(value)
  // console.log('obj')
  // console.log(obj)

  return (
    <>
      <Widget>
        <div>hello </div>
        <input
          value={num}
          onChange={(e) => setNum(e.target.value)}
          type="text"
          placeholder="숫자를 입력하세요"
        />
        <br />
        <div>Search Name</div>
        <input
          value={searchtext}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="이름을 입력하세요"
        />
      </Widget>
      <Widget>
        <h6>Person</h6>

        <table className="table">
          <thead>
            <tr>
              <th>name</th>
              <th>country</th>
              <th>birthday</th>
              <th>gender</th>
            </tr>
          </thead>

          {users &&
            users.data
              .filter(
                (field) =>
                  field.firstname
                    .toLowerCase()
                    .includes(searchtext.toLowerCase()) ||
                  field.lastname
                    .toLowerCase()
                    .includes(searchtext.toLowerCase())
              )
              .map((field) => (
                <tbody>
                  <tr>
                    <td>
                      <p key={field.id}>
                        {field.firstname} {field.lastname}
                      </p>
                    </td>
                    <td>
                      <p key={field.id}>{field.address.country}</p>
                    </td>
                    <td>
                      <p key={field.id}>{field.birthday}</p>
                    </td>
                    <td>
                      <p key={field.id}>{field.gender}</p>
                    </td>
                  </tr>
                </tbody>
              ))}
        </table>
      </Widget>
      <Widget>
        <h6>Companies</h6>
        <table className="table">
          <thead>
            <tr>
              <th>name</th>
              <th>country</th>
              <th>website</th>
              <th>phone</th>
            </tr>
          </thead>
          {companies &&
            companies.data.map((field) =>(
              <tbody>
                <tr>
                  <td>
                    <p key={field.id}>{field.name}</p>
                  </td>
                  <td>
                    <p key={field.id}>{field.country}</p>
                  </td>
                  <td>
                    <p key={field.id}>{field.website}</p>
                  </td>
                  <td>
                    <p key={field.id}>{field.phone}</p>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </Widget>
    </>
  );
};
export default Index;

// {users &&
//   users.data.filter((field) =>{
//     if(searchtext == ""){
//       return field.firstname,field.lastname
//     }else if(field.firstname.toLowerCase().includes(searchtext.toLowerCase())){
//       return field.firstname ,field.lastname
//     }else if(field.lastname.toLowerCase().includes(searchtext.toLowerCase())){
//       return field.firstname ,field.lastname
//     }

//   }
//   ).map((field) => (
//     <p key={field.id}>
//       {field.firstname} {field.lastname}
//     </p>
//   ))}
