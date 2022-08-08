import useSWR from 'swr'
import SectionTitle from '../components/section-title'
import Widget from '../components/widget'
import React, { useState, useEffect } from "react";
import axios from "axios";
const Index = () => {
  const APIKEY='7c57128d-80b9-4869-8915-87aa98c1e780'
  const { data, error, isValidating } = useSWR(`https://vampire-diaries.herokuapp.com/api/episodes?key=${APIKEY}&sortBy=USviewers&sortOrder=DESC`,
   url => fetch(url).then(res => res.json()))
   
  if (error) return <div>failed to load</div>
  if (isValidating) return <div>loading...</div>
  console.log(data);
  
  return( 
    <>
      <Widget>
        <div>hello </div>
      </Widget>
      <Widget>
        {/* {data.map((field) => (
            <p key={field.id}>{field.name}</p>
          ))} */}
      </Widget>
    </>
  )
}

export default Index;