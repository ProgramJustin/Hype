import React from 'react';

class App extends React.Component {

  constructor(){
    super();
  }

  render(){
    return (
      <div className="container">
        <style jsx global>{`
                .container {}
                `}
        </style>
      </div>
    );
  }
}

export default App;
