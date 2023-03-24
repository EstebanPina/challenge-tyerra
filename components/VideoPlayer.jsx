import { useRef } from "react";
import { useEffect, useState } from "react";
function VideoPlayer(props) {
  const video = useRef(null);
  //Verificacion que pantalla exista para detectar video
  /*Pendiente analizar una mejor forma de hacer un prerrenderizado*/ 
  if (typeof window !== "undefined") {
    const options = {
      root: document.querySelector("main"),
      rootMargin: "0px",
      threshold: 0.9,
    };
//Observador de que video se encuentra en ese momento mostrandose
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;
        target._handleIntersect(isIntersecting);
      });
    }, options);
//Detecta espacio entre video y pausa e inicia video deacuerdo a esto
    function useIntersectionVideoPlayer({ video }) {
      const [playing, setPlaying] = useState(true);

      useEffect(() => {
        if (!video.current) return;

        observer.observe(video.current);
        video.current._handleIntersect = (isIntersecting) => {
          const { current: videoEl } = video;

          isIntersecting ? videoEl.play() : videoEl.pause();

          setPlaying(!videoEl.paused);
        };
      }, [video.current]);
//Funcion de parar o iniciar video
      const handlePlay = () => {
        const { current: videoEl } = video;
        playing ? videoEl.pause() : videoEl.play();

        setPlaying(!playing);
      };

      return {
        handlePlay,
        playing,
      };
    }

    const { playing, handlePlay } = useIntersectionVideoPlayer({ video });

    const { src } = props;
    //Componente de video
    return (
      <div className="relative">
        <video
          className=" w-full h-full min-h-screen"
          controls={false}
          loop
          onClick={handlePlay}
          ref={video}
          src={src}
        />
      </div>
    );
  }
}

export default VideoPlayer;
