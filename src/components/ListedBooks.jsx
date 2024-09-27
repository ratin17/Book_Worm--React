import { useState, useEffect ,useContext} from 'react';

import { getListBykey } from '../../public/assets/utils';
import { BookContext } from './Root';
import ListedBook from './ListedBook';

const ListedBooks = () => {

    const [readbooks,setReadbooks]=useState([]);
    const [wishlistbooks,setWishlistbooks]=useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const {books} = useContext(BookContext);

    useEffect(()=>{
        if(books.length>0){
            const currentReadBookIds = getListBykey('readlist');
            const currentWishlistBookIds = getListBykey('wishlist');

            const currentReadBooks= books.filter((book)=>currentReadBookIds.includes(String(book.id)));
            const currentWishlistBooks= books.filter((book)=>currentWishlistBookIds.includes(String(book.id)));

            if(selectedOption){
                currentReadBooks.sort((a, b) => b[selectedOption] - a[selectedOption]);
                currentWishlistBooks.sort((a, b) => b[selectedOption] - a[selectedOption]);
            }


            setReadbooks(currentReadBooks);
            setWishlistbooks(currentWishlistBooks);
        }
    },[selectedOption,books]);


    function handleSelectChange(event){
        setSelectedOption(event.target.value);
    }


    return (
        <div>
            <div className="bg-slate-100 py-5">
                <h2 className="text-3xl text-center font-bold">Books</h2>
            </div>

            <div className="text-center my-10">
        
                <select
                className="select select-ghost w-full max-w-xs bg-green-400"
                value={selectedOption}
                onChange={handleSelectChange}
                >
                    <option disabled value="">Sort By</option>
                    <option value="rating">Rating</option>
                    <option value="totalPages">Number of Pages</option>
                    <option value="yearOfPublishing">Publishing Year</option>
                </select>

            </div>


            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        readbooks.map((listedbook)=>(
                            <ListedBook
                                key={listedbook.id}
                                listedbook={listedbook}
                            ></ListedBook>
                        ))
                    }
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        wishlistbooks.map((listedbook)=>(
                            <ListedBook
                                key={listedbook.id}
                                listedbook={listedbook}
                            ></ListedBook>
                        ))
                    }
                </div>

            </div>

        </div>
    );
};

export default ListedBooks;