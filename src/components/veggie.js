import React from 'react';
import veggie from './images/veggie.jpeg';
import './css/slice.css';

function Veggie() {
  return(
    <div className="Veggie col-4">
      <div className="card">
        <img src={ veggie } class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">veggie slice</h5>
          <p className="card-text">you trying to be helthy but you still can't resist pizza? wellthen the veggie slice is for you! This is guilt-free pizza at its finest </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $1.00</li>
        </ul>
      </div>
    </div>
  );
}

export default Veggie;
