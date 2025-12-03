import "tailwindcss"
import "../../index.css"
import './Header.css'
import { Link } from "react-router-dom";
import logo from "../../assets/image/ChatGPT Image Nov 30, 2025, 07_46_08 PM.png";
export default function Header() {
  return (
    <div>
      <div className="container">
        <div className="container-box flex justify-between items-center mx-5 my-5">
          <div className="leftSection">
            <Link to="/dashboard">
              <img src={logo} alt="" className="w-16 rounded-full" />
            </Link>
          </div>
          <div className="rightSection flex gap-4 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Type here"
                className="
                  w-64
                  pl-10 pr-3 py-2
                  rounded-xl
                  bg-white/10 
                  text-white
                  placeholder-white/60
                  border border-white/20
                  focus:outline-none focus:ring-2 focus:ring-white/30
                  transition
                "
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-5 absolute left-3 top-1/2 -translate-y-1/2 text-white/70"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>

            <Link to={"/login"} className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <p className="text-2xl text-white">sign in</p>
            </Link>
            <div className="notifcation">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}