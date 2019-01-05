import React from 'react';

function NavBar2() {

  return(
    <div id="NavBar2">
      <style jsx global>{`
              #NavBar2 {
                display: flex;
                flex-direction: row;
                width: 100%;
              }
              #logo {
                border-radius: 100%;
                width: 50px;
                height: 50px;
                background-color: gray;
              }
        `}
      </style>
      <div id="logo"></div>
    </div>
  );
}

export default NavBar2;
