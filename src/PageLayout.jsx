import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";

import { Link } from "react-router-dom";

import logo from "./assets/logo.jpeg";

const PageLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />

            {/* <footer className="px-[15%] flex justify-center items-center w-full flex-col gap-5  text-white bg-[#133770] py-12">
                <p>© 2024All Rights Reserved By CODE TECH</p>
                <div className=" bg-white rounded-md h-[1px] w-full"></div>

                <div className=" flex gap-5">
                    <a
                        href=""
                        className="h-[50px] w-[50px] bg-[#1b548c]  rounded-full  flex justify-center items-center"
                    >
                        <ImFacebook2 size={20} />
                    </a>
                    <a
                        href=""
                        className="h-[50px] w-[50px] bg-[#1b548c]  rounded-full flex justify-center items-center"
                    >
                        <FaSquareInstagram size={20} />
                    </a>
                    <a
                        href=""
                        className="h-[50px]  w-[50px] bg-[#1b548c]  rounded-full flex justify-center items-center"
                    >
                        <AiFillTwitterSquare size={20} />
                    </a>
                </div>
            </footer> */}

            <footer className="  overflow-clip bg-[#F5F5FA]  pt-5  relative bg-contain  md:h-[400px]  bg-[url('https://themes.hody.co/bezel/wp-content/themes/bezel-wp/assets/images/dotted-map.png')]">
                <div className="  px-8 md:px-[12%] py-8 text-[#787878] grid md:grid-cols-3 gap-8">
                    <div>
                        <img
                            src={logo}
                            alt=""
                            className=" h-[50px] cursor-pointer mix-blend-multiply"
                        />
                        <h3 className=" text-[20px] font-semibold my-5 text-[#222]">
                            Tshedza Budeli{" "}
                        </h3>

                        <div className=" flex flex-col gap-2 text-[15px]">
                            <p>Drone Pilot</p>
                            <p>Event Photography</p>
                            <p>Studio Photography</p>
                            <p>Architectural / Building Photography</p>
                        </div>
                    </div>

                    <div>
                        <h3 className=" text-[20px] font-semibold mb-5 text-[#222]">Contact</h3>

                        <div className=" flex flex-col gap-2 text-[15px]">
                            <p>
                                P: 079 814 9000 <br /> 067 058 2863
                            </p>

                            <p>E: 3applespictures@gmail.com</p>

                            <p>
                                Forest Hill City, Centurion Monavoni,
                                <br /> Maria RD 0157
                            </p>

                            <div className=" flex mt-2 gap-5 text-white">
                                <div
                                    onClick={() => {
                                        window.open(
                                            "https://www.youtube.com/@3applesguy",
                                            "_blank",
                                            "noopener,noreferrer"
                                        );
                                    }}
                                    className="h-[35px] w-[35px]  text-white bg-[#112f67]   rounded-full  flex justify-center items-center"
                                >
                                    <FaSquareYoutube size={12} />
                                </div>
                                <div
                                    onClick={() => {
                                        window.open(
                                            "https://www.instagram.com/3apples_pictures_sa/?igsh=MW9wZXFjdnpjZWNxZQ%3D%3D",
                                            "_blank",
                                            "noopener,noreferrer"
                                        );
                                    }}
                                    className="h-[35px] w-[35px]  text-white bg-[#112f67]   rounded-full flex justify-center items-center"
                                >
                                    <FaSquareInstagram size={12} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className=" text-[20px] font-semibold mb-5 text-[#222]">Links</h3>

                        <div className=" flex flex-col gap-2 text-[15px]">
                            <Link to={"/"}>Home</Link>
                            <Link to="/about-us"> About Us</Link>
                            <Link to="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>

                <div className=" w-full absolute inset-0 flex justify-end ">
                    <img src={logo} alt="" className=" mix-blend-multiply  opacity-15" />
                </div>
            </footer>
            <hr />
            <div className=" bg-[#F5F5FA] py-8">
                <p className=" text-center text-[#787878]">© Copyright 2024 Code Tech.</p>
            </div>
        </div>
    );
};

export default PageLayout;
