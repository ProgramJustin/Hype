import React from 'react';
import HeroLanding1 from './HeroLanding1';
import ListOfTwoProducts from './ListOfTwoProducts';
import ListOfThreeProducts from './ListOfThreeProducts';
import ListOfFourProducts from './ListOfFourProducts';

class LandingPage extends React.Component {

  constructor(props){
    super(props);
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
        <HeroLanding1 id="1" background={this.props.backgrounds.airJordan} description="Air Jordan 1"/>
        <ListOfThreeProducts />
        <HeroLanding1 id="2" background={this.props.backgrounds.pharell} description="PW Human Race NMD" />
        <ListOfFourProducts />
        <HeroLanding1 id="3" />
        <ListOfTwoProducts />
      </div>
    );
  }
}

export default LandingPage;
