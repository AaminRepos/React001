//import { Fragment } from "react"; or nothing here
//and keep the first tags empty
import { MouseEvent } from "react";


function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    //event handler//
  const handleClick = (event: MouseEvent) => console.log(event);

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
            className="list-group-item"
            key={item}
            onClick={handleClick}
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
