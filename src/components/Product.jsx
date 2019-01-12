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
        }
        .imgContainer {
          width: inherit;
        }
        .imgContainer img {
          width: inherit;
        }



        `}</style>
      <div className="imgContainer">
        <img src={mock} />
      </div>
    </div>
  );
}

export default Post;
