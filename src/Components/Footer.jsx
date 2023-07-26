import React from "react";
import {FaDribbbleSquare,FaLinkedin,FaFacebookSquare,FaGithubSquare,FaInstagram,FaTwitterSquare} from 'react-icons/fa';

const Footer = () => {
    return(
        <div className="max-w-[1240px] mx-auto py-12 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div>
                <h1 className="w-full text-4xl font-bold text-[#ffa631]">Precision.</h1>
                <p className='py-4 text-justify'>At Precision, we are a leading data analytics company dedicated to 
                helping businesses harness the true potential of their data. Our mission is to empower organizations to make smarter, 
                data-driven decisions that drive growth and success.</p>
                <div className='flex md:justify-between justify-center md:w-[75%] my-4'>
                    <li className="p-1 lg:mx-0 rounded-lg mx-4 flex justify-between items-center hover:bg-blue-600">
                        <a className="flex justify-between items-center w-full text-gray-300"
                            href="https://www.linkedin.com/in/talha-tahir-b03955262/">
                            <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="p-1 lg:mx-0 rounded-lg mx-4 flex justify-between items-center hover:bg-[#FD1D1D]">
                        <a className="flex justify-between items-center w-full text-gray-300"
                            href="https://www.instagram.com/talhatahirr_/">
                            <FaInstagram size={30}/>
                        </a>
                    </li>
                    <li className="p-1 lg:mx-0 rounded-lg mx-4 flex justify-between items-center hover:bg-[#1877F2]">
                        <a className="flex justify-between items-center w-full text-gray-300"
                            href="https://www.facebook.com/talhatahirr">
                            <FaFacebookSquare size={30}/>
                        </a>
                    </li>
                    <li className="p-1 lg:mx-0 rounded-lg mx-4 flex justify-between items-center hover:bg-[#6e5494]">
                        <a className="flex justify-between items-center w-full text-gray-300"
                            href="https://github.com/talhatahirr">
                            <FaGithubSquare size={30}/>
                        </a>
                    </li>
                    <li className="p-1 lg:mx-0 rounded-lg mx-4 flex justify-between items-center hover:bg-[#00acee]">
                        <a className="flex justify-between items-center w-full text-gray-300"
                            href="https://www.linkedin.com/in/talha-tahir-b03955262/">
                           <FaTwitterSquare size={30}/>
                        </a>
                    </li>
                </div>
            </div>
            <div className="lg:col-span-2 flex mx-4 justify-between mt-4">
                <div>
                    <h1 className="font-medium text-[#ffa631]">Solutions</h1>
                    <ul>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#ffa631]'>Analytics</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#ffa631]'>Marketing</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#ffa631]'>Commerce</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#ffa631]'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-medium text-[#ffa631]">Support</h1>
                    <ul>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#ffa631]'>Pricing</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#ffa631]'>Documentation</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#ffa631]'>Guides</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#ffa631]'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-medium text-[#ffa631]">Company</h1>
                    <ul>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#ffa631]'>About</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#ffa631]'>Blog</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#ffa631]'>Jobs</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#ffa631]'>Press</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#ffa631]'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-medium text-[#ffa631]">Legal</h1>
                    <ul>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#ffa631]'>Claim</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#ffa631]'>Policy</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#ffa631]'>Terms</li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-gray-300 text-center font-light text-1xl">@all rights reserved by Talha Tahir</p>
            </div>
        </div>
    )
}

export default Footer;