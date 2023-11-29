import React, { Component } from "react";
import Carousel from "better-react-carousel";

import angularlogo from "../images/Angular_logo.svg";
import reactlogo from "../images/logo.svg";
import css3logo from "../images/css-3-logo.svg";
import html5logo from "../images/HTML5_logo.svg";
import springlogo from "../images/spring.svg";
import jslogo from "../images/javaScript_logo.svg";
import adobexd from "../images/adobexd.svg"

export default class Cards extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Languages</h2>
        </div>
        <Carousel cols={3} rows={1} gap={10} loop>
        <Carousel.Item className="carousel_item">
            <a href="/uxprototypes" >
              <img width="100%" src={adobexd} alt="adobexd" />
            </a>
            
          </Carousel.Item>
          <Carousel.Item className="carousel_item">
            <a href="/angular">
              <img width="100%" src={angularlogo} alt="angular" />
            </a>
            
          </Carousel.Item>
          <Carousel.Item>
            <a href="/react">
              <img width="100%" src={reactlogo} alt="react" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="/javascript">
              <img width="100%" src={jslogo} alt="jslogo" />
            </a>
          </Carousel.Item>
          <Carousel.Item classID="carousel_item">
            <a href="/spring-boot">
              <img width="100%" src={springlogo} alt="springboot" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="/html-css">
              <img width="100%" src={html5logo} alt="htmllogo" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="/html-css">
              <img width="100%" src={css3logo} alt="csslogo" />
            </a>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
