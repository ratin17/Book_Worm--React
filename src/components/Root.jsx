
import React from 'react';
import {Outlet } from 'react-router-dom';
import { createContext } from 'react';

import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const BookContext = createContext(1);
import Header from "./Header";
import Footer from './Footer';

const Root = () => {

    const [books,setBooks]=React.useState([]);
    
    function showToast(text){
        toast.error(text, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    

    React.useEffect(()=>{
        fetch('/assets/books.json').
        then(res=>res.json()).
        then(data=>{
            // console.log(data);
            setBooks(data);
        });
    },[]);

    return (
        
        <>
            <div className="w-5/6 mx-auto" >
                <BookContext.Provider value={{books,showToast}} >
                    <Header></Header>
                    <Outlet></Outlet>
                    <ToastContainer />
                </BookContext.Provider>
                
            </div>

            <Footer></Footer>

        </>
        
    );
};

export default Root;