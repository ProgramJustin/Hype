import React from 'react';

function ListOfFourProducts() {
  return(
    <div className="listOfFourProducts">
      <style global jsx>{`
              .listOfFourProducts {
                height: 525px;
                border: 1px solid black;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
              }
              .products {
                width: 320px;
                height: 351px;
                border: 1px solid gray;
                margin: 20px;
              }

              @media only screen and (min-width: 1000px) and (max-width: 1200px) {
                .listOfFourProducts {
                  flex-wrap: wrap;
                  height: 100%;
                }
                .products {
                  flex: 1 450px;
                }
              }

              @media only screen and (max-width: 999.9px) {
                .listOfFourProducts {
                  flex-direction: column;
                  height: 100%;
                }
              }
        `}</style>
      <div className="products"></div>
      <div className="products"></div>
      <div className="products"></div>
      <div className="products"></div>
    </div>
  );
}

export default ListOfFourProducts;
