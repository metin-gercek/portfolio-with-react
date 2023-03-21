import React, { Component } from "react";
import angularlogo from '../images/Angular_logo.svg'

export default class Angular extends Component {
  render() {
    return (
      <div>
        <div class="p-4 p-md-5 mb-4  text-bg-dark text-center" id="angular">
          <div class=" px-0">
            <img id="angularlogo" src={angularlogo} alt="angular_logo" />
            <h1 class="display-4 fst-italic">Angular Projects</h1>
          </div>
        </div>
        <div class="list-group">
          <a
            href="https://metin-gercek.github.io/angular-tour-of-heroes/dashboard"
            class="list-group-item list-group-item-action"
            aria-current="true"
          >
            Angular Tour of Heroes
          </a>
          <a
            href="https://url-shorter-tiny-angular.vercel.app/"
            class="list-group-item list-group-item-action"
            aria-current="true"
          >
            URL shorter by Tiny
          </a>
          <a
            href="https://business-card-app.netlify.app/"
            class="list-group-item list-group-item-action"
            aria-current="true"
          >
            Business Card App
          </a>
          <a
            href="https://metin-gercek.github.io/angular-tutorial-mystore/"
            class="list-group-item list-group-item-action"
          >
            Angular My Store
          </a>
          <a
            href="https://tuoteluettelo.vercel.app/"
            class="list-group-item list-group-item-action"
          >
            Angular Product List
          </a>
          <a
            href="https://metin-gercek.github.io/success-ja-warning/"
            class="list-group-item list-group-item-action"
          >
            Angular Success & Warning
          </a>
          <a
            href="https://metin-gercek.github.io/sovella-ng-directives/"
            class="list-group-item list-group-item-action"
          >
            Angular Directives
          </a>
          <a
            href="https://metin-gercek.github.io/sovella-databindingia/"
            class="list-group-item list-group-item-action"
          >
            Angular Data binding
          </a>
          <a
            href="https://metin-gercek.github.io/my-dream-app/"
            class="list-group-item list-group-item-action"
          >
            Angular My Dream App
          </a>
          <a
            href="https://metin-gercek.github.io/kahvila/"
            class="list-group-item list-group-item-action"
          >
            Angular Coffee Order
          </a>
          <a
            href="https://metin-gercek.github.io/first-angular-app/customers"
            class="list-group-item list-group-item-action"
          >
            Angular List-filter
          </a>
        </div>
      </div>
    );
  }
}
