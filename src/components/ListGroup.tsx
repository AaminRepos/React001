//import { Fragment } from "react"; or nothing here
//and keep the first tags empty

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  const message = {}

  //const getMessage = () => {
    //return items.length ===0 ? <p>No tems Found</p>: null;;
  //}

  return (
    //<Fragment>
    <>
      <h1>List</h1>
      
      {items.length === 0 && <p>No items found</p> }

      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
    //</Fragment>
  );
}

export default ListGroup;
