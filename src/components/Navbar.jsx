import React from "react";
import { Link } from "react-router";
import LogOutBtn from "./LogOutBtn";
import logo from '../assets/logo.png'
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/challenges">Challenges</Link>
      </li>
      <li>
        <Link to="/my-activities">My Activities</Link>
      </li>
    </>
  );

  const btns = (
    <>
      <Link className="btn btn-primary" to="/auth/login">
        Login
      </Link>
      <Link className="btn btn-primary" to="/auth/register">
        Register
      </Link>
      <LogOutBtn></LogOutBtn>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar justify-between w-11/12 mx-auto">
        <div className="flex">
          <div className="drawer md:hidden">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-1" className="btn drawer-button"><FiMenu></FiMenu></label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 min-h-full w-80 p-4 space-y-5">
                {/* Sidebar content here */}
                {links}
                {btns}
              </ul>
            </div>
          </div>
          <Link to='/' className="font-semibold text-xl flex gap-5 items-center"><img className="w-[50px] rounded-full" src={logo} alt="Logo" />EcoTrack</Link>
        </div>
        <div>
          <ul className="hidden md:flex md:gap-5">{links}</ul>

        </div>
        <div className="flex gap-5">
          <div className="space-x-5 hidden md:block">{btns}</div>
          <div className="tooltip tooltip-bottom tooltip-primary" data-tip="Imad Imran">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <a>My Activities</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
