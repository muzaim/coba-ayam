import "./App.css";
import { MainPage, Rotate } from "./Page";
import React, { useMemo, useState } from "react";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
import { UserContext } from "./Page/UserContext";
import MusicOnly from "./Page/Music/MusicOnly";

const App = () => {
  const [value, setValue] = useState({});
  const [userLogin, setUserLogin] = useState({});
  const [selectedAnimalID, setSelectedAnimalID] = useState({
    id: "",
    ternak_id: "",
  });

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
          <div className="w-full h-full flex items-center relative">
            <UserContext.Provider value={providerValue}>
              <MainPage />
              <MusicOnly />
            </UserContext.Provider>
          </div>
        </div>
      </Orientation>
      {/* Will stay in DOM, but is only visible in portrait */}
      <Orientation orientation="portrait" alwaysRender={false}>
        {/* MINTA ROTATE PAGE */}
        <Rotate />
      </Orientation>
    </DeviceOrientation>
  );
};

export default App;
