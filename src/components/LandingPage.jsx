import React from 'react';
import HeroLanding1 from './HeroLanding1';
import ListOfThreeProducts from './ListOfThreeProducts';
import ListOfFourProducts from './ListOfFourProducts';
class LandingPage extends React.Component {

  constructor(){
    super();
  }

  render(){
    return(
      <div id="landingPage">
        <style global jsx>{`
                #landingPage {
                  display: flex;
                  flex-direction: column;
                }
          `}</style>
        <HeroLanding1 />
        <ListOfThreeProducts />
        <HeroLanding1 />
        <ListOfFourProducts />
      </div>
    );
  }
}

export default LandingPage;
