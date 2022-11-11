import React, { useState, useEffect, Fragment } from "react";
import '../styles/App.css';

import List from "./List";

const App = () => {

  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  let list2 = [];
  const onButtonClick = () => {
    //   setList([])
    //   for (let i = 1; i < Number(value) + 1; i++) {

    //     setList((prev) => [...prev, i]);
    //   }

    // };
    for (let i = 1; i <= value; i++) {
      list2.push(<li className="items" key={i} >Hello the value is {i}</li>);
    }
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
