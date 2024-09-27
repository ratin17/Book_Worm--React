// import React from 'react';

const Banner = () => {
    return (
        <div className=" bg-gray-200 rounded-3xl w-full px-10 py-5 md:px-10 md:py-2 flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-start mt-5 mb-20" >

            <div className="flex flex-col gap-10 text-lg font-bold w-[45%] " >
                <h2 className="text-5xl font-bold " >Discover an exceptional cooking class tailored for you!</h2>
                <button className="px-5 py-3 w-1/2 rounded-lg bg-green-400 ">View The List</button>
            </div>

            <img className=' h-[80vh] w-[55%] border-0 ' src="https://i.ibb.co.com/HprHPwd/Atomic-Habits.png" alt="" />
            
        </div>
    );
};

export default Banner;