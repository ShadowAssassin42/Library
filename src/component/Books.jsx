import Book from "./Book";

function Books({ books, setBooks }) {
    return (
        <div>
            {
                books.map((book) => (<Book key={book.id} id={book.id} title={book.title} author={book.author} country={book.country} genre={book.genre} original_lang={book.original_lang} current_lang={book.current_lang} year={book.year} publisher={book.publisher} publishing_year={book.publishing_year} translator={book.translator} pages={book.pages} series={book.series} volume={book.volume} age_restriction={book.age_restriction} cover={book.cover} description={book.description} artist={book.artist} read_status={book.read_status} setBooks={setBooks}/>))
            }
        </div>
    );
}

export default Books;