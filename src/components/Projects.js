import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Angular from "./Angular";
import NotFound from "./NotFound";
import Header from './Header';
import Javascript from './Javascript';
import GroupProjects from './GroupProjects';
import Reactproject from './Reactproject';
import SpringBoot from './SpringBoot';
import HtmlCss from './HtmlCss';
import {About} from './About';
import {Contact} from './Contact';
import Uxprototypes from "./Uxprototypes";


export default class Projects extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route  path="/angular" element={<Angular />} />
          <Route  path="/javascript" element={<Javascript />} />
          <Route  path="/group-projects" element={<GroupProjects />} />
          <Route  path="/react" element={<Reactproject />} />
          <Route  path="/spring-boot" element={<SpringBoot />} />
          <Route  path="/html-css" element={<HtmlCss />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/contact" element={<Contact />} />
          <Route  path="/uxprototypes" element={<Uxprototypes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </div>
    );
  }
}
