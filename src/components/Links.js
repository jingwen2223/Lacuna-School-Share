import React, { Component } from "react";


export default class Links extends Component {
  render() {
    return (
      <div>
        <h4>CONTACT US</h4>
        <button
        className="btn btn-outline-warning"
>
        <a href="https://www.gmail.com">
              EMAIL{" "}
            </a>
        </button>

        <button
        className="btn btn-outline-warning"
        >
        <a href="https://www.github.com">
              GITHUB
            </a>
        </button>
        
        <button
        className="btn btn-outline-warning"
         >
        <a href="https://www.youtube.com/">
              YOUTUBE
            </a>
        </button>

      </div>

      
    );
  }
}


