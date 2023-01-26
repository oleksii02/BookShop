import React from 'react';
import './BookFilter.scss'
import arrowUP from '../../assets/white-arrow-up.png'
import arrowDown from '../../assets/white-arrow-down.png'


const BookFilter = ({filterBooks, sortBooks, order, allBooksData}) => {
    const [books, setBooks] = React.useState([])

    React.useEffect(() => {
        setBooks(allBooksData)

    }, [allBooksData])

    const onSelectChange = (e) => {
        filterBooks(e.target.value)

    }

    return (<div className='book_filter'>

            <div>
                <select onChange={onSelectChange}>
                    <option value='all'>all</option>
                    {books.map((book) => (<option value={book.category}>{book.category}</option>))}

                </select>
            </div>
            <div className='book_filter_title' onClick={() => sortBooks()}>
                <p><b>Price</b></p>
                <span><img src={order ? arrowUP : arrowDown} alt='arrow'/></span>

            </div>

        </div>

    );
}

export default BookFilter;