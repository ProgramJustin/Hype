import React from 'react';

function Footer(){
  return(
    <div id="footer">
      <style global jsx>{`
          #footer {
            height: 241px;
            border: 1px solid black;
            display: flex;
          }

          #footer div {
            height: 100%;
            width: 100%;
          }

          #footer div div {
            display: flex;
            border: 1px solid black;
          }
        `}</style>
      <div>
        <div>
          <a>Data</a>
          <a>Data</a>
          <a>Data</a>
          <a>Data</a>
          <a>Data</a>
        </div>
        <div>
          <a>Data</a>
          <a>Data</a>
          <a>Data</a>
          <a>Data</a>
          <a>Data</a>
        </div>
        <div>
          <a>Data</a>
          <a>Data</a>
          <a>Data</a>
          <a>Data</a>
          <a>Data</a>
        </div>
      </div>

      <div>
        <img src="" />
        <img src="" />
        <img src="" />
      </div>
    </div>
  );
}

export default Footer;
