import Wave from "./Wave";

function ControlButton({
  name,
  onClick = () => {},
}: {
  name: "play" | "pause";
  onClick?: () => void;
}) {
  return (
    <div className="w-[70px]" title={name}>
      {name === "pause" ? (
        <Wave />
      ) : (
        <img
          src={`${name}.svg`}
          alt=""
          className="h-5 cursor-pointer hover:scale-110 transform transition-all duration-200 ease-in-out"
          onClick={onClick}
        />
      )}
    </div>
  );
}

export default ControlButton;
