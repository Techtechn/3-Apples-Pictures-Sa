import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const COMPANIES = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIwi1iZVVvER90zgXDWTrDvezKkrS6msRdw&s",
    "https://cdn.mos.cms.futurecdn.net/LBXnXnLGJybC5ZvgdEP6on.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kjoJvSG0NYfrCByx28EQcRQrk2Gt3Fg7GQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQym9u_aipabmMpQoicXAXxtrLrohpDq-1unw&s",
    "https://mir-s3-cdn-cf.behance.net/projects/404/19e54e174338879.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png",
    "https://www.inscape.ac/media/sample-site/inscape-website/content-assets/images/blog/SAfashionweek-1.jpg",
    "https://abcongroup.co.za/wp-content/uploads/2023/11/abcon-logo-1.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-fzHkvHHDwYYtaoyZzWsiAcISWQQGXdUCqw&s",
    "https://upload.wikimedia.org/wikipedia/commons/b/b4/Tanqueray_logo.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zhZxQAwaVTnfPOTkLi2oQep55DsKCmNi7w&s",
    "https://foresthillcity.co.za/wp-content/uploads/2021/03/Forest-Hill-Logo-Green.png",
];

const Companies = () => {
    const settings = {
        infinite: true,
        slidesToShow: 11,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };
    return (
        <section className="  py-20 px-[12%]  bg-white">
            <div className=" flex flex-col  items-center ">
                <img src="https://wiso-html.foxthemes.me/images/decor.png" alt="" />
                <h3 className=" text-center text-[36px]   font-medium  tracking-[2.7px] pt-2 pb-5">
                    Companies Worked With
                </h3>
            </div>

            <div className="slider-container  my-8">
                <Slider {...settings}>
                    {COMPANIES.map((company, index) => (
                        <div key={index} className="h-[100px] p-5">
                            <img src={company} alt="" className=" h-full w-fit  mr-10" />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Companies;
