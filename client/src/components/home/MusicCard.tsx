import { useContext } from "react";
import ControlButton from "./ControlButton";
import { AppContext } from "../../pages/App";
import { Music } from "../../utils/types";

function MusicCard(props: Music) {
  const { _id, title, artist, album, imageUrl } = props;
  const ctx = useContext(AppContext);

  // control track play/pause
  const onClick = () => {
    if (!ctx.activeMusic) {
      ctx.setActiveMusic({
        ...props,
        audio: new Audio(props.audioUrl),
      });
    } else {
      if (ctx.activeMusic.audio) {
        if (ctx.activeMusic._id === props._id) {
          if (ctx.activeMusic.audio.paused) {
            ctx.activeMusic.audio.play();
          } else {
            ctx.activeMusic.audio.pause();
          }
        } else {
          ctx.activeMusic.audio.pause();
          ctx.setActiveMusic({
            ...props,
            audio: new Audio(props.audioUrl),
          });
        }
      }
    }
  };

  return (
    <div
      className={`flex flex-row justify-between items-center mb-2 text-gray-500 hover:bg-slate-200 py-2 px-3 rounded-xl ${
        ctx.activeMusic?._id === _id ? "bg-slate-200 shadow-sm" : ""
      }`}
    >
      <div className="flex gap-x-2 w-[80%] md:w-[60%]">
        <div className="w-[50px] md:w-[70px]">
          <img
            className="w-full h-full rounded-xl"
            src={imageUrl}
            alt={title}
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold tracking-wider text-gray-700">
            {title}
          </h3>
          <div className="">{artist}</div>
        </div>
      </div>
      <div className="hidden md:block w-[20%]">{album}</div>
      <div className="md:w-[20%]">
        <ControlButton
          onClick={onClick}
          name={ctx.activeMusic?._id === props._id ? "pause" : "play"}
        />
      </div>
    </div>
  );
}

export default MusicCard;
