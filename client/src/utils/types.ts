export type AppContextType = {
  isSearched: boolean;
  setIsSearched: (isSearched: boolean) => void;
  results: Music[];
  setResults: (results: Music[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  activeMusic: ActiveMusic | null;
  setActiveMusic: (music: ActiveMusic | null) => void;
};

export interface Music {
  _id: string;
  title: string;
  artist: string;
  album: string;
  imageUrl: string;
  audioUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface ActiveMusic extends Music {
  audio: HTMLAudioElement | null;
}
