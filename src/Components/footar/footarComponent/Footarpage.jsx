import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
export default function Footarpage() {
  const [language, setLanguage] = useState("English");
  return (
    <>
      <div className="bg-[#3B2F4A] text-white pt-30 px-15 pb-40">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="flex">
              <img src="./public/logo.png" alt="" />
              <p className="">Bookshop</p>
            </div>
            <ul className="flex  gap-10 text-[18px]">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="Books">Books</NavLink>
              </li>
              <li>
                <NavLink to="About">About us</NavLink>
              </li>
            </ul>
          </div>

          <div className="flex gap-3">
            <Link>
              <img className="w-6 h-6" src="./public/facbok.png" alt="" />
            </Link>
            <Link>
              <img className="w-6 h-6" src="./public/inst.png" alt="" />
            </Link>
            <Link>
              <img className="w-6 h-6" src="./public/you.png" alt="" />
            </Link>
            <Link>
              <img className="w-6 h-6" src="./public/X.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="border-t-2 border-[#FFFFFF33] mt-4 pt-4 flex justify-between">
          <p>{"<Developed By> EraaSoft <All Copy Rights Reserved @2024"}</p>
          <div className="flex items-center gap-3">
            <img className="w-6 h-6" src="./public/earth.png" alt="" />
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost border border-[#FFFFFF80] w-27.5"
                >
                  <p>{language}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="m19 12l12 12l-12 12"
                    ></path>
                  </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content  rounded-box z-1 w-28 bg-black"
                >
                  <li>
                    <a onClick={() => setLanguage("Français")}>Français</a>
                  </li>
                  <li>
                    <a onClick={() => setLanguage("English")}>English</a>
                  </li>
                  <li>
                    <a onClick={() => setLanguage("عربي")}>عربي</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
