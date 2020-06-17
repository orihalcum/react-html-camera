import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ padding: 60 }}>
        <img src={logo} className="App-logo" alt="logo" style={{ height: 80 }}/>
        <h1>iOS 10.3 Form Examples</h1>
        <p>Some new additions to Safari in iOS 10.3</p>
        <div class="col-md-6">
          <h2>Live Image/Video Capture</h2>
          <p><label>Rear Facing Camera Image <input id="standardImageCapture" type="file" accept="image/*" capture /></label></p>
          <p><label>Rear Facing Camera Video <input id="standardVideoCapture" type="file" accept="video/*" capture /></label></p>
          <p><label>Selfie Image <input id="frontImage" type="file" accept="image/*" capture="user" /></label></p>
          <p><label>Selfie Video <input id="frontVideo" type="file" accept="video/*" capture="user" /></label></p>
          <h2>HTML 5 form field validation feedback</h2>
          <p>Now when you put required="true" or type="email" (or any other HTML5 validation attribute) on a form element, you get feedback after submitting the form.</p>
        </div>
      </header>
    </div>
  );
}

export default App;
