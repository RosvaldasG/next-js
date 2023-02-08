import React, { useState } from "react";
import Maping from "./Maping/Maping";

const App = () => {
  const [names, setNames] = useState([]);

  const fetchNames = async () => {
    return await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setNames(data.products));
  };

  // lists();
  // const allNames = fetchNames();
  fetchNames();
  console.log(names);

  return (
    <div>
      <Maping names={names} />
    </div>
  );
};
export default App;
