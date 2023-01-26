import React from 'react';
import './Basker.scss'

const Basket = ({book, dellBook}) => {
    return (<div className='book'>
        <div className='book_column'>
            <div className='book_number'>
                {book.name}&nbsp;
            </div>
        </div>
        <div className='book_column'>
            <div className='book_price'>
                {book.price}&nbsp;$&nbsp;
                <button onClick={() => dellBook(book)}>dell</button>
            </div>

        </div>

    </div>);

}

export default Basket;