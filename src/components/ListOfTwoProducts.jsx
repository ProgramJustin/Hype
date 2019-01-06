import React from 'react';

function ListOfTwoProducts() {
  return(
    <div className="listOfTwoProducts">
      <style global jsx>{`
              .listOfTwoProducts {
                height: 525px;
                border: 1px solid black;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
              }
              .products {
                width: 650px;
                height: 451px;
                border: 1px solid gray;
                margin: 20px;
              }

              @media only screen and (min-width: 1000px) and (max-width: 1200px) {
                .listOfTwoProducts {
                  // flex-wrap: wrap;
                  height: 100%;
                }
                .products {
                  flex: 1 450px;
                }
              }

              @media only screen and (max-width: 800.9px) {
                .listOfTwoProducts {
                  flex-direction: column;
                  height: 100%;
                }
              }
        `}</style>
      <div className="products"></div>
      <div className="products"></div>
    </div>
  );
}

export default ListOfTwoProducts;
