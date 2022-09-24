import "./App.css";
import { MainPage, Rotate } from "./Page";
import React, { Component } from "react";
import DeviceOrientation, { Orientation } from "react-screen-orientation";

class App extends Component {
  render() {
    return (
      <DeviceOrientation lockOrientation={"landscape"}>
        {/* Will only be in DOM in landscape */}
        <Orientation orientation="landscape" alwaysRender={false}>
          <div className="noSelect h-screen">
            <div className="w-full h-full flex items-center">
              <MainPage />
            </div>
          </div>
        </Orientation>
        {/* Will stay in DOM, but is only visible in portrait */}
        <Orientation orientation="portrait" alwaysRender={false}>
          <Rotate />
        </Orientation>
      </DeviceOrientation>
    );
  }
}

export default App;
