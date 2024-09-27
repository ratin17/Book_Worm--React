import React from 'react';
import { useParams} from 'react-router-dom';
import { BookContext } from './Root';
import { getListBykey, setListBykey } from '../../public/assets/utils';

const BookDetail = () => {
    const {books,showToast}=React.useContext(BookContext);

    const {id}=useParams();

    if (!books || books.length === 0) {
        return <div>Loading...</div>;
    }

    const book=books.find(book=>book.id===parseInt(id));

    if (!book) {
        return <div>Book not found.</div>;
    }

    function handleRead(id){
        
        const readBookIds=getListBykey('readlist');
        if(readBookIds.includes(id)){
            showToast('You have already read this book !');
        }
        else{
            setListBykey('readlist',id);
            showToast('Added to Read List !');
        }
    }

    function handleWishlist(id){
        
        const readBookIds=getListBykey('readlist');
        const wishlistBookIds=getListBykey('wishlist');

        if(readBookIds.includes(id)){
            showToast("You have already read this book , Can't add to Wishlist");
        }
        else if(wishlistBookIds.includes(id)){
            console.log(id,'Alraedy exists in Wishlist');
        }
        else{
            setListBykey('wishlist',id);
            showToast('Already added to  Wishlist!');
        }
    }



    const {image,author,name,rating,category,tags,review,totalPages,publisher,yearOfPublishing}=book;
    
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 my-10 " >

            <div className=" px-32 py-10 bg-slate-300 rounded-lg ">

                <img src={image} alt={name} className="w-full h-[70vh] " />

            </div>

            <div className="flex flex-col gap-5 justify-between " >
                <h2>{name}</h2>
                <p>By : {author} </p>


                <div>
                    <hr />
                    <p> {category} </p>
                    <hr />
                </div>


                <p>Reveiw : {review}</p>

                <div className="flex gap-1" >
                    {
                        tags.map((tag,idx)=>(
                            <p key={idx} className=" p-2 rounded-2xl bg-gray-200 text-emerald-300 font-bold " >#{tag}</p>
                        ))
                    }
                </div>

                <hr />
                
                <div className=" grid grid-cols-2 " >
                    <p>Number of Pages : </p>
                    <p>{totalPages}</p>
                    <p>Publisher : </p>
                    <p>{publisher}</p>
                    <p>Year of publishing : </p>
                    <p>{yearOfPublishing}</p>
                    <p>Rating : </p>
                    <p>{rating}</p>
                </div>

                <div className=" flex gap-5 " >
                    <button onClick={()=>handleRead(id)} className=" py-3 px-5 border border-gray-700 rounded-lg" >Read</button>
                    <button onClick={()=>handleWishlist(id)} className=" py-3 px-5 rounded-lg bg-cyan-600 text-white " >Wishlist</button>
                </div>


            </div>
            
        </div>
    );
};

export default BookDetail;