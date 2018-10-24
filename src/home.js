import React, { Component } from 'react';

export default class Home extends React.Component {
 render() {
    return (
     <div className="postsContainer mt-5">
      <div className="row pt-5">
       <div class="col-md-3">
        <div className="card">
          <img className="card-img-top" src="https://via.placeholder.com/350x150" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
       </div>
       <div class="col-md-3">
        <div className="card">
          <img className="card-img-top" src="https://via.placeholder.com/350x150" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
       </div>
       <div class="col-md-3">
        <div className="card">
          <img className="card-img-top" src="https://via.placeholder.com/350x150" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
       </div>
       <div class="col-md-3">
        <div className="card">
          <img className="card-img-top" src="https://via.placeholder.com/350x150" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
       </div>
      </div>
     </div>
    );
 }
}