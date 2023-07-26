import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {Link} from "react-scroll";

const NavBar = () => {

    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return(
        <div className="sticky w-full bg-black text-white flex items-center justify-between mx-auto px-4 h-20">
            <h1 className="font-bold text-[#ffa631] text-4xl mt-[-0.5rem]">Precision.</h1>
            <ul className="md:flex hidden">
                <li className="px-3 mx-2 py-2">
                    <Link to="home" className="hover:text-[#ffa631] cursor-pointer" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="px-3 mx-2 py-2">
                    <Link to="analytics" className="hover:text-[#ffa631] cursor-pointer" smooth={true} duration={500}>
                        Analytics
                    </Link>
                </li>
                <li className="px-3 mx-2 py-2">
                    <Link to="newsletter" className="hover:text-[#ffa631] cursor-pointer" smooth={true} duration={500}>
                        Join Us
                    </Link>
                </li>
                <li className="px-3 mx-2 py-2">
                    <Link to="cards" className="hover:text-[#ffa631] cursor-pointer" smooth={true} duration={500}>
                        Subscription Plans
                    </Link>
                </li>
                <li className="px-2 py-2 font-bold bg-white text-[#ffa631] hover:bg-gray-200 rounded-md">
                    <Link to="contact" className="cursor-pointer" smooth={true} duration={500}>
                        Contact Us
                    </Link>
                </li>
            </ul>
            <div onClick={handleMenu} className="md:hidden">
                {menu ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={menu ? "fixed left-0 top-0 border-r border-[#ffa631] bg-[#000300] bg-opacity-90 w-[60%] h-full ease-in-out duration-500" : "fixed left-[-100%] top-0 border-r border-[#ffa631] bg-[#000300] bg-opacity-90 w-[60%] h-full ease-in-out duration-500"}>
                <ul className="pt-24 p-4">
                    <li className="p-4 border-b border-[#ffa631] rounded-lg">
                        <Link onClick={handleMenu} to="home" className="hover:text-[#ffa631] cursor-pointer" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className="p-4 border-b border-[#ffa631] rounded-lg">
                        <Link onClick={handleMenu} to="analytics" className="hover:text-[#ffa631] cursor-pointer" smooth={true} duration={500}>
                            Analytics
                        </Link>
                    </li>
                    <li className="p-4 border-b border-[#ffa631] rounded-lg">
                        <Link onClick={handleMenu} to="newsletter" className="hover:text-[#ffa631] cursor-pointer" smooth={true} duration={500}>
                            Join Us
                        </Link>
                    </li>
                    <li className="p-4 border-b border-[#ffa631] rounded-lg">
                        <Link onClick={handleMenu} to="cards" className="hover:text-[#ffa631] cursor-pointer" smooth={true} duration={500}>
                            Subscription Plans
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link onClick={handleMenu} to="contact" className="hover:text-[#ffa631] cursor-pointer" smooth={true} duration={500}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;