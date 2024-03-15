import { Link } from "react-router-dom";
import photo from "../assets/a.jpg";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full h-screen bg-slate-300">
        <div className="flex-auto my-28 ">
          <h1 className="text-5xl pl-6 mt-20 ">
            Namaste <span className="rounded-full text-4xl">🙏</span>,
          </h1>
          <h2 className="text-5xl pl-6 pt-5">
            I am <span className="font-bold">Afshal Maharjan</span>
          </h2>
          <h3 className="pl-6 pt-3 text-3xl">Full-Stack Web Developer</h3>
          <div className="pl-3 pt-4 mt-8 flex">
            <Link
              target="_blank"
              className="text-2xl px-3 text-cyan-800"
              to="https://www.facebook.com/NotAfshalMhrzn/"
            >
              <FaFacebook />
            </Link>
            <Link
              target="_blank"
              to="https://github.com/notafshal"
              className="text-2xl px-3 text-cyan-800"
            >
              <FaGithub />
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/afshal-maharjan-308a20221/"
              className="text-2xl px-3 text-cyan-800"
            >
              <FaLinkedin />
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/not_afshal.mah/"
              className="text-2xl px-3 text-cyan-800"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>

        <div className="mt- 7 flex-auto ml-6 pl-6 my-28">
          <img
            src={photo}
            className="ml-11 mb-7 w-80 border-0 rounded-full"
            alt="photo"
          />
        </div>
      </div>
    </>
  );
};
export default Home;
