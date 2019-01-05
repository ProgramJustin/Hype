import React from 'react';

function NavBar1() {
  return(
    <div id="navBar1">
      <style jsx global>{`
              #navBar1 {
                display: flex;
                flex-direction: column;
                border: 1px solid black;
                flex-direction: row;
                height: 40px;
                width: 100%;
              }
            `}
      </style>
      <a>Login/Join</a>
      <a>Help</a>
      <a>cart</a>

    </div>
  );
}

export default NavBar1;
