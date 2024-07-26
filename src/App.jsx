import { useState } from "react";
import "./App.css";

import { Button } from "antd";

function App() {
    const [value, setValue] = useState();

    const updateInputValue = (val) => {
        setValue(val);
    };

    return (
        <div className="    w-full  text-[#999999]">
            <section className=" w-full ">
                <iframe
                    className=" w-full"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d229719.75744388608!2d27.93220160207907!3d-25.8901648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957adbb1d8c503%3A0x2d698a7731e025c2!2sForest%20Hill%20City!5e0!3m2!1sen!2sgh!4v1720600681677!5m2!1sen!2sgh"
                    height="350"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

            <section className="px-8 md:px-[12%]  py-8 md:py-[7rem] grid md:grid-cols-2 gap-10 md:gap-0">
                <div>
                    <h3 className=" text-[1.9rem] md:text-[2.3rem]  font-medium text-[#222222] pb-2">
                        Get in touch with us & <br /> send us message today!
                    </h3>

                    <div className="pt-7 flex flex-col   text-[14px]">
                        <h4 className=" text-[#222222] font-semibold ">LOCATION ADDRESS:</h4>
                        <p className=" text-[#555] pt-4  leading-loose">
                            Forest Hill City, Centurion Monavoni,
                            <br /> Maria RD 0157
                        </p>

                        <h4 className=" text-[#222222] font-semibold  mt-10">INFORMATION:</h4>
                        <p className=" text-[#555] pt-4  leading-loose">
                            Email: 3applespictures@gmail.com
                            <br />
                            Phone: 079 814 9000 / 067 058 2863
                        </p>
                    </div>
                </div>
                <div className=" ">
                    <div className=" grid  gap-5">
                        <InputText placeholder="Your Name Here" />
                        <InputText placeholder="Email Address Here" />
                        <InputText placeholder="Subject Of Message" />
                        <InputText placeholder="Phone Number" />
                        <div className="">
                            <InputText
                                labelTitle="Your Message*"
                                placeholder="Write Your Message"
                                text
                            />
                        </div>

                        <div className=" flex  justify-center items-center">
                            <Button
                                size="large"
                                className=" py-6 bg-[#112f67] mt-3 w-full md:w-fit  px-12  text-[12px] font-semibold text-white"
                            >
                                SEND MESSAGE
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function InputText({ placeholder, text }) {
    return (
        <div>
            {!text ? (
                <input
                    type="text"
                    className="  block border rounded-sm w-full  p-3 text-sm"
                    placeholder={placeholder}
                    onChange={(e) => updateInputValue(e.target.value)}
                />
            ) : (
                <textarea
                    type="text"
                    className="pt-2  block border rounded-sm w-full p-2  h-[10rem] "
                    placeholder={placeholder}
                    onChange={(e) => updateInputValue(e.target.value)}
                />
            )}
        </div>
    );
}

// cons = {       <div className=" h-full w-full relative">
//                 <img src={background} alt="" className=" object-cover w-full h-full " />

//                 <div className=" h-full w-full  absolute inset-0 ">
//                     <div className="  w-full">
//                         <nav className=" w-full h-[80px] relative flex ">
//                             <div className=" w-full h-[80px] absolute inset-0 bg-black   blur-md opacity-90  "></div>
//                             <div className="flex py-5 w-full px-[15%]  text-white justify-between absolute inset-0 items-center  ">
//                                 <div>jnsj</div>
//                                 <ul className="flex justify-center gap-8 text-lg  items-center ">
//                                     <li>
//                                         <a href="#">Home</a>
//                                     </li>
//                                     <li>
//                                         <a href="#">About</a>
//                                     </li>
//                                     <li>
//                                         <a href="#">Book Table</a>
//                                     </li>
//                                     <li>
//                                         <a href="#">Testimonial</a>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </nav>
//                     </div>

//                     <div className=" m-0 mt-[80px] px-[15%] h-[70vh] flex justify-start items-center text-white">
//                         <div>
//                             <h2 className="  text-[46px] font-medium">
//                                 WELCOME TO <br /> 3APPLES PICTURES
//                             </h2>

//                             <hr className=" w-[50%] mt-5" />

//                             <p className=" text-[22px] font-light pt-8  w-[60%]">
//                                 We craft timeless stories through the art of Photography. Join us on
//                                 a journey of creativity, passion, and innovation as we bring
//                                 compelling narratives to life, one frame at a time.
//                             </p>

//                             <button className=" bg-[#0BC1B8] px-8 py-3 mt-10"> Book Now</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className=" bg-[#101015] text-white ">
//                 <div className="py-[7rem] flex flex-col items-center justify-center">
//                     <h2></h2>
//                     <h2 className=" text-[18px]  font-semibold text-center ">OUR RECENT WORKS</h2>
//                     <h2 className=" text-[36px] font-medium text-center ">OUR PORTFOLIO</h2>
//                     <div className="bg-[#0BC1B8] h-[3px] w-[100px]"></div>
//                 </div>
//                 <div className="grid grid-cols-4">
//                     {[...Array(8)].map((_, index) => (
//                         <div key={index} className="relative h-[500px]  bg-gray-300">
//                             <img
//                                 src={`https://demo.voidcoders.com/htmldemo/potoliaV2/main-files/assets/img/portfolio/portfolio4-1.jpg`}
//                                 alt=""
//                                 className="w-full h-full object-cover "
//                             />
//                             <div className=" absolute h-full w-full bg-[#202020E6]  hover:bg-transparent cursor-pointer   inset-0  px-4 py-2 text-white "></div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className=" grid grid-cols-2 h-[500px] ">
//                 <img
//                     src={studio}
//                     alt=""
//                     className=" bg-gray-700 mix-blend-multiply   object-cover  h-[500px] w-full overflow-clip "
//                 />
//                 <div className=" bg-[#F0F0F0] relative ">
//                     <img src={pattern} className=" h-[500px] w-full" alt="" />

//                     <div className=" absolute inset-0 p-20 flex flex-col justify-center items-start">
//                         <h2 className=" text-[36px] font-medium">ABOUT US</h2>
//                         <div className="bg-[#0BC1B8] h-[3px] w-[100px]"></div>
//                         <p className=" text-[#333] text-[16px] pt-8">
//                             We are a quality driven photographer Company, with an eye for detail,
//                             driven by client's satisfaction. Through a variety of photoshoot styles,
//                             creative and strong details, we bring forth initiative drive & people
//                             oriented experience which, qualifies us to be the best Photography
//                             company. We accustomed with expertise in:
//                         </p>

//                         <div className=" flex gap-5">
//                             <button className=" bg-[#0BC1B8] text-white px-8 py-3 mt-10">
//                                 Read More
//                             </button>
//                             <button className=" bg-black text-white px-8 py-3 mt-10">
//                                 Book Me!
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>}
export default App;
