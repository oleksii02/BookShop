import React from "react";
import './App.css'
import axios from "axios";
import Book from "./components/Book/Book";
import BookFilter from "./components/BookFilter/BookFilter";
import Cart from "./components/Cart/Cart";
import Basket from "./components/Basket/Basket";

function App() {
    const [allBooksData, setallBooksData] = React.useState([])
    const [booksData, setBooksData] = React.useState([])
    const [orderBy, setOrderBy] = React.useState(false)
    const [ordersPrice, setOrderPrice] = React.useState(0)
    const [ordersBasket, setOrderBasket] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        getData()

    }, [])

    async function getData() {
        try {
            setLoading(true)
            let response = await axios.get('./books.json')
            setallBooksData(response.data)
            setBooksData(response.data)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    const filterBooks = (value) => {
        let filterdBooks = allBooksData

        if (value !== 'all') {
            filterdBooks = allBooksData.filter(book => {
                return book.category.includes(value)
            })
        }
        setBooksData(filterdBooks)
    }

    const sortBooks = () => {
        const copyData = booksData.slice()
        if (orderBy) {
            const sortedByAsc = copyData.sort((a, b) => a.price > b.price ? 1 : -1)
            setBooksData(sortedByAsc)
            setOrderBy(!orderBy)

        } else {
            const sortedByDesc = copyData.sort((a, b) => a.price > b.price ? -1 : 1)
            setBooksData(sortedByDesc)
            setOrderBy(!orderBy)

        }
    }

    const totalPrice = (book) => {
        //totalOrders.push(book)
        setOrderPrice(ordersPrice + book.price)
        ordersBasket.push({name: book.name, number: 1, price: book.price})
    }

    const dellBook = (book) => {

        let myArray = ordersBasket;
        let myIndex = myArray.indexOf(book);
        if (myIndex !== -1) {
            myArray.splice(myIndex, 1);
        }
        setOrderBasket(myArray.map(book => {
            return book
        }))
        setOrderPrice(ordersPrice - book.price)
    }


    return (<div className='wrapper'>
        <div className='app'>
            <div className='app_body'>
                <div>
                    <BookFilter order={orderBy} sortBooks={sortBooks} filterBooks={filterBooks}
                                allBooksData={allBooksData}/>
                </div>
                {!loading ? booksData.map(book => (<Book totalPrice={totalPrice} key={book.id} book={book}/>)) :
                    <h3>Loading...</h3>}
            </div>
            <div className='app_cart'>
                <Cart ordersPrice={ordersPrice}/>
                {ordersBasket.map(book => (<Basket dellBook={dellBook} book={book}/>))}
            </div>
        </div>
    </div>);
}

export default App;
