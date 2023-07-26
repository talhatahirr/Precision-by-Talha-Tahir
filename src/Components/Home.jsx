import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";

const Home = () => {
    return(
        <div name="home" className="text-white py-2">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
                <p className="text-[#ffa631] font-medium p-4">GROWING WITH DATA ANALYTICS</p>
                <h1 className="md:text-7xl sm:text-5xl text-4xl md:pb-6 md:pt-2 pb-4 pt-1 font-bold">Grow with data.</h1>
                <div className="flex items-center justify-center">
                    <p className="md:text-3xl sm:text-2xl text-xl font-semibold">Fast, flexible financing for</p>
                    <Typed className="md:text-3xl sm:text-2xl text-[#ffa631] text-xl font-semibold pl-2" strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={150} loop/>
                </div>
                <p className="md:text-xl text-xl mx-auto font-bold text-gray-500">Monitor our data analytics to increase revenue for BTB, BTC, & SAAS platforms.</p>
                <li className="bg-white text-black max-w-[200px] px-4 p-2 rounded-md items-center font-semibold py-3 my-10 mx-auto hover:bg-[#ffa631] duration-300">
                    <Link to="contact" className="cursor-pointer" smooth={true} duration={500}>
                        Get Started
                    </Link>
                </li>
            </div>
        </div>
    )
}

export default Home;