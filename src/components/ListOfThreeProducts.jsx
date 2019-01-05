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
                margin: 20px;
              }

              @media only screen and (min-width: 900px) and (max-width: 1100px) {
                .products {
                  width: 400px;
                  height: 321px;
                  margin: 10px;
                }
              }

              @media only screen and (max-width: 1021px) {
                .listOfThreeProducts {
                  flex-direction: column;
                  height: 100%;
                }
                .products {
                  width: 450px;
                }
              }
        `}</style>
      <div className="products"></div>
      <div className="products"></div>
      <div className="products"></div>
    </div>
  );
}

export default ListOfThreeProducts;
