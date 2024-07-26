import React from "react";

import { Image } from "antd";

const image = [
    "https://wiso-html.foxthemes.me/images/justin-groep-662280-unsplash.jpg",
    "https://wiso-html.foxthemes.me/images/chi-n-ph-m-217312-unsplash.jpg",
    "https://wiso-html.foxthemes.me/images/mikayla-herrick-619451-unsplash.jpg",
    "https://wiso-html.foxthemes.me/images/annie-spratt-133932-unsplash.jpg",
];

import { cop, wed, bday, stu, out, somzi, pregr } from "./images";

const Home = () => {
    return (
        <div className="  min-h-[100vh]">
            {/* <header className=" w-full h-[309px] overflow-clip bg-[#072656] relative">
                <img
                    src={camera}
                    alt=""
                    className=" w-full  h-full  object-cover opacity-10 mix-blend-luminosity  "
                />

                <div className=" absolute inset-0 h-full w-full bg-[#2c79b0] opacity-5"></div>
            </header> */}

            <Container title="CORPORATE PHOTOGRAPHY">
                <div class=" container grid grid-cols-4 grid-rows-2 gap-2 md:gap-4 ">
                    <div class="col-span-2 row-span-1 h-full w-full object-cover bg-blue-400 ">
                        <Image
                            class="col-span-2 row-span-1 h-full w-full object-cover bg-blue-400 "
                            src={cop[1]}
                            height={"100%"}
                        />
                    </div>
                    <div class=" h-full w-full object-cover bg-blue-400 ">
                        <Image class=" h-full w-full object-cover bg-blue-400 " src={cop[5]} />
                    </div>
                    <Image class=" h-full w-full object-cover bg-blue-400 " src={cop[2]} />
                    <Image class=" h-full w-full object-cover bg-blue-400 r" src={cop[3]} />
                    <Image class=" h-full w-full object-cover bg-blue-400 " src={cop[0]} />
                    <div class="col-span-2  h-full w-full object-cover bg-blue-400 ">
                        <Image
                            class="col-span-2  h-full w-full object-cover bg-blue-400 "
                            src={cop[4]}
                            height={"100%"}
                        />
                    </div>
                </div>
            </Container>

            <Container title="STUDIO    PHOTOSHOOT">
                <div class=" container grid grid-cols-3   gap-2 md:gap-4 ">
                    <Image class="  w-full object-cover bg-blue-400 " src={stu[0]} />

                    <Image class=" h-full w-full object-cover bg-blue-400 " src={stu[1]} />
                    <Image class=" h-full w-full object-cover bg-blue-400 " src={stu[2]} />
                </div>
            </Container>

            <Container title="WEDDING PHOTOSHOOT">
                <div class=" container grid grid-cols-3 grid-rows-2 gap-2 md:gap-4 ">
                    <div class=" row-span-2 col-span-2 h-full w-full object-cover bg-blue-400 ">
                        <Image
                            class=" row-span-2 col-span-2 h-full w-full object-cover bg-blue-400 "
                            src={wed[3]}
                        />
                    </div>

                    <div class=" row-span-2  h-full w-full object-cover bg-blue-400 ">
                        <Image
                            class=" row-span-2  h-full w-full object-cover bg-blue-400 "
                            src={wed[0]}
                            height={"100%"}
                        />
                    </div>

                    <Image class=" h-full w-full object-cover bg-blue-400 " src={wed[2]} />
                    <Image class=" h-full w-full object-cover bg-blue-400 " src={wed[4]} />
                    <Image class="  h-full w-full object-cover bg-blue-400 " src={wed[1]} />
                </div>
            </Container>

            <Container title="OUTDOOR PHOTOSHOOT">
                <div class=" container grid grid-cols-3   gap-2 md:gap-4 ">
                    <Image class="  w-full object-cover bg-blue-400 " src={out[0]} />

                    <Image class=" h-full w-full object-cover bg-blue-400 " src={out[1]} />
                    <Image class=" h-full w-full object-cover bg-blue-400 " src={out[2]} />
                </div>
            </Container>

            <Container title="BIRTHDAY PHOTOSHOOT">
                <div class=" container grid grid-cols-3 grid-rows-2 gap-2 md:gap-4 ">
                    <Image class=" h-full w-full object-cover bg-blue-400  " src={bday[0]} />
                    <Image class=" h-full w-full object-cover bg-blue-400 " src={bday[1]} />
                    <Image class="  h-full w-full object-cover bg-blue-400 " src={bday[3]} />
                    <div class=" row-span-2 col-span-2 h-full w-full object-cover bg-blue-400 ">
                        <Image
                            class=" row-span-2 col-span-2 h-full w-full object-cover bg-blue-400 "
                            src={bday[4]}
                            height={"100%"}
                        />
                    </div>

                    <Image
                        class="   h-full w-full object-cover bg-blue-400 "
                        src={bday[2]}
                        height={"100%"}
                    />
                </div>
            </Container>

            <Container title="SOMZI'S PERSONAL PHOTOGRAPHER">
                <div class=" container grid grid-cols-3  gap-2 md:gap-4 ">
                    <Image class="  w-full object-cover bg-blue-400 " src={somzi[0]} />

                    <Image class=" h-full w-full object-cover bg-blue-400 " src={somzi[1]} />
                    <Image
                        class=" h-full w-full object-cover bg-blue-400 "
                        src={somzi[2]}
                        height={"100%"}
                    />
                </div>
            </Container>

            <Container title="PREGNANCY    PHOTOSHOOT">
                <div class=" container grid grid-cols-3   gap-2 md:gap-4 ">
                    <Image
                        class="  w-full object-cover bg-blue-400 "
                        src={pregr[0]}
                        height={"100%"}
                    />

                    <Image
                        class=" h-full w-full object-cover bg-blue-400 "
                        src={pregr[1]}
                        height={"100%"}
                    />
                    <Image
                        class=" h-full w-full object-cover bg-blue-400 "
                        src={pregr[2]}
                        height={"100%"}
                    />
                    <Image
                        class="  w-full object-cover bg-blue-400 "
                        src={pregr[3]}
                        height={"100%"}
                    />

                    <Image
                        class=" h-full w-full object-cover bg-blue-400 "
                        src={pregr[4]}
                        height={"100%"}
                    />
                    <Image
                        class=" h-full w-full object-cover bg-blue-400 "
                        src={pregr[5]}
                        height={"100%"}
                    />
                </div>
            </Container>

            <section className=" px-[20%] py-16  hidden ">
                <div className=" flex flex-col items-center ">
                    <img src="https://wiso-html.foxthemes.me/images/decor.png" alt="" />
                    <h3 className=" text-center text-[36px]   font-medium  tracking-[2.7px] pt-2 pb-5">
                        CLUBS PHOTOSHOOT
                    </h3>
                </div>

                <div class=" container grid grid-cols-3 grid-rows-2 gap-4 p-4">
                    <img
                        class=" h-full w-full object-cover bg-blue-400 rounded-lg"
                        src={image[1]}
                    />
                    <img
                        class="col-span-2 row-span-1 h-full w-full object-cover bg-blue-400 rounded-lg"
                        src={image[0]}
                    />

                    <img
                        class="col-span-2  h-full w-full object-cover bg-blue-400 rounded-lg"
                        src={image[3]}
                    />
                    <img
                        class=" h-full w-full object-cover bg-blue-400 rounded-lg"
                        src={image[2]}
                    />
                </div>
            </section>

            <section className=" px-[20%] py-16   hidden">
                <div className=" flex flex-col items-center ">
                    <img src="https://wiso-html.foxthemes.me/images/decor.png" alt="" />
                    <h3 className=" text-center text-[36px]   font-medium  tracking-[2.7px] pt-2 pb-5">
                        STUDIO CELEBRITIES PHOTOSHOOT
                    </h3>
                </div>

                <div class=" container grid grid-cols-4  gap-4 p-4">
                    <img
                        class=" col-span-2 h-full w-full object-cover bg-blue-400 rounded-lg"
                        src={image[1]}
                    />

                    <img
                        class=" col-span-2 h-full w-full object-cover bg-blue-400 rounded-lg"
                        src={image[2]}
                    />
                    <img
                        class=" col-span-2 h-full w-full object-cover bg-blue-400 rounded-lg"
                        src={image[2]}
                    />

                    <img
                        class=" col-span-2 h-full w-full object-cover bg-blue-400 rounded-lg"
                        src={image[2]}
                    />
                </div>
            </section>

            <section className=" px-[20%] py-16  hidden">
                <div className=" flex flex-col items-center ">
                    <img src="https://wiso-html.foxthemes.me/images/decor.png" alt="" />
                    <h3 className=" text-center text-[36px]   font-medium  tracking-[2.7px] pt-2 pb-5">
                        WEDDING PHOTOSHOOT
                    </h3>
                </div>

                <div class=" container grid grid-cols-4  row-span-2  gap-4 p-4">
                    <img
                        class=" col-span-2 h-full w-full object-cover bg-blue-400 rounded-lg"
                        src={image[1]}
                    />

                    <img
                        class=" col-span-2 h-full w-full object-cover bg-blue-400 rounded-lg"
                        src={image[2]}
                    />

                    <img
                        class=" h-full w-full object-cover bg-blue-400 rounded-lg"
                        src={image[3]}
                    />
                    <img
                        class=" h-full w-full object-cover bg-blue-400 rounded-lg"
                        src={image[3]}
                    />
                    <img
                        class=" h-full w-full object-cover bg-blue-400 rounded-lg"
                        src={image[3]}
                    />
                    <img
                        class=" h-full w-full object-cover bg-blue-400 rounded-lg"
                        src={image[3]}
                    />
                </div>
            </section>

            <section className=" px-[20%] py-16   hidden">
                <div className=" flex flex-col items-center ">
                    <img src="https://wiso-html.foxthemes.me/images/decor.png" alt="" />
                    <h3 className=" text-center text-[36px]   font-medium  tracking-[2.7px] pt-2 pb-5">
                        FOOD & DRINKS PHOTOSHOOT
                    </h3>
                </div>

                <div class=" container grid grid-cols-2 grid-rows-2  p-4">
                    <img
                        class=" h-full w-full object-cover bg-blue-400 rounded-tl-lg"
                        src={image[1]}
                    />
                    <img
                        class="row-span-1 h-full w-full object-cover bg-blue-400 rounded-tr-lg"
                        src={image[0]}
                    />

                    <img
                        class=" h-full w-full object-cover bg-blue-400 rounded-bl-lg"
                        src={image[3]}
                    />
                    <img
                        class=" h-full w-full object-cover bg-blue-400 rounded-br-lg"
                        src={image[2]}
                    />
                </div>
            </section>

            <section className=" px-[20%] py-16 hidden">
                <div className=" flex flex-col  items-center ">
                    <img src="https://wiso-html.foxthemes.me/images/decor.png" alt="" />
                    <h3 className=" text-center text-[36px]   font-medium  tracking-[2.7px] pt-2 pb-5">
                        INDIVIDUAL PHOTOSHOOT
                    </h3>
                </div>

                <div class=" container grid grid-cols-3  gap-4 p-4">
                    <img
                        class="  h-[300px] w-full object-cover bg-blue-400 rounded-l-lg"
                        src={image[3]}
                    />
                    <img class="   h-full w-full object-cover bg-blue-400 " src={image[0]} />

                    <img
                        class="  h-full w-full object-cover bg-blue-400 rounded-r-lg"
                        src={image[1]}
                    />
                </div>
            </section>

            <section className=" px-[20%] py-16   hidden">
                <div className=" flex flex-col  items-center ">
                    <img src="https://wiso-html.foxthemes.me/images/decor.png" alt="" />
                    <h3 className=" text-center text-[36px]   font-medium  tracking-[2.7px] pt-2 pb-5">
                        OUTDOOR PHOTOSHOOT
                    </h3>
                </div>

                <div class=" container grid grid-cols-2  gap-4 p-4">
                    <img
                        class="  h-[300px] w-full object-cover bg-blue-400 rounded-l-lg"
                        src={image[3]}
                    />
                    <img
                        class="   h-full w-full object-cover bg-blue-400  rounded-r-lg"
                        src={image[0]}
                    />
                </div>
            </section>
        </div>
    );
};

const Container = ({ children, title }) => {
    return (
        <section className="px-2 md:px-[10%] py-8 md:py-16">
            <div className=" flex flex-col  items-center ">
                <img
                    src="https://wiso-html.foxthemes.me/images/decor.png"
                    alt=""
                    className=" h-10 md:h-fit"
                />
                <h3 className=" text-center  text-[25px] md:text-[36px] px-8  font-medium  tracking-[2.7px] pt-2 pb-5">
                    {title}
                </h3>
            </div>
            {children}
        </section>
    );
};
export default Home;
