import React from "react";
import Nav from "./mainpagecontent/navbar";
import Slider from "./mainpagecontent/slider";
import MainView from "./mainpagecontent/Mainview";

export default ()=>(
  <div>
    <Nav></Nav>
    <p>
      This is a Header
    </p>
    <div >
        <Slider></Slider>
    </div>
    <MainView></MainView>

  </div>
)
