import "./App.css";
import { MainPage, Rotate } from "./Page";
import React, { useMemo, useState } from "react";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
import { UserContext } from "./Page/UserContext";

const App = () => {
  const [value, setValue] = useState({});
  const [userLogin, setUserLogin] = useState({});
  const [selectedAnimalID, setSelectedAnimalID] = useState(0);

  const providerValue = useMemo(
    () => ({
      value,
      setValue,
      selectedAnimalID,
      setSelectedAnimalID,
      userLogin,
      setUserLogin,
    }),
    [value, selectedAnimalID, userLogin]
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
