import React from "react";
import buddy from "../../music/buddy.mp3";
import ReactAudioPlayer from "react-audio-player";
const MusicOnly = () => {
  return <ReactAudioPlayer src={buddy} autoPlay loop />;
};

export default MusicOnly;
