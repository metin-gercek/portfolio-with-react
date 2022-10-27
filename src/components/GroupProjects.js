import React, { Component } from "react";
import grouplogo from '../images/people.svg';

export default class GroupProjects extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="p-4 p-md-5 mb-4  text-bg-dark text-center" id="groupprojects">
            <div class=" px-0">
            <img id="angularlogo" src={grouplogo} alt="html_logo" />
              <h1 class="display-4 fst-italic">Group Projects</h1>
            </div>
          </div>
          <div class="list-group">
            <a
              href="https://around-helsinki.herokuapp.com"
              class="list-group-item list-group-item-action"
              aria-current="true"
            >
              Around Helsinki (Full-stack --- Angular & Spring Boot)
            </a>
            <a
              href="https://metin-gercek.github.io/firsttermproject/public_html/"
              class="list-group-item list-group-item-action"
            >
              Restaurant Table Reservation (HTML-CSS --- UI Design)
            </a>
          </div>
        </div>
      </div>
    );
  }
}
