import React from 'react';
import NavBar1 from './NavBar1';

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
                  border: 1px solid black;
                  height: 100vh;
                  flex-direction: row;
                }
              `}
        </style>
        <NavBar1 />
      </div>
    );
  }
}

export default App;
