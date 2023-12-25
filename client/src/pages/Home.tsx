import { useContext, useEffect } from "react";
import { AppContext } from "./App";
import MusicCardHeader from "../components/home/MusicCardHeader";
import MusicCard from "../components/home/MusicCard";
import Player from "../components/home/Player";
import Title from "../components/home/Title";
import axios from "axios";
import NoData from "../components/home/NoData";

function Loading({ loading }: { loading: boolean }) {
  if (!loading) return null;
  return (
    <div className="mx-auto my-3 text-center font-semibold text-slate-500 tracking-widest">
      Loading...
    </div>
  );
}

function Home() {
  const ctx = useContext(AppContext);

  const fetch = async () => {
    try {
      ctx.setLoading(true);
      const res = await axios("/tracks?limit=20");
      ctx.setResults(res.data);
      ctx.setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <Loading loading={ctx.loading} />
      {!ctx.loading && ctx.isSearched && <Title />}
      {ctx.results.length > 0 && (
        <div className="pb-[100px] mt-4">
          <MusicCardHeader />
          {ctx.results.map((music) => (
            <MusicCard key={music._id} {...music} />
          ))}
        </div>
      )}
      {ctx.results.length === 0 && <NoData isSearched={ctx.isSearched} />}
      <Player />
    </div>
  );
}

export default Home;
