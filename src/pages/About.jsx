import {
  FaBootstrap,
  FaGithub,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex bg-slate-300 pl-6 w-full h-screen">
        <div>
          <div className="bg-gray-200 h-min rounded-md mt-3 ">
            <div className="text-center text-lg font-bold bg-orange-300 rounded-md ">
              As a Web Developer
            </div>
            <p className="w-96 mt-2 mb-4 ">
              As a seasoned full-stack web developer, I specialize in crafting
              dynamic digital experiences from front to back. I bring a holistic
              approach to every project. From responsive designs to seamless
              functionality, I strive to create web solutions that not only meet
              but exceed expectations. Dive in to explore my diverse range of
              projects and see how I can bring your ideas to life in the digital
              realm.
            </p>
          </div>
          <div className="bg-gray-200 h-min rounded-md mt-3 ">
            <div className="text-center text-lg font-bold bg-orange-300 rounded-md ">
              Education
            </div>
            <p className="w-96 mt-2 mb-4">
              Creative Academy
              <div className="text-sm text-gray-600">SLC~2016</div>
              Bluebird Higher Secondary School
              <div className="text-sm text-gray-600">NEB~2018</div>
              Sagarmatha College of Science and Technology
              <div className="text-sm text-gray-600">BSC.CSIT~2023</div>
            </p>
          </div>
          <div className="bg-gray-200 h-min rounded-md mt-3 ">
            <div className="text-center text-lg font-bold bg-orange-300 rounded-md ">
              Certification
            </div>
            <p className="w-96 mt-2 mb-4">
              Smart InfoTech
              <div className="text-sm text-gray-600">
                Diploma in Computer Application
              </div>
              Coding Technology
              <div className="text-sm text-gray-600">
                Core Java + OOPs + MYSQL +Servlet&JSPs + Collection framework
              </div>
              DynoAcademy
              <div className="text-sm text-gray-600">
                Front-End Web Development with ReactJs
              </div>
              Deerwalk Training Center
              <div className="text-sm text-gray-600">
                MERN Stack Development
              </div>
            </p>
          </div>
        </div>
        <div>
          <div className="bg-gray-200 h-min rounded-md ml-5 mt-3 text-3xl text-center">
            <div className="bg-orange-300 rounded-md ">Skills</div>
            <div className="flex p-3">
              <FaHtml5 className="text-7xl px-2 mx-2 text-red-700" />
              <IoLogoCss3 className="text-7xl px-2 mx-2 text-blue-700" />
              <IoLogoJavascript className="text-7xl px-2 mx-2 text-yellow-400" />
              <FaReact className="text-7xl px-2 mx-2 text-blue-400" />
              <FaBootstrap className="text-7xl px-2 mx-2 text-purple-700" />
              <SiTailwindcss className="text-7xl px-2 mx-2 text-blue-400" />
              <FaNodeJs className="text-7xl px-2 mx-2 text-green-600" />
              <SiExpress className="text-7xl px-2 mx-2 text-brown-600" />
              <SiMongodb className="text-7xl px-2 mx-2 text-green-700" />
              <SiMysql className="text-7xl px-2 mx-2 text-blue-600" />
              <FaJava className="text-7xl px-2 mx-2 text-orange-600" />
              <FaGithub className="text-7xl px-2 mx-2" />
            </div>
          </div>
          <div className="mt-3 bg-gray-200 h-min rounded-md ml-5 mt-3 text-3xl text-center">
            <div className="bg-orange-300 rounded-md ">Projects</div>
            <div>Movie Suggester</div>
            <div>Movie Suggester</div>
            <div>Movie Suggester</div>
            <div>Movie Suggester</div>
            <button className="bg-red">
              <Link to="/projects">For details</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
