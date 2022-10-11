import "./App.css";
import { MainPage, Rotate } from "./Page";
import React, { useMemo } from "react";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
import { UserContext } from "./Page/UserContext";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [value, setValue] = useState({
    diamond: "0",
    pakan: "0",
    egg: "0",
    milk: "0",
    meat: "0",
  });
  const [selectedAnimalID, setSelectedAnimalID] = useState(0);
  const [userToken, setUserToken] = useState("");
  const [userLogin, setUserLogin] = useState({});

  const providerValue = useMemo(
    () => ({
      value,
      setValue,
      selectedAnimalID,
      setSelectedAnimalID,
      userToken,
      setUserToken,
      userLogin,
      setUserLogin,
    }),
    [value, selectedAnimalID, userToken, userLogin]
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
