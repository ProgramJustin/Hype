import React from 'react';
import NavBar1 from './NavBar1';
import NavBar2 from './NavBar2';
import LandingPage from './LandingPage';
import Footer from './Footer';
import backgrounds from './../constants/backgrounds';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      background: {}
    };
  }

  componentWillMount(){
    this.handleSavingBackgrounds();
  }
  handleSavingBackgrounds(){
    console.log(backgrounds)
    this.setState({background: backgrounds});
  }

  render(){
    return (
      <div className="container">
        <style jsx global>{`
                * {
                  margin: 0;
                  padding: 0;
                }
                .container {
                  display: flex;
                  flex-direction: column;
                  border: 1px solid black;
                  height: 100%;
                }
              `}
        </style>
        <NavBar1 />
        <NavBar2 />
        <LandingPage backgrounds={this.state.backgrounds}/>
        <Footer />
      </div>
    );
  }
}

export default App;
