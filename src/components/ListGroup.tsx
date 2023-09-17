//import { Fragment } from "react"; or nothing here
//and keep the first tags empty
//import { MouseEvent } from "react";

import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //hook//
  const [selectedIndex, setsSelectedIndex] = useState(-1);

  //event handler//
  //const handleClick = (event: MouseEvent) => console.log(event);

  //const getMessage = () => {
  //return items.length ===0 ? <p>No tems Found</p>: null;;
  //}

  return (
    //<Fragment>
    <>
      <h1>List</h1>

      {items.length === 0 && <p>No items found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "listg-group-item"
            }
            key={item}
            onClick={() => {
              setsSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
    //</Fragment>
  );
}

export default ListGroup;
