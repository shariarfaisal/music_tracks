import AppLogo from "./AppLogo";
import SearchBar from "./SearchBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative m-0 p-0">
      <nav className="sticky top-0 left-0 w-full h-[72px] bg-slate-100 border bottom-1 border-b-slate-200 dark:bg-gray-900 z-50">
        <div className="w-full lg:w-[80%] mx-auto flex flex-row justify-between items-center ">
          <AppLogo />
          <SearchBar />
          <div></div>
        </div>
      </nav>
      <div className="bg-white px-3 lg:px-0">
        <div className="w-full lg:w-[80%] mx-auto">{children}</div>
      </div>
    </div>
  );
}
