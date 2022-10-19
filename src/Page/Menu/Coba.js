import React, { useState } from "react";

export default function Coba() {
  const [searchString, setSearchString] = useState();
  const [passwordShown, setPasswordShown] = useState(false);

  const changeHandler = (e) => {
    setSearchString(e.target.value);
    console.log(e.target.value);
  };
  const togglePasswordVisiblity = (e) => {
    e.preventDefault();
    // console.log(`ini passwrodLogin`, passwordLoginRef.current);
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <div className="App">
      <div className="pass-wrapper bg-white rounded-lg">
        <input
          // ref={passwordLoginRef.current}
          type={passwordShown ? "text" : "password"}
          defaultValue={searchString}
          onChange={changeHandler}
          placeholder="Password"
          className="h-10 rounded-lg px-3 w-full  outline-pink-500 outline-offset-5 outline-5"
        />
        <button className="text-[#00fcb6]" onClick={togglePasswordVisiblity}>
          showPasswp
        </button>
      </div>
    </div>
  );
}
