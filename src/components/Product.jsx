import React from  'react';
import mock from '../../public/mock.png';

function Post(){
  return(
    <div className="product">
      <style jsx global>{`
        .product {
          width: 400px;
          height: 371px;
          border: 1px solid gray;
          margin: 20px;
          display: flex;
          flex-direction: column;
        }
        .imgContainer {
          width: inherit;
        }
        .imgContainer img {
          width: inherit;
        }
        #linkDescription {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          // align-items: center;
          align-content: center;
          border: 1px solid black;
        }
        #linkDescription:hover {
          text-decoration: underline;
        }



        `}</style>
      <div className="imgContainer">
        <img src={mock} />
      </div>
      <div id="linkDescription">
        <a>Nike</a>
        <a>Mens Shoe</a>
      </div>
    </div>
  );
}

export default Post;
