//import { Fragment } from "react"; or nothing here
//and keep the first tags empty

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  items.map((item) => <li>{item}</li>);

  return (
    //<Fragment>
    <>
      <h1>List</h1>
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
