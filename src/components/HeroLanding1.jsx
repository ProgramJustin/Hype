import React from 'react';

function HeroLanding1() {
  return(
    <div id="heroLanding1">
      <style global jsx>{`
            #heroLanding1 {
              height: 525px;
              background-color: grey;
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              align-items: center;
            }
            #contentContainerHero1 {
              margin-right: 60px;
            }
            #airJordanButton {
              width: 75px;
              border-radius: 2px;
              padding: 15px;
              background-color: white;
              margin-top: 20px;
            }
        `}</style>
        <div id="contentContainerHero1">
          <h1>Air Jordan 1</h1>
          <div id="airJordanButton">Shop All</div>
        </div>
    </div>
  );
}

export default HeroLanding1;
