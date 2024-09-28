import React from 'react';
import { useParams} from 'react-router-dom';
import { BookContext } from './Root';
import { getListBykey, setListBykey, removeItemBykey } from '../../public/assets/utils';

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
        const wishlistBookIds=getListBykey('wishlist');

        if(readBookIds.includes(id)){
            showToast('You have already read this book !',"error");
        }
        else{
            setListBykey('readlist',id);
            showToast('Added to Read List !',"success");
            if(wishlistBookIds.includes(id)){
                removeItemBykey('wishlist',id);
            }
        }
    }

    function handleWishlist(id){
        
        const readBookIds=getListBykey('readlist');
        const wishlistBookIds=getListBykey('wishlist');

        if(readBookIds.includes(id)){
            showToast("You have already read this book , Can't add to Wishlist","error");
        }
        else if(wishlistBookIds.includes(id)){
            console.log(id,'Alraedy exists in Wishlist');
            showToast('Alraedy exists in Wishlist !',"error");
        }
        else{
            setListBykey('wishlist',id);
            showToast('Added to  Wishlist!',"success");
        }
    }



    const {image,author,name,rating,category,tags,review,totalPages,publisher,yearOfPublishing}=book;
    
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 my-10 " >

            <div className=" px-5 md:px-32 py-10 bg-slate-300 rounded-lg ">

                <img src={image} alt={name} className="w-full h-[70vh] " />

            </div>

            <div className="flex flex-col gap-5 justify-between " >
                <h2 className=" text-2xl font-bold " >{name}</h2>
                <p className=" text-sm font-semibold " >By : {author} </p>


                <div>
                    <hr />
                    <p className="my-3" > {category} </p>
                    <hr />
                </div>


                <p>Reveiw : {review}</p>

                <div className="flex gap-1 flex-col sm:flex-row" >
                    {
                        tags.map((tag,idx)=>(
                            <p key={idx} className=" p-2 rounded-2xl bg-gray-200 text-emerald-300 font-bold " >#{tag}</p>
                        ))
                    }
                </div>

                <hr />
                
                <div className=" grid grid-cols-2 " >
                    <p>Number of Pages : </p>
                    <p className=" font-semibold " >{totalPages}</p>
                    <p>Publisher : </p>
                    <p className=" font-semibold ">{publisher}</p>
                    <p>Year of publishing : </p>
                    <p className=" font-semibold ">{yearOfPublishing}</p>
                    <p>Rating : </p>
                    <p className=" font-semibold ">{rating}</p>
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