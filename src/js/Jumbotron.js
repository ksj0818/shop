import React from "react";
import Product from "./Product";
function Jumbotron(props) {
  return (
    <div>
      <div className="Jumbotron">
        <h1>20% Season OFF</h1>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <div className="container">
        <div className="row">
          {
            //
            props.data.map((s) => {
              return <Product data={s} key={s.id} />;
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
