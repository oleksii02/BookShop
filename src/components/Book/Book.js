import React from 'react';
import './Book.scss';

const Book = ({book, totalPrice}) => {
    return (<div className='book'>
        <div className='book_column'>
            <div className='book_number'>
                {book.id}&nbsp;
            </div>
            <div className='book_name'>
                {book.name}
            </div>
        </div>
        <div className='book_column'>
            <div className='book_price'>
                {book.price}&nbsp;$&nbsp;
                <button onClick={() => totalPrice(book)}>to buy</button>
            </div>

        </div>

    </div>)
}

export default Book;