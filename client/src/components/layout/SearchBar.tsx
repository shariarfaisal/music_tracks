import { useContext, useState } from "react";
import { AppContext } from "../../pages/App";
import axios from "axios";

function SearchBar() {
  const ctx = useContext(AppContext);
  const [search, setSearch] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      ctx.setLoading(true);
      if (!search) {
        const defaultTracks = await axios.get(`/tracks?limit=20`);
        ctx.setResults(defaultTracks.data);
        ctx.setLoading(false);
      }

      const res = await axios.get(`/tracks?search=${search}&limit=20`);
      ctx.setResults(res.data);
      ctx.setLoading(false);
      if (!ctx.isSearched) {
        ctx.setIsSearched(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full px-3 md:px-0 md:w-[70%] lg:w-[50%] relative"
    >
      <input
        onChange={onChange}
        value={search}
        className="block w-full outline-none rounded-full px-3 py-2 ps-5 text-md tracking-wider text-gray-700 border border-gray-300 bg-gray-50 focus:border-gray-400 focus:border-2 placeholder:text-sm"
        placeholder="Search for a song, artist, or album"
      />
      <button type="submit" className="absolute end-6 md:end-4 bottom-2">
        <img
          className="w-6 hover:scale-110 transform transition-all duration-200 ease-in-out"
          src="/search.svg"
          alt=""
        />
      </button>
    </form>
  );
}

export default SearchBar;
