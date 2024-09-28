// import React from 'react';
import {Link} from 'react-router-dom';

const Banner = () => {
    return (
        <div className=" bg-gray-200 rounded-3xl w-full px-5 py-5 md:px-10 md:py-2 flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-start mt-5 mb-20" >

            <div className="flex flex-col gap-10 text-lg font-bold w-full md:w-[45%] " >
                <h2 className="text-lg md:text-5xl font-bold " >Discover an exceptional cooking class tailored for you!</h2>
                <Link to="/listedBooks" className="px-5 py-3 w-full md:w-1/2 rounded-lg bg-green-400 ">View The List</Link>
            </div>

            <img className=' h-[80vh] w-full md:w-[55%] border-0 ' src="https://i.ibb.co.com/HprHPwd/Atomic-Habits.png" alt="" />
            
        </div>
    );
};

export default Banner;