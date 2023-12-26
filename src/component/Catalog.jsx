import Books from './Books';
import Filter from './Filter';
import { useState } from 'react';
import { useEffect } from 'react';
import '../CSS/Catalog.css';

function Catalog() {
    // localStorage.clear();

    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("books") === null) {
            fetch("https://645c8c60250a246ae307730e.mockapi.io/books")
                .then(res => res.json())
                .then(data => {
                    setBooks(data);
                    localStorage.setItem("books", JSON.stringify(data));
                });
        }
        else {
            setBooks(JSON.parse(localStorage.getItem("books" || "")));
        }
    }, []);
    return (
        <div className='container1'>
            <div id='allBooks'>
                <Books books={books} setBooks={setBooks} />
            </div>
            <div id='filter'>
                <Filter setBooks={setBooks} />
            </div>
        </div>
    );
}

export default Catalog;