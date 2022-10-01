import "./App.css";
import { MainPage, Rotate } from "./Page";
import React, { useMemo } from "react";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
import { UserContext } from "./Page/UserContext";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState({
    diamond: 3162,
    egg: 27,
    milk: 12,
    meat: 20,
  });
  const [selectedAnimalID, setSelectedAnimalID] = useState(0);

  const providerValue = React.useMemo(
    () => ({
      value,
      setValue,
      selectedAnimalID,
      setSelectedAnimalID,
    }),
    [value, selectedAnimalID]
  );

  return (
    <DeviceOrientation lockOrientation={"landscape"}>
      {/* Will only be in DOM in landscape */}
      <Orientation orientation="landscape" alwaysRender={false}>
        <div className="noSelect h-screen">
          <div className="w-full h-full flex items-center">
            <UserContext.Provider value={providerValue}>
              <MainPage />
            </UserContext.Provider>
          </div>
        </div>
      </Orientation>
      {/* Will stay in DOM, but is only visible in portrait */}
      <Orientation orientation="portrait" alwaysRender={false}>
        <Rotate />
      </Orientation>
    </DeviceOrientation>
  );
};

export default App;
