import React from 'react';

class HeroLanding1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      backgroundImage: '',
    };
  }

  componentWillMount(){
    this.setBackground();
  }

  setBackground(){
    // console.log('props is', this.props.airJordan);
    if(this.props.airJordan){
      this.setState({backgroundImage: this.props.airJordan});
    } else {
      return console.log('error')
    }
  }
  render(){
    if(this.state.backgroundImage){
      return(
        <div id="heroLanding1">
          <style global jsx>{`
                #heroLanding1 {
                  height: 525px;
                  display: flex;
                  flex-direction: row;
                  justify-content: flex-end;
                  align-items: flex-end;
                  background-image: url(${this.state.backgroundImage});
                  background-size: cover;
                }
                #contentContainerHero1 {
                  margin-right: 100px;
                  margin-bottom: 100px;
                  color: white;
                }
                #airJordanButton {
                  width: 75px;
                  border-radius: 2px;
                  padding: 15px;
                  background-color: white;
                  margin-top: 20px;
                  color: black;
                }
            `}</style>
            <div id="contentContainerHero1">
              <h1>Air Jordan 1</h1>
              <div id="airJordanButton">Shop All</div>
            </div>
        </div>
      );
    } else {
      return (
        <div>
          ...loading
        </div>
      );
    }
  }
}

export default HeroLanding1;
