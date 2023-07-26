import React from "react";

const ContactUs = () => {
    return(
        <div name="contact" className="w-full md:h-screen bg-black flex justify-center items-center p-4 border-b-2 border-[#ffa631]">
            <form action="https://getform.io/f/ef13aa51-75c0-426f-afa9-028303a568b9" method="POST" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-4">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#ffa631]">Contact Us</p>
                    <p className="text-gray-300 pt-4">Submit the form below or drop me an email at <span><a className="text-[#ffa631] font-light cursor-pointer" href="talhabintahir2001@gmail.com">talhabintahir2001@gmail.com</a></span></p>
                </div>
                <input className="p-2 rounded-md mb-5 bg-[#f1ecec]" type="text" placeholder="Name" name="name"/>
                <input className="p-2 rounded-md mb-5 bg-[#f1ecec]" type="email" placeholder="Email" name="email"/>
                <textarea className="bg-[#f1ecec] rounded-md p-2 mb-5" name="message" rows="7" placeholder="Message"></textarea>
                <button className="text-white border-2 px-3 py-2 mx-auto flex my-2 items-center hover:bg-[#ffa631] hover:border-[#ffa631] duration-300 rounded-md">Let's Talk</button>
            </form>
        </div>
    )
}

export default ContactUs;