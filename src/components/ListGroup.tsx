//import { Fragment } from "react"; or nothing here 
//and keep the first tags empty

function ListGroup() {
  return (
    //<Fragment>
    <>
        <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item active">1st</li>
        <li className="list-group-item">2nd</li>
        <li className="list-group-item">3rd</li>
        <li className="list-group-item">4th</li>
        <li className="list-group-item">5th</li>
      </ul>
    </>
    //</Fragment>
  );
}

export default ListGroup;
