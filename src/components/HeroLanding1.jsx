import React from 'react';
import AirJordan from '../../public/AirJordanBackground.png';

class HeroLanding1 extends React.Component {
  constructor(){
    super();
    this.state = {
      backgroungImage: AirJordan
    };
  }
  render(){
    return(
      <div id="heroLanding1">
        <style global jsx>{`
              #heroLanding1 {
                height: 525px;
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
}

export default HeroLanding1;
