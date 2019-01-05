import React from 'react';

function ListOfThreeProducts() {
  return(
    <div className="listOfThreeProducts">
      <style global jsx>{`
              .listOfThreeProducts {
                height: 525px;
                border: 1px solid black;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
              }
              .products {
                width: 400px;
                height: 371px;
                border: 1px solid gray;
              }
        `}</style>
      <div className="products"></div>
      <div className="products"></div>
      <div className="products"></div>
    </div>
  );
}

export default ListOfThreeProducts;
