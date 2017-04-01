import React from "react";
import GestonView2 from "./gestonview2";
export default()=>(
  <div className = "col-md-4 col-lg-4 ">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4><i className="fa fa-fw fa-check"></i> Gexton </h4>
      </div>
      <div className = "panel-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
          optio corporis quae nulla aspernatur in alias at
          numquam rerum ea excepturi expedita tenetur assumenda
          voluptatibus eveniet incidunt dicta nostrum quod?
        </p>
        <GestonView2></GestonView2>
        {/* <a href='#' className="btn btn-default">View more</a> */}
        {/* <button type='button' className='btn btn-default' data-toggle='modal' data-target='#topicModal'>
          View More
        </button>
        <div className='modal fade' id='topicModal'  role='dialog' aria-labelledby="myModalLabel">
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button type="button" className="close" data-dismiss="modal" aria-label="close"><span aria-hidden="true">&times;</span></button>
                <h4 className='modal-title' id='myModalLabel'>New Topic</h4>
              </div>
              <div className='modal-body'>
                <div className='form-group'>
                  <label >Topic</label>
                  <input type="text" className="form-control" id="topic" placeholder="Enter Topic"/>
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" id="user" placeholder="Enter Username"/>
                </div>
              </div>
              <div className="modal-footer">
              <button type="submit" className="btn btn-default" id="submit" data-dismiss="modal">Submit</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  </div>
)
