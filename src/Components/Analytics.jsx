import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
    return(
        <div name="analytics" className="bg-white w-full px-4 py-16">
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Laptop} alt='/'/>
                <div className="flex flex-col justify-center mx-auto">
                    <p className="font-bold text-[#ffa631]">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                    <p className="text-justify">Powerful tool that provides you with a clear view of your business's performance, helping you make well-informed 
                    decisions. By leveraging real-time data visualizations, businesses can identify opportunities, mitigate risks, and optimize 
                    processes, ultimately leading to improved efficiency and competitive advantage. Embracing data analytics dashboard is not just an 
                    option but a necessity for any organization that aims to thrive in today's data-rich landscape.</p>
                    <a href='/' className="bg-black text-white max-w-[200px] md:w-[115px] px-4 p-2 rounded-md items-center text-center font-semibold py-3 my-10 mx-auto md:mx-0 hover:bg-[#ffa631] duration-300">Get Started</a>
                </div>
            </div>
        </div>
    )
}

export default Analytics;