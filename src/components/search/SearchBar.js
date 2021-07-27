import React, { Component } from 'react';
import axios from "axios";




export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Enter Pokemon Name"
            className="form-control mx-auto"
            style={{
              backgroundColor: 'white transparent',
              height: '1.75em',
              width: '75%',
              borderRadius: '20px',
              opacity: '0.8',
              fontSize: '1.5em',
              margin: '1.5em'
            }}
          />
        </form>
      </div>
    );
  }
}