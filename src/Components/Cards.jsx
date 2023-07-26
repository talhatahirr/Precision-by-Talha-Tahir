import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
    return(
        <div name="cards" className="bg-white w-full py-[10rem] px-4">
            <div className="max-w-[1240px] md:w-full w-[400px] mx-auto grid md:grid-cols-3 gap-8">
                <div className='md:w-full w-[400px] bg-gray-100 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                  <img className='w-20 mx-auto bg-transparent mt-[-3rem] bg-white' src={Single} alt="/" />
                  <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                  <p className='text-center text-[#ffa631] text-4xl font-bold'>$149</p>
                  <div className='text-center font-medium'>
                      <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                      <p className='py-2 border-b mx-8'>1 Granted User</p>
                      <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                  </div>
                  <button className='bg-black w-[200px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[#ffa631] duration-300'>Start Trial</button>
                </div>
                <div className='md:w-full w-[400px] shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                  <img className='w-20 mx-auto mt-[-3rem] bg-white bg-transparent' src={Double} alt="/" />
                  <h2 className='text-2xl font-bold text-center py-8'>Multi User</h2>
                  <p className='text-center text-[#ffa631] text-4xl font-bold'>$250</p>
                  <div className='text-center font-medium'>
                      <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                      <p className='py-2 border-b mx-8'>3 Granted User(s)</p>
                      <p className='py-2 border-b mx-8'>Send up to 5 GB</p>
                  </div>
                  <button className='bg-black w-[200px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[#ffa631] duration-300'>Start Trial</button>
                </div>
                <div className='md:w-full w-[400px] shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                  <img className='w-20 mx-auto mt-[-3.5rem] bg-white bg-transparent' src={Triple} alt="/" />
                  <h2 className='text-2xl font-bold text-center py-8'>Group/ Organization</h2>
                  <p className='text-center text-[#ffa631] text-4xl font-bold'>$400</p>
                  <div className='text-center font-medium'>
                      <p className='py-2 border-b mx-8 mt-8'>Unlimited Storage</p>
                      <p className='py-2 border-b mx-8'>Unlimited Granted User(s)</p>
                      <p className='py-2 border-b mx-8'>Send up to 100 GB</p>
                  </div>
                  <button className='bg-black w-[200px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[#ffa631] duration-300'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards;