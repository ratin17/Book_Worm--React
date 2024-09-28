import React from 'react';
import Book from './Book';
import { BookContext } from './Root';

const Books = () => {
    
    const {books}=React.useContext(BookContext);

    return (
        <div>
            <h2 className="text-4xl font-bold text-center mb-10" >Books</h2>

            <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 " >
                {
                    books.map((book)=>(
                        <Book
                            key={book.id}
                            book={book}
                        ></Book>
                    ))
                }
            </div>

            
        </div>
    );
};

export default Books;