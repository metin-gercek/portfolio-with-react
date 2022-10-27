import React, { Component } from "react";
import springlogo from '../images/spring-boot.svg';

export default class SpringBoot extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="p-4 p-md-5 mb-4 text-bg-dark text-center" id="springboot">
            <div class=" px-0">
              <img id="angularlogo" src={springlogo} alt="react_logo" />
              <h1 class="display-4 fst-italic">Spring Boot Projects</h1>
            </div>
          </div>
          <div class="list-group">
            <a
              href="https://noorancoffeeshop.herokuapp.com/"
              class="list-group-item list-group-item-action"
              aria-current="true"
            >
              Noora's Coffee Shop
            </a>
          </div>
        </div>
      </div>
    );
  }
}
