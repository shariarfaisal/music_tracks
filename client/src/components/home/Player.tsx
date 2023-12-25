import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../pages/App";

export default function Player() {
  const ctx = useContext(AppContext);
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.play();
      }
    }, 1000);

    return () => {
      if (ref.current) {
        ref.current.pause();
      }
    };
  }, [ctx.activeMusic]);

  if (!ctx.activeMusic) return null;
  const { imageUrl, title, artist, audioUrl, audio } = ctx.activeMusic;

  return (
    <div className=" bg-slate-300 fixed left-0 bottom-0 w-full h-[100px] py-2 px-3 fade-in">
      <div className="w-full lg:w-[80%] h-full mx-auto flex flex-row justify-between items-center">
        <div className="flex flex-row- gap-x-2">
          <div className="h-[50px] md:h-[70px]">
            <img
              className="w-full h-full rounded-xl shadow-lg"
              src={imageUrl}
              alt={title}
            />
          </div>
          <div className=" hidden md:block ">
            <h3 className="text-lg font-semibold tracking-wider text-gray-700">
              {title}
            </h3>
            <div className="">{artist}</div>
          </div>
        </div>
        <div className="w-[70%] md:w-[60%]">
          <audio
            className="w-full h-[36px] md:h-[50px] "
            ref={ref}
            src={audioUrl}
            controls={true}
          ></audio>
        </div>
        <div>
          <button
            onClick={() => {
              if (audio) {
                audio.pause();
                ctx.setActiveMusic(null);
              }
            }}
          >
            <img
              src="/close.svg"
              alt=""
              className="h-10 lg:h-14 cursor-pointer hover:scale-110 transform transition-all duration-200 ease-in-out"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
