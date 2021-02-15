import React, { Component } from 'react';
import './App.css';
import bwipjs from 'bwip-js';


 

class App extends Component {
  componentDidMount() {
    try {
      // The return value is the canvas element
      let canvas = bwipjs.toCanvas('mycanvas', {
                bcid:        'qrcode',       // Barcode type
                text:        'http://make.cm',    // Text to encode
                scale:       15,               // 3x scaling factor
                height:      15,              // Bar height, in millimeters
                includetext: false,            // Show human-readable text
                textxalign:  'center',        // Always good to set this
            });
    } catch (e) {
        // `e` may be a string or Error object
    }
  }

  
  render() {
    return (
      <div className="App">
        <canvas id="mycanvas"></canvas>
      </div>
    );
  }
}

export default App;