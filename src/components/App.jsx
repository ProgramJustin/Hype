import React from 'react';
import NavBar1 from './NavBar1';
import NavBar2 from './NavBar2';
import LandingPage from './LandingPage';
import Footer from './Footer';
import backgrounds from './../constants/backgrounds';
import fonts from './../../public/IBM_Plex_Sans/IBMPlexSans-Thin.ttf';

class App extends React.Component {


  constructor(){
    super();
    this.state = {
      background: {}
    };
  }

  componentWillMount(){
    console.log(fonts);
    this.handleSavingBackgrounds();
  }
  handleSavingBackgrounds(){
    this.setState({background: backgrounds});
  }

  render(){
    return (
      <div className="container">
        <style jsx global>{`
                * {
                  margin: 0;
                  padding: 0;
                  font-family: 'IBM Plex Sans Light';
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
        <LandingPage backgrounds={this.state.background}/>
        <Footer />
      </div>
    );
  }
}

export default App;
