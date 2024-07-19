import { useState } from "react";

import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { LuTwitter } from "react-icons/lu";
import { TbBrandFacebook } from "react-icons/tb";
import { PiInstagramLogo } from "react-icons/pi";

import { Link } from "react-router-dom";

import logo from "./assets/logo.jpeg";

import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div className=" bg-[#112f67]  text-white flex  justify-between gap-3 py-[10px]  px-8 md:px-[12%]">
                <div className="flex gap-1 md:gap-3 text-[12px]  md:text-base ">
                    <div className=" flex  items-center gap-2">
                        <MdOutlineLocalPhone />
                        <p>079 814 9000</p>
                    </div>
                    <div className=" h-[20px] w-[1px] bg-white"></div>
                    <div className=" flex  items-center gap-2">
                        <MdOutlineMail />
                        <p>3applespictures@gmail.com</p>
                    </div>
                </div>

                <div className="md:flex gap-3  hidden items-center ">
                    <p>Follow Us :</p>
                    <LuTwitter />
                    <TbBrandFacebook />
                    <PiInstagramLogo />
                </div>
            </div>

            <nav className=" h-[90px] flex bg-white  justify-between items-center px-6  md:px-[12%] ">
                <img src={logo} alt="" className=" h-[43.38px] object-contain  cursor-pointer" />

                <ul className=" hidden md:flex items-center gap-5 text-[13px]   font-semibold  text-[#222] ">
                    <li className=" cursor-pointer">
                        <Link to="/"> HOME</Link>
                    </li>

                    <li className=" cursor-pointer">
                        <Link to="/about-us"> ABOUT US</Link>
                    </li>
                    <li className=" cursor-pointer">
                        <Link to="/contact">CONTACT US</Link>
                    </li>
                </ul>

                <div className=" md:hidden">
                    <button onClick={() => setShowMenu(true)}>
                        <IoMenu size={30} />
                    </button>
                </div>
            </nav>

            <div className=" bg-gradient-to-r from-green-400 to-blue-500 h-[1.5px]"></div>
            {showMenu && (
                <div className="  z-50 ease-in-out delay-1000 bg-[#194D47] text-white p-8 absolute inset-0 h-full flex justify-center items-center">
                    <button
                        className=" absolute top-0 right-0 p-6 cursor-pointer"
                        onClick={() => setShowMenu(false)}
                    >
                        <IoCloseSharp size={30} />
                    </button>
                    <ul className="">
                        <li className=" cursor-pointer py-2  ">
                            <Link
                                to="/"
                                onClick={() => setShowMenu(false)}
                                className="text-white text-center"
                            >
                                HOME
                            </Link>
                        </li>

                        <li className=" cursor-pointer py-2">
                            <Link
                                to="/about-us"
                                onClick={() => setShowMenu(false)}
                                className="text-white text-center"
                            >
                                ABOUT US
                            </Link>
                        </li>
                        <li className=" cursor-pointer py-2">
                            <Link
                                to="/contact"
                                onClick={() => setShowMenu(false)}
                                className="text-white text-center"
                            >
                                CONTACT US
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
