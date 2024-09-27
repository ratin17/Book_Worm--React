// import React from 'react';

import {Link} from 'react-router-dom';

const Navbar = () => {

    const links=<>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/listedBooks">Listed Books</Link>
        </li>
        <li>
            <Link to="/pages">Pages</Link>
        </li>
    </>
        

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Book Worm</a>
            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">

                <div className="form-control mr-5">
                <input type="text" placeholder="Search" className="input input-bordered rounded-full w-24 md:w-auto" />
                </div>

                <div className="rounded-full bg-green-300 p-2 flex items-center justify-center" >
                <button className="text-2xl font-thin " >Submit</button>
                </div>

            </div>

    </div>
    );
};


export default Navbar;