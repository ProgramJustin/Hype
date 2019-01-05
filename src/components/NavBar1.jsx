import React from 'react';

function NavBar1() {
  return(
    <div id="navBar1">
      <style jsx global>{`
              #navBar1 {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
                border: 1px solid black;
                flex-direction: row;
                height: 40px;
                width: 100%;
              }
              a {
                margin-left: 20px;
              }
              #cart {
                margin-right: 20px;
              }
            `}
      </style>
      <a>Login/Join</a>
      <a>Help</a>
      <a id="cart">cart</a>
    </div>
  );
}

export default NavBar1;
