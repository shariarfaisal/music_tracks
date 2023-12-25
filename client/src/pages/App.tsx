import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLayout from "../components/layout";
import Home from "./Home";
import { createContext, useState } from "react";
import { ActiveMusic, AppContextType, Music } from "../utils/types";
import { initAxiosSetup } from "../utils/axios";

// Initialize axios setup
initAxiosSetup();

export const AppContext = createContext<AppContextType>({
  isSearched: false,
  setIsSearched: () => {},
  results: [],
  setResults: () => {},
  loading: false,
  setLoading: () => {},
  activeMusic: null,
  setActiveMusic: () => {},
});

function App() {
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const [results, setResults] = useState<Music[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeMusic, setActiveMusic] = useState<ActiveMusic | null>(null);

  return (
    <AppContext.Provider
      value={{
        isSearched: isSearched,
        setIsSearched: setIsSearched,
        results,
        setResults,
        loading,
        setLoading,
        activeMusic: activeMusic,
        setActiveMusic: setActiveMusic,
      }}
    >
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AppLayout>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
