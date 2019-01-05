import React from 'react';

function NavBar2() {

  return(
    <div id="NavBar2">
      <style jsx global>{`
              #NavBar2 {
                display: flex;
                flex-direction: row;
                align-items: center;
                width: 100%;
                border: 1px solid black;
                height: 70px;
              }
              #logo {
                border-radius: 100%;
                width: 50px;
                height: 50px;
                background-color: gray;
              }
              #listItems {
                display: flex;
                flex-direction: row;
              }
        `}
      </style>
      <div id="logo"></div>
      <div id="listItems">
        <a>MEN</a>
        <a>WOMEN</a>
        <a>KIDS</a>
      </div>
    </div>
  );
}

export default NavBar2;
