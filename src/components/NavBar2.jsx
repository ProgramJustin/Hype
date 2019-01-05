import React from 'react';

function NavBar2() {

  return(
    <div id="NavBar2">
      <style jsx global>{`
              #NavBar2 {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                border: 1px solid black;
                height: 70px;
              }
              #logo {
                border-radius: 100%;
                width: 50px;
                height: 50px;
                background-color: gray;
                margin-left: 20px;
              }
              #listItems {
                display: flex;
                flex-direction: row;
              }
              input {
                border-style: none;
                border: 1px solid black;
                border-radius: 2px;
                width: 175px;
                height: 35px;
                margin-right: 20px
              }
              ::-webkit-input-placeholder {
                 font-size: 14px;
                 padding: 20px;
              }
        `}
      </style>
      <div id="logo"></div>
      <div id="listItems">
        <a>MEN</a>
        <a>WOMEN</a>
        <a>KIDS</a>
      </div>
      <div>
        <input id="seachBar" type="text" placeholder="search" />
      </div>
    </div>
  );
}

export default NavBar2;
