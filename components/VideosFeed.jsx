import { useState, useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import videos from "./videosforfeed/videos.json";
//Obtencion de videos de JSON.
/*Posibilidad de expansion con un fetch*/

function VideosFeed() {
  const [error, setError] = useState(null);
  console.log("error");
  if (error) {
    return <span>{error}</span>;
  }
  return videos.map((video) => {
    return (
      <div
        key={video.id}
        className="snap-center"
      >
        <VideoPlayer {...video} />
      </div>
    );
  });
}

export default VideosFeed;
