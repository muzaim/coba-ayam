import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../UserContext";

// Import your audio file
import song from "../../music/buddy.mp3";
import { useState } from "react";
import { useContext } from "react";

const MusicPlay = <FontAwesomeIcon icon={faVolumeHigh} />;
const MusicMute = <FontAwesomeIcon icon={faVolumeMute} />;

const MusicOnly = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audio, setAudio] = useState(new Audio(song));

  const playPause = () => {
    if (isPlayingAudio) {
      // Pause the song if it is playing
      audio.pause();
    } else {
      // Play the song if it is paused
      audio.play();
    }

    // Change the state of song
    setIsPlayingAudio(!isPlayingAudio);
  };
  return (
    <div className="absolute z-10 bottom-7 right-16">
      {/* Show state of song on website */}

      {/* Button to call our main function */}
      <button onClick={playPause}>
        <i className="text-white text-lg">
          {isPlayingAudio ? MusicPlay : MusicMute}
        </i>
      </button>
    </div>
  );
};

export default MusicOnly;
