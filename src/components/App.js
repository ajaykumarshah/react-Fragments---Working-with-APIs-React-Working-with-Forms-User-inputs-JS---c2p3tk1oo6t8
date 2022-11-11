import React, { useState, useEffect, Fragment } from "react";
import '../styles/App.css';

import List from "./List";

const App = () => {

  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  let list2 = 0;
  const onButtonClick = () => {
    //   setList([])
    //   for (let i = 1; i < Number(value) + 1; i++) {

    //     setList((prev) => [...prev, i]);
    //   }

    // };
    list.push(value);
    list2 = list.map((element, index) => {
      return <li className="items" key={element + index} >Hello the value is {index + 1}</li>
    })
    setList(list2);
  }
  const onInputChange = (e) => {
    e.persist();
    setValue(e.target.value);
    // setList([...list, value]);
  };

  return (
    <div id="main">

      <input id="input" value={value} onChange={onInputChange} />
      <button id="button" onClick={onButtonClick}>Click</button>
      <ul id="list">
        {list}
        {/* <List listx={list} /> */}
      </ul>
    </div>
  );
};

export default App;
