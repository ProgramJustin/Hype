import React from 'react';

function HeroLanding1() {
  return(
    <div id="heroLanding1">
      <style global jsx>{`
            #heroLanding1 {
              height: 525px;
              background-color: grey;
            }
            #airJordanButton {
              width: 75px;
              border-radius: 2px;
              padding: 15px;
              background-color: white;
            }
        `}</style>
        <div>
          <h1>Air Jordan 1</h1>
          <div id="airJordanButton">Shop All</div>
        </div>
    </div>
  );
}

export default HeroLanding1;
