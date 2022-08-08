import SectionTitle from '../components/section-title'
import Widget from '../components/widget'
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";

// var express = require('express'); 
// var cors = require('cors'); 
// var Index = express(); // CORS 설정 app.use(cors());

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
// const headers = {
//   'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
//   'Accept': '*/*',
//   'Access-Control-Allow-Origin': "*",
//   "Access-Control-Allow-Methods": "*",
//   "Access-Control-Allow-Headers": "*"
// }

const Index = () => {
  const url='http://127.0.0.1:8000/items/';
  const fetcher = (url) => axios.get(url).then((res) =>res.data);
  
  
  // const url='https://jsonplaceholder.typicode.com/users/'
  const { data, error } = useSWR(
    url,fetcher
  );

  console.log('data')
  console.log(data)
  console.log('error')
  console.log(error);
  const value = JSON.stringify(data)
  
  return(
  <>
  
    <SectionTitle title="Pages" subtitle="Empty page" />
    <Widget title="Page title" description={<span>Page description</span>}>
      <p>This is an empty page</p>
      {data&&data.foo.map((sample,i)=>(
        <p key={i}>name:{sample.name} price:{sample.price}</p>
      ))}

      {data&&data.bar.map((sample,i)=>(
        <p key={i}>name:{sample.name} price:{sample.price}</p>
      ))}
      
      {data&&data.baz.map((sample,i)=>(
        <p key={i}>name:{sample.name} price:{sample.price}</p>
      ))}
      
      
      {value}
    </Widget>
  </>
  )
}
export default Index

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8000"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });