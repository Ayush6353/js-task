import React from "react";
import { useState } from "react";

const HeadTaill = () => {
  const [data, setData] = useState([[]]);
  console.log(data,"useState");

  function addData(newData) {
    if (newData !== data[data.length - 1][0] ) {
      data.push([]);
    }
    data[data.length - 1].push(newData);
    setData([...data]);
  }

  return (
    <div>
      <button className="btn" onClick={() => addData("Head")}>Head</button>
      <button className="btn" onClick={() => addData("Tail")}>Tail</button>
      <div className="div_data">
        {data.map((item, index) => (
          <div className="a_data">
          {item.map((item, index) => (
          <ul className="ul_m" key={index}>{item}</ul>
        ))}
          </div>
        ))}
      </div>
    </div>
  );
 
};

export default HeadTaill;
