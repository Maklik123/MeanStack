import React from "react";
import Codex1 from "./subViews/codexview1";
import Gexton1 from "./subViews/gextonview1";
import Safayar1 from "./subViews/safayarview1";
import SoftSolution1 from "./subViews/softsolution1";
import CicHub1 from "./subViews/cichubview1";

export default()=>(
  <div className = "container">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="page-header">
          Hyderabad Software Houses
        </h1>
        <div className= "col-md-9 col-lg-9 col-sm-9 col-xs-12">
          <Codex1></Codex1>
          <Gexton1></Gexton1>
            <Safayar1></Safayar1>
          <SoftSolution1></SoftSolution1>
          <CicHub1></CicHub1>
          <Safayar1></Safayar1>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-3 sidebar-offcanvas">
          <div className="list-group">
            <a href="#" className="list-group-item active">Link</a>
            <a href="#" className="list-group-item">Link</a>
            <a href="#" className="list-group-item">Link</a>
            <a href="#" className="list-group-item">Link</a>
            <a href="#" className="list-group-item">Link</a>
            <a href="#" className="list-group-item">Link</a>
            <a href="#" className="list-group-item">Link</a>
            <a href="#" className="list-group-item">Link</a>
            <a href="#" className="list-group-item">Link</a>
            <a href="#" className="list-group-item">Link</a>

          </div>
        </div>
      </div>




    </div>
  </div>
)
