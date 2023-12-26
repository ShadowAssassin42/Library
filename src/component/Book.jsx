import { Link } from "react-router-dom";

function Book({ id, title, author, country, genre, original_lang, current_lang, year, publisher, publishing_year, translator, pages, series, volume, age_restriction, cover, description, artist, read_status, setBooks }) {

    const status = ["не прочитано", "запланировано", "прочитано"]

    const changeStatus = () => {
        let new_status = status[(status.indexOf(read_status) + 1) % status.length];
        console.log((status.indexOf(read_status) + 1) % status.length);
        let books = JSON.parse(localStorage.getItem("books" || ""));
        for (let i = 0; i < books.length; i++) {
            if (books[i].id === id) {
                books[i].read_status = new_status;
                console.log(new_status);
                break;
            }
        }
        setBooks(books);
        localStorage.setItem("books", JSON.stringify(books));
    }

    return (
        <div id={id} className="book">
            <div className="image">
                <img src={cover} className=".img" alt="" />
            </div>
            <div className="text">
                <p className="title">{title}</p>
                <p><strong>Автор(ы): </strong>{author}</p>
                <p><strong>Возрастное ограничение: </strong>{age_restriction}</p>
                <p><strong>Год написания: </strong>{year}</p>
                <p><strong>Жанры: </strong>{genre.join(", ")}</p>
                <p><strong>Страна: </strong>{country}</p>
                <p><strong>Язык оригинала: </strong>{original_lang}</p>
                {
                    publisher !== "" && <p>
                        <strong>Издатель: </strong>{publisher}
                    </p>

                }
                {
                    publishing_year !== "" && <p>
                        <strong>Год издания: </strong>{publishing_year}
                    </p>
                }
                <p><strong>Язык издания: </strong>{current_lang}</p>
                {
                    pages !== "" && <p>
                        <strong>Количество страниц: </strong>{pages}
                    </p>
                }
                {
                    series !== "" && <p>
                        <strong>Серия книг: </strong>{series}
                    </p>
                }
                {
                    volume !== "" && <p>
                        <strong>Том: </strong>{volume}
                    </p>
                }
                {
                    translator !== "" && <p>
                        <strong>Переводчик: </strong>{translator}
                    </p>
                }
                {
                    artist !== "" && <p>
                        <strong>Художник: </strong>{artist}
                    </p>
                }
                <p><strong>Описание: </strong>{description} <Link to="/oops">Подробнее...</Link></p>
            </div>
            <div className="sort">
                <span onClick={changeStatus}><p className="status">{read_status}</p></span>
            </div>
        </div>
    );
}

export default Book;