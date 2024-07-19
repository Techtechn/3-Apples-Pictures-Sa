import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";
import Companies from "./Companies";

const AboutLinks = [
    {
        icon: "data:image/png;base64,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",
        h2: "Softwares",
        li: ["Photoshoot Editing", "Adobe Photoshop", "LightRoom"],
    },
    {
        icon: "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=800",
        h2: "Videos",
        li: ["Adobe After Effect", "Adobe Premier Pro", "Flimmore (Wondershare)"],
    },
    {
        icon: "https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=800",
        h2: "Pictures Shooting & Editing Skills",
        li: ["Shooting angles", "Light Balance", "Color Grading etc"],
    },
    {
        icon: "https://images.pexels.com/photos/821750/pexels-photo-821750.jpeg?auto=compress&cs=tinysrgb&w=800",
        h2: "Equipments Experience",
        li: [
            "Godox Lights (Strokes & Continuous lights",
            "DJI Drone Mavic Mini SE - Mavic 3 Pro",
            "Canon DSLR & Mirrorless",
            "DJI Ronin 3 Pro Gimbal ",
            "Black Magic(Live Recording)",
            "Sony Cameras",
        ],
    },

    {
        icon: "",
        h2: "Experience",
        li: [
            "Thapelo MolomoIdols Winner 2022) Person Photographer & Videographer",
            "Studio Photography at 3Apples Pictures Studio",
            "Somizi Mhlongo Personal Photographer & Videographer",
            "Paid Partnership with Tanqueray 2023 (Durban July)",
            "South African Fashion",
            "Shoot +50 Weddings",
            "IDOLS SA( 3 Years)",
            "AFI Fashion Show",
            "Emmy Studio",
            "Metro Awards",
            "Big Brothers",
            "Durban July",
            "Bushfire",
        ],
    },
    {
        icon: "",
        h2: "Video Shooting & Editing Skills",
        li: [
            "Light Settings",
            "Color Balance",
            "Cinematic Shoots",
            "Slow motion",
            "Color grading",
            "Drone Shoots",
            "Kicks",
        ],
    },
];

const AboutUs = () => {
    return (
        <>
            <section className=" w-full  h-[200px] md:h-[400px] relative">
                <img
                    src="https://wp.dynamiclayers.net/shutter/wp-content/uploads/sites/11/2019/07/p-4.jpg"
                    className=" h-full w-full object-cover"
                    alt=""
                />

                <div className=" absolute inset-0 h-full w-full  bg-black opacity-20"></div>

                <div className=" absolute inset-0 h-full w-full flex justify-center items-center">
                    <h3 className=" text-[48px] text-white font-semibold">About Us</h3>
                </div>
            </section>

            <section className="  py-8 md:py-20 px-8 md:px-[15%]">
                <h3 className=" text-[18px] md:text-[28px] text-[#222]  font-semibold  text-center leading-loose">
                    " We are a quality driven photographer Company, with an eye for detail, driven
                    by client's satisfaction. Through a variety of photoshoot styles, creative and
                    strong details, we bring forth initiative drive & people oriented experience
                    which, qualifies us to be the best Photography company. We accustomed with
                    expertise in:"
                </h3>
            </section>

            <section className=" py-8 md:py-20 px-8 md:px-[12%]  bg-[#F5F5FA]">
                <div className=" grid md:grid-cols-3 md:gap-y-10">
                    {AboutLinks.map(({ icon, h2, li }) => (
                        <div className="  p-4  text-[#999999]   ">
                            <div className=" flex   items-center gap-5 mb-4">
                                <h3 className=" text-[#47474f] text-[21px] font-semibold ">{h2}</h3>
                            </div>
                            <ul>
                                {li.map((text) => (
                                    <li className=" text-sm mb-1 flex items-start gap-2 pr-5">
                                        <span>
                                            <FaArrowRightLong
                                                size={10}
                                                className="text-[#112f67]"
                                            />
                                        </span>
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <Companies />

            {/* <div className="px-[15%] bg-[#FCF9F5] py-16">
                <div className=" flex flex-col  items-center   pb-5 ">
                    <img src="https://wiso-html.foxthemes.me/images/decor.png" alt="" />
                    <h3 className=" text-center text-[36px]   font-medium  tracking-[2.7px]">
                        About Us
                    </h3>
                </div>

                <p className=" text-center px-[11%] text-[#999999]">
                    We are a quality driven photographer Company, with an eye for detail, driven by
                    client's satisfaction. Through a variety of photoshoot styles, creative and
                    strong details, we bring forth initiative drive & people oriented experience
                    which, qualifies us to be the best Photography company. We accustomed with
                    expertise in:
                </p>

                <div className=" grid grid-cols-3 mt-10 gap-5 ">
                    {AboutLinks.map(({ icon, h2, li }) => (
                        <div className=" bg-white p-4  text-[#999999]  drop-shadow-md ">
                            <div className=" flex items-center gap-5 mb-4">
                                {/* <img
                                src={icon}
                                alt=""
                                className=" h-[40px] w-[40px] bg-blue-500 rounded-full"
                            /> */}
            {/* <h3 className=" text-black text-lg ">{h2}</h3>
                            </div>
                            <ul>
                                {li.map((text) => (
                                    <li className=" text-sm mb-1 flex items-start gap-2 ">
                                        <span>
                                            {" "}
                                            <FaArrowRightLong
                                                size={10}
                                                className="text-[#112f67]"
                                            />{" "}
                                        </span>
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div> */}
        </>
    );
};

export default AboutUs;
