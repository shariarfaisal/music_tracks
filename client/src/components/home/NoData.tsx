export default function NoData({ isSearched }: { isSearched: boolean }) {
  return (
    <div className="mx-auto h-[120px] flex items-center justify-center font-semibold text-slate-500 tracking-widest">
      {isSearched ? "No results found" : "Search for music"}
    </div>
  );
}
