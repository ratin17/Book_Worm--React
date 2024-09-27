import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
// import React from 'react';

import { CiStar } from "react-icons/ci";

const Book = ({book}) => {

    const {image,id,author,name,rating,category,tags}=book;
    // console.log(name)

    return (
        <div className=" border rounded-3xl p-5 flex flex-col justify-normal gap-5 " >

            <div className={`${id === 8 ? 'px-10 py-2' : 'px-20 py-4'} bg-gray-300 rounded-xl`} >
                <Link to={`/book/${id}`} >
                    <img src={image} alt={name} className={`w-full ${id===8 ? 'h-52' : 'h-44'} `} />
                </Link>
            </div>

            <div className=" flex gap-2 items-center">
                {
                    tags.map((tag,idx)=>(
                        <h4 key={idx} className=" p-1 rounded-lg bg-slate-100 text-center text-green-400 font-bold text-sm " >{tag}</h4>
                    ))
                }
            </div>

            <Link to={`/book/${id}`} >
                <h2 className="text-xl font-bold">{name}</h2>
            </Link>
            
            <p className=" text-base flex-grow " >By : {author}</p>

            <div className=" flex justify-between " >
                <p>{category}</p>
                <div className=" flex justify-center items-center gap-2">
                    <p>{rating}</p>
                    <CiStar />
                </div>

            </div>

        
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object,
}

export default Book;