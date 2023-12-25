export default function MusicCardHeader() {
  return (
    <div className="flex flex-row mb-[30px] border-b font-semibold tracking-wider text-gray-600">
      <div className="flex gap-x-2 w-[80%] md:w-[60%]">
        <div className="w-[70px]"></div>
        <div className="">Title</div>
      </div>
      <div className=" hidden md:block w-[20%]">Album</div>
      <div className="w-[20%]">Play</div>
    </div>
  );
}
