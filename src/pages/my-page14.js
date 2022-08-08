import SectionTitle from '../components/section-title'
import Widget from '../components/widget'
// import React, { useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";
import Datatable from '../components/datatable'
import {formatNumber} from '../functions/numbers'
import React from 'react'

// var express = require('express'); 
// var cors = require('cors'); 
// var app = express(); // CORS 설정 app.use(cors());

// Index.use(cors());
// Index.all('/*', function(req, res, next)
//  { res.header("Access-Control-Allow-Origin", "*"); 
//  res.header("Access-Control-Allow-Headers", "X-Requested-With"); next(); 
// });
// const cors=require("cors");
// const corsOptions ={
//    origin:'*', 
//    credentials:true,            //access-control-allow-credentials:true
//    optionSuccessStatus:200,
// }

// , {
//   headers: {
//     'Access-Control-Allow-Origin': "*",
//     "Access-Control-Allow-Methods": "*",
//     "Access-Control-Allow-Headers": "*"
//   }
//   }

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//  });

// const headers = {
//   'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
//   'Accept': '*/*',
//   'Access-Control-Allow-Origin': "http://127.0.0.1:8000/",
//   "Access-Control-Allow-Methods": "*",
//   "Access-Control-Allow-Headers": "*"
// }






const Index = () => {
  const url='http://127.0.0.1:8000/sample/';
  // const [items, setUsers] = useState({items:{}});
 
  const fetcher = (url) => axios.get(url).then((res) =>
    res.data);

  // const url = "https://jsonplaceholder.typicode.com/photos";
  
  // const url='https://jsonplaceholder.typicode.com/users/'
  const { data, error } = useSWR(
    url,fetcher
    
  );
  
  const columns = React.useMemo(
    () => [
     
      {
        Header: 'Name',
        accessor: 'name'
      },
     
      {
        Header: 'Fu_id',
        accessor: 'fu_id',
        Cell: (props) => <span>{formatNumber(props.value)}</span>
      }
    ],
    []
  );
  const test = React.useMemo(() => data,[]);
 
  // console.log('res.data')
  // console.log(res.data);   
  console.log("data");
  console.log(data);
  console.log('error');
  console.log(error);
  console.log('test');
  console.log(test);
  console.log(columns);
  
  const value= JSON.stringify(test, null, 2);
  console.log('value');
  console.log(value)
  return(
  <>
  
    <SectionTitle title="Pages" subtitle="Empty page" />
    <Widget title="Page title" description={<span>Page description</span>}>
      <p>This is an empty page</p>
        {data&&data.map((field,i) => (
                    <p key={i}>fu_id: {field.fu_id}  name: {field.name}</p>
                    
                  ))} 
        {data&&data.map((field,i) => (
                    <p key={i}>name: {field.name}</p>
                    
                  ))} 
        
      {/* <Datatable columns={columns} data={test} /> */}
      
    </Widget>
    {/* <Datatable columns={columns} data={data} /> */}
  </>
  );
};

export default Index

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8000"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });