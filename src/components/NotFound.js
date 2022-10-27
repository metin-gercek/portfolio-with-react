import React, { Component } from "react";
import logo404 from '../images/404.svg'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <div class="p-4 p-md-5 mb-4 text-bg-dark text-center" id="notfound">
          <div class=" px-0">
            <img id="angularlogo" src={logo404} alt="react_logo" />
            <h1 class="display-4 fst-italic">Page Not Found!</h1>
          </div>
        </div>
      </div>
    );
  }
}
