import { Link } from "react-router-dom";
import DownloadCv from "./DownloadCv";

const Navbar = () => {
  return (
    <>
      <div className=" pl-6 flex pt-6 w-full h-20  bg-slate-600">
        <div className="text-slate-50 font-semibold text-3xl basis-2/4 font-mono">
          <Link to="/">
            About<span className="text-orange-300">ME</span>
          </Link>
        </div>
        <div className="text-xl text-slate-50">
          <Link to="/about" className="px-5">
            About
          </Link>

          <button className="px-5" onClick={DownloadCv}>
            Resume
          </button>

          <Link to="/projects" className="px-5">
            Projects
          </Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
