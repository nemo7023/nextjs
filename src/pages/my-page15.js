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
  const url = "http://127.0.0.1:5000/emps/";
  const [num, setNum] = useState(null);
  const [searchtext, setSearchText] = useState("");
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(url, fetcher);

  const fields = [
    {
      name: "empno",
      key: "empno",
    },
    {
      name: "ename",
      key: "ename",
    },
    {
      name: "job",
      key: "job",
    },
    {
      name: "mgr",
      key: "mgr",
    },
    {
      name: "hiredate",
      key: "hiredate",
    },
    {
      name: "sal",
      key: "sal",
    },
    {
      name: "comm",
      key: "comm",
    },
    {
      name: "deptno",
      key: "deptno",
    },
  ];

  // console.log('데이터json')

  // console.log(value)
  // var obj = JSON.parse(value)
  // console.log('obj')
  // console.log(obj)

  return (
    <>
      <Widget>
        <div>Express Emps Test </div>
        <div>Search Name</div>
        <input
          value={searchtext}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="이름을 입력하세요"
        />
      </Widget>
      <Widget>
        <h6>EMPS</h6>

        <table className="table">
          <thead>
            <tr>
              {fields.map((field, i) => (
                <th key={i}>{field.name}</th>
              ))}
            </tr>
          </thead>

          {data &&
            data
              .filter((val) => {
                if (setSearchText == "") {
                  return val;
                } else if (
                  val.ename.toLowerCase().includes(searchtext.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((field) => {
                return (
                  <tbody>
                    <tr>
                      <td>
                        <p key={field.id}>{field.empno}</p>
                      </td>
                      <td>
                        <p key={field.id}>{field.ename}</p>
                      </td>
                      <td>
                        <p key={field.id}>{field.job}</p>
                      </td>
                      <td>
                        <p key={field.id}>{field.mgr}</p>
                      </td>
                      <td>
                        <p key={field.id}>{field.hiredate}</p>
                      </td>
                      <td>
                        <p key={field.id}>{field.sal}</p>
                      </td>
                      <td>
                        <p key={field.id}>{field.comm || "None"}</p>
                      </td>
                      <td>
                        <p key={field.id}>{field.deptno}</p>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
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
