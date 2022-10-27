import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div >
        <div class="p-4 p-md-5 mb-4  text-bg-dark text-center" id="header" >
          <div class=" px-0" >
            <h1 class="display-1 fst-italic">Welcome to</h1>
            <h3 class="display-5 fst-italic"> my portfolio page</h3>
            <hr></hr>
            <p class="lead my-3">
              You can view all projects from the Projects tab above. Please feel free to get in touch with me! 
            </p>
          </div>
        </div>
      </div>
    );
  }
}
