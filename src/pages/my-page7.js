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
  const [users, setUsers] = useState([]);
  const fetcher = (url) =>
    axios
      .get(
        `https://vampire-diaries.herokuapp.com/api/episodes?key=${APIKEY}&sortBy=USviewers&sortOrder=DESC`
      )
      .then((response) => response.data)
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error(error);
      });
  const APIKEY = "7c57128d-80b9-4869-8915-87aa98c1e780";
  const { data, error } = useSWR(`http://localhost:3000/my-page7`, fetcher);
  useEffect(() => {
    fetcher();
  }, []);

  console.log("데이터");
  console.log(users);

  // console.log('데이터json')
  const value = JSON.stringify(data, null, 2);
  // console.log(value)
  // var obj = JSON.parse(value)
  // console.log('obj')
  // console.log(obj)

  return (
    <>
      <Widget>
        <div>hello </div>
      </Widget>
      <Widget>
        {users.map((field) => (
          <p key={field.id}>{field.title}</p>
        ))}
      </Widget>
    </>
  );
};
export default Index;
