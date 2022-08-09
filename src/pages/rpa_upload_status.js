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
  const url = "http://127.0.0.1:5000/rpaupload/";
  const [num, setNum] = useState(null);
  const [searchtext, setSearchText] = useState("");
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(url, fetcher);

  const fields = [
    {
      name: "fu_id",
      key: "fu_id",
    },
    {
      name: "code",
      key: "code",
    },
    {
      name: "start_time",
      key: "start_time",
    },
    {
      name: "report_name",
      key: "report_name",
    },
    {
      name: "filename",
      key: "filename",
    },
    {
      name: "update_date",
      key: "update_date",
    },
    {
      name: "detail_log",
      key: "detail_log",
    },
    {
      name: "update_check",
      key: "update_check",
    },
  ];

  // console.log('데이터json')

  // var obj = JSON.parse(value)
  // console.log('obj')
  // console.log(obj)

  return (
    <>
      <Widget>
        <div className="text-lg">Search Fu_Id or Report_Name</div>
        <input
          value={searchtext}
          onChange={(e) => setSearchText(e.target.value)}
          type="search"
          placeholder="검색어를 입력하세요"
        />
      </Widget>
      <Widget>
        <h6>RPA Table</h6>

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
                  val.fu_id.toString().includes(searchtext) ||
                  val.report_name.includes(searchtext)
                ) {
                  return val;
                }
              })
              .map((field, i) => {
                return (
                  <tbody>
                    <tr>
                      <td>
                        <p key={i}>{field.fu_id}</p>
                      </td>
                      <td>
                        <p key={i}>{field.code}</p>
                      </td>
                      <td>
                        <p key={i}>{field.start_time}</p>
                      </td>
                      <td>
                        <p key={i}>{field.report_name}</p>
                      </td>
                      <td>
                        <p key={i}>{field.filename}</p>
                      </td>
                      <td>
                        <p key={i}>{field.update_date}</p>
                      </td>
                      <td>
                        <p key={i}>{field.detail_log || "None"}</p>
                      </td>
                      <td>
                        <p key={i}>{field.update_check}</p>
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
