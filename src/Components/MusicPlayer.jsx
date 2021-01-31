import React from "react";
import SpotifyPlayer from "react-spotify-player";

const MusicPlayer = () => {
  return (
    <div>
      <SpotifyPlayer
        uri="spotify:artist:2x9SpqnPi8rlE9pjHBwmSC"
        size={{ width: "50%", margin: "auto", height: "auto" }}
        view={"list"}
        theme={"black"}
      />
    </div>
  );
};

export default MusicPlayer;
