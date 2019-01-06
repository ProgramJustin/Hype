import React from 'react';

function Footer(){
  return(
    <div id="footer">
      <style global jsx>{`
          #footer {
            display: flex;
            height: 100%;
            width: 100%;
            border: 1px solid black;
          }

          #footer div {
            display: flex;
            flex-direction: row;
            height: 100%;
            width: 100%;
          }

          #footer div .linkBox {
            display: flex;
            flex-direction: column;
            padding: 10px;
          }
          #footer div div a {
            margin-bottom: 15px;
            font-size: 13px;
          }

          #footer .socialMediaContainer {
            display: flex;
            justify-content: center;
            height: 241px;
          }
          #footer div .socialMedia {
            border-radius: 100%;
            width: 50px;
            height: 50px;
            background-color: gray;
            margin-top: 10px;
            margin-left: 20px;
          }

          @media only screen and (max-width: 799.9px) {
            #footer {
              flex-direction: column;
              height: 100%;
            }
          }
        `}</style>
      <div>
        <div className="linkBox">
          <a>Find a Store</a>
          <a>Site Feedback</a>
        </div>
        <div className="linkBox">
          <a>Get Help</a>
          <a>Shipping & Delivery</a>
          <a>Returns</a>
          <a>Payment Options</a>
          <a>Contact Us</a>
        </div>
        <div className="linkBox">
          <a>About Hype</a>
          <a>News</a>
          <a>Careers</a>
        </div>
      </div>

      <div className="socialMediaContainer">
        <div className="socialMedia"></div>
        <div className="socialMedia"></div>
        <div className="socialMedia"></div>
        <div className="socialMedia"></div>
      </div>
    </div>
  );
}

export default Footer;
