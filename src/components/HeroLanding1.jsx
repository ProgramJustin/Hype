import React from 'react';
import PropTypes from 'prop-types';

class HeroLanding1 extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const idName= "heroLanding" + this.props.id;
    if(this.props.background){
      return(
        <div className={[idName, "heroLanding"].join(' ')}>
          <style global jsx>{`
                .heroLanding {
                  height: 525px;
                  display: flex;
                  flex-direction: row;
                  justify-content: flex-end;
                  align-items: flex-end;
                  background-size: cover;
                }

                ${'.' + idName} {
                  background-image: url(${this.props.background});
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
              <h1>{this.props.description}</h1>
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

HeroLanding1.PropTypes = {
  description: PropTypes.string
};

export default HeroLanding1;
