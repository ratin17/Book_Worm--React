// import React from 'react';
import PropTypes from 'prop-types';
import { CiLocationOn as Loc } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { PiBookOpenTextThin as Pages } from "react-icons/pi";
import {Link} from 'react-router-dom';
const ListedBook = ({listedbook}) => {
    const {image,id,author,name,rating,category,tags,yearOfPublishing,publisher,totalPages}=listedbook;
    return (
        <div className=" flex flex-col md:flex-row gap-5 p-5 border rounded-2xl mb-5 " >
            <div className=" py-5 px-10 bg-slate-100 rounded-2xl ">
                <img src={image}  className=" h-32 w-20 " />
            </div>

            <div className=" flex flex-col gap-2 flex-grow " >
                <h2 className=" text-xl font-bold  " >{name}</h2>
                <p>By : {author}</p>
                <div className=" flex gap-2 items-center">
                    <p className=" font-bold text-sm " >Tags</p>
                    {
                        tags.map((tag,idx)=>(
                            <h4 key={idx} className=" px-3 py-1 rounded-lg bg-slate-100 text-center text-green-400 font-bold text-xs " >{tag}</h4>
                        ))
                    }
                    <Loc className=" ml-5 " ></Loc>
                    <p>Year of Publishing : {yearOfPublishing}</p>
                </div>

                <div className=" flex gap-2 items-center " >
                    <IoPeopleOutline></IoPeopleOutline> 
                    <p>Publisher : {publisher} </p>
                    <Pages className=" ml-5 " ></Pages>
                    <p>Pages : {totalPages}</p>
                </div>

                <hr />
                
                <div className=" flex gap-3 " >
                    <p className=" px-3 py-1 bg-blue-200 text-blue-600  rounded-full text-sm " > Category : {category} </p>
                    <p className=" px-3 py-1 bg-pink-200 text-pink-500 rounded-full text-sm " > Rating : {rating} </p>
                    <Link to={`/book/${id}`} className=" px-3 py-1 bg-green-400 text-white  rounded-full text-sm " > View Details </Link>

                </div>


            </div>


        </div>
    );
};

ListedBook.propTypes = {
    listedbook: PropTypes.object,
}

export default ListedBook;