import React from 'react';
import NavBar1 from './NavBar1';
import NavBar2 from './NavBar2';
import LandingPage from './LandingPage';

class App extends React.Component {

  constructor(){
    super();
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
        <LandingPage />
      </div>
    );
  }
}

export default App;
