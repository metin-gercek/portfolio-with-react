import React, { Component } from 'react';
import logo from '../images/logo.svg'

export default class Reactproject extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="p-4 p-md-5 mb-4  text-bg-dark text-center" id='reactproject'>
            <div class=" px-0">
            <img id="angularlogo" src={logo} alt="react_logo" />
              <h1 class="display-4 fst-italic">React Projects</h1>
            </div>
          </div>
          <div class="list-group">
            <a
              href="https://bitelicious.vercel.app/"
              class="list-group-item list-group-item-action"
              aria-current="true"
            >
              BiteLicious (React-Redux-NextJs-MongoDB)
            </a>
            <a
              href="https://cards-metingercek.netlify.app/"
              class="list-group-item list-group-item-action"
              aria-current="true"
            >
              Cards Project (Integrify)
            </a>
            <a
              href="https://github.com/metin-gercek/coffees-shop-mern-stack"
              class="list-group-item list-group-item-action"
              aria-current="true"
            >
              Coffees Shop (Full-stack project with MongoDB-Express-React-NodeJs)
            </a>
            
            <a
              href="https://country-react.vercel.app/"
              class="list-group-item list-group-item-action"
              aria-current="true"
            >
              Countries 
            </a>
            
          </div>
        </div>
      </div>
    )
  }
}
