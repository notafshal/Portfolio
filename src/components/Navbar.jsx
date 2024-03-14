import { Link } from "react-router-dom";

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
          <Link to="/contact" className="px-5">
            Contact
          </Link>
          <Link to="/resume" className="px-5">
            Resume
          </Link>
          <Link to="/education" className="px-5">
            Education
          </Link>
          <Link to="/projects" className="px-5">
            Projects
          </Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
