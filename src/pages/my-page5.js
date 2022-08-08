import React, { useState, useEffect } from "react";
import axios from "axios";

const Index = () => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("react");

  //useEffect는 비동기적으로 동작
  useEffect(() => {
    let completed = false; //초기에는 실행해야 되기때문에 false flag 변수

    //query를 리턴하는 함수를 result에 할당
    async function get() {
      const result = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      if (!completed) setData(result.data);
    }
    get();
    return () => {
      completed = true;
    };
    //query가 변할때 useEffect를 실행해야하는 시점이다
  }, [query]); //input에 값이 변경이 되었을때 effect를 실행한다
  console.log(data);
  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a target="_blank" href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Index;