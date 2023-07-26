import React from "react";

const Newsletter = () => {
    return(
        <div name="newsletter" className="bg-black w-full py-16 px-4 text-white">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <h1 className="md:text-3xl sm:text-2xl text-xl text-[#ffa631] pt-5 py-2 font-bold">Want tips & trips to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className="my-1">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className="p-3 flex w-full rounded-md sm:mt-0 mt-4 text-black outline-[#ffa631]" type="email" placeholder="Enter Email" />
                        <button className="bg-white text-black ml-4 my-4 px-6 py-3 rounded-md w-[200px] text-center font-medium hover:bg-[#ffa631] duration-300">Notify Me</button>
                    </div>
                    <p>We care about the protection of your data. Read our {' '} <span className="text-[#ffa631] cursor-pointer text-underline">Privacy Policy.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;