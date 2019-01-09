import React from 'react';
import HeroLanding1 from './HeroLanding1';
import ListOfTwoProducts from './ListOfTwoProducts';
import ListOfThreeProducts from './ListOfThreeProducts';
import ListOfFourProducts from './ListOfFourProducts';

class LandingPage extends React.Component {

  constructor(props){
    super(props);
    // this.state = {
    //   backgrounds: {}
    // }
  }

  componentWillMount(){
    // console.log(this.props);
  }
  // componentDidMount(){
  //   console.log(this.state);
  //   this.saveBackgrounds();
  // }
  //
  // saveBackgrounds(){
  //   this.setState({backgrounds: this.props.backgrounds});
  // }

  render(){
    return(
      <div id="landingPage">
        <style global jsx>{`
                #landingPage {
                  display: flex;
                  flex-direction: column;
                }
          `}</style>
        <HeroLanding1 airJordan={this.props.backgrounds.airJordan} />
        <ListOfThreeProducts />
        <HeroLanding1 />
        <ListOfFourProducts />
        <HeroLanding1 />
        <ListOfTwoProducts />
      </div>
    );
  }
}

export default LandingPage;
