import { useState } from 'react';
import '../CSS/BookForm.css';
import { Link } from 'react-router-dom';

function BookForm() {

    const default_url = "https://cdn1.ozone.ru/s3/multimedia-x/6391435521.jpg";

    const [title, setTitle] = useState("");
    const [authors, setAuthors] = useState("");
    const [genres, setGenres] = useState([]);
    const [country, setCountry] = useState("");
    const [orig_lang, setOrigLang] = useState("");
    const [curr_lang, setCurrLang] = useState("");
    const [year, setYear] = useState("");
    const [isbn, setISBN] = useState("");
    const [publisher, setPublisher] = useState("");
    const [pub_year, setPubYear] = useState("");
    const [translator, setTranslator] = useState("");
    const [pages, setPages] = useState("");
    const [series, setSeries] = useState("");
    const [volume, setVolume] = useState("");
    const [age_rest, setAgeRest] = useState("");
    const [cover, setCover] = useState("");
    const [description, setDescription] = useState("");
    const [artist, setArtist] = useState("");

    const handleTitleChange = event => {
        setTitle(event.target.value);
    }
    const handleAuthorsChange = event => {
        setAuthors(event.target.value);
    }
    const handleGenresChange = event => {
        let options = event.target.options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected && !genres.includes(options[i].value)) {
                setGenres(previousState => [...previousState, options[i].value]);
            }
            if (!options[i].selected && genres.includes(options[i].value)) {
                setGenres(genres.filter(filter => (filter !== options[i].value)));
            }
        }
    }
    const handleCountryChange = event => {
        let options = event.target.options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                setCountry(options[i].value);
            }
        }
    }
    const handleOrigLangChange = event => {
        let options = event.target.options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                setOrigLang(options[i].value);
            }
        }
    }
    const handleCurrLangChange = event => {
        let options = event.target.options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                setCurrLang(options[i].value);
            }
        }
    }
    const handleYearChange = event => {
        setYear(event.target.value);
    }
    const handleIsbnChange = event => {
        setISBN(event.target.value);
    }
    const handlePublisherChange = event => {
        setPublisher(event.target.value);
    }
    const handlePubYearChange = event => {
        setPubYear(event.target.value);
    }
    const handleTranslatorChange = event => {
        setTranslator(event.target.value);
    }
    const handlePagesChange = event => {
        setPages(event.target.value);
    }
    const handleSeriesChange = event => {
        setSeries(event.target.value);
    }
    const handleVolumeChange = event => {
        setVolume(event.target.value);
    }
    const handleAgeRestChange = event => {
        let options = event.target.options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                setAgeRest(options[i].value);
            }
        }
    }
    const handleCoverChange = event => {
        setCover(event.target.value);
    }
    const handleDescriptionChange = event => {
        setDescription(event.target.value);
    }
    const handleArtistChange = event => {
        setArtist(event.target.value);
    }

    const BookInstance = (id, title, author, genre, country, original_lang, current_lang, year, publisher, publishing_year, translator, pages, series, volume, age_restriction, cover, description, artist, read_status) => {
        return {
            id: id,
            title: title,
            author: author,
            genre: genre,
            country: country,
            original_lang: original_lang,
            current_lang: current_lang,
            year: year,
            publisher: publisher,
            publishing_year: publishing_year,
            translator: translator,
            pages: pages,
            series: series,
            volume: volume,
            age_restriction: age_restriction,
            cover: cover,
            description: description,
            artist: artist,
            read_status: read_status
        }
    }

    const addBook = () => {
        if (cover === "") {
            setCover(default_url);
        }
        if (title !== "" && authors !== "" && genres.length > 0 && country !== "" && orig_lang !== "" && curr_lang !== "" && year !== "" && isbn.match("[0-9]{3}[-][0-9]{1}[-][0-9]{4}[-][0-9]{4}[-][0-9]{1}") && age_rest !== "" && description !== "") {
            let book = BookInstance(isbn, title, authors, genres, country, orig_lang, curr_lang, year, publisher, pub_year, translator, pages, series, volume, age_rest, cover, description, artist, "не прочитано");
            let books = JSON.parse(localStorage.getItem("books" || ""));
            books = books.concat(book);
            localStorage.setItem("books", JSON.stringify(books));
        }
    }

    return (
        <div className="container2">
            <fieldset>
                <legend>
                    <h1>Добавить книгу в каталог</h1>
                </legend>

                <form action="/">
                    <p>
                        <label>Название книги: </label>
                        <input type="text" name="title" id="title" placeholder="Благословение небожителей" onChange={handleTitleChange} required />
                    </p>

                    <p>
                        <label>Автор(ы): </label>
                        <input type="text" name="author" placeholder="Мосян Тунсю" onChange={handleAuthorsChange} required />
                    </p>

                    <p>
                        <label>Жанр(ы): </label>
                        <select name="genres" id="genres" onChange={handleGenresChange} multiple required>
                            <option value="боевик">боевик</option>
                            <option value="детектив">детектив</option>
                            <option value="драма">драма</option>
                            <option value="классика">классика</option>
                            <option value="комедия">комедия</option>
                            <option value="криминал">криминал</option>
                            <option value="литрпг">литрпг</option>
                            <option value="психологический">психологический</option>
                            <option value="романтика">романтика</option>
                            <option value="сянься">сянься</option>
                            <option value="трагедия">трагедия</option>
                            <option value="уся">уся</option>
                            <option value="философский">философский</option>
                            <option value="фэнтези">фэнтези</option>
                            <option value="юмор">юмор</option>
                        </select>
                    </p>

                    <p>
                        <label>Страна: </label>
                        <select name="country" id="country" onChange={handleCountryChange} defaultValue={""} required>
                            <option value="">--Пожалуйста, выберите страну--</option>
                            <option value="Китай">Китай</option>
                            <option value="Южная Корея">Южная Корея</option>
                            <option value="Япония">Япония</option>
                        </select>
                    </p>

                    <p>
                        <label>Язык оригинала: </label>
                        <select name="orig_language" id="orig_language" onChange={handleOrigLangChange} defaultValue={""} required>
                            <option value="">--Пожалуйста, выберите язык оригинала--</option>
                            <option value="китайский">китайский</option>
                            <option value="корейский">корейский</option>
                            <option value="японский">японский</option>
                        </select>
                    </p>

                    <p>
                        <label>Язык издания: </label>
                        <select name="curr_language" id="curr_language" onChange={handleCurrLangChange} defaultValue={""} required>
                            <option value="">--Пожалуйста, выберите язык издания--</option>
                            <option value="английский">английский</option>
                            <option value="русский">русский</option>
                            <option value="китайский">китайский</option>
                            <option value="корейский">корейский</option>
                            <option value="японский">японский</option>
                        </select>
                    </p>

                    <p>
                        <label>Год написания: </label>
                        <input type="number" name="year" id="year" placeholder="2017" onChange={handleYearChange} required onKeyDown={(event) => {
                            if (event.key === "e" || event.key === "E") {
                                event.preventDefault();
                            }
                        }} />
                    </p>

                    <p>
                        <label>ISBN: </label>
                        <input type="text" name="isbn" id="isbn" onChange={handleIsbnChange} required
                            pattern="[0-9]{3}[\-\d][0-9]{1}[\-\d][0-9]{4}[\-\d][0-9]{4}[\-\d][0-9]{1}"
                            placeholder="978-0-0293-6934-0" />
                    </p>

                    <p>
                        <label>Издательство (если известно): </label>
                        <input type="text" name="publisher" id="publisher" onChange={handlePublisherChange} placeholder="Эксмо" />
                    </p>

                    <p>
                        <label>Год издания (если известно): </label>
                        <input type="number" name="publishing_year" id="publishing_year" onChange={handlePubYearChange} onKeyDown={(event) => {
                            if (event.key === "e" || event.key === "E") {
                                event.preventDefault();
                            }
                        }} placeholder="2022" />
                    </p>

                    <p>
                        <label>Переводчик (если известен): </label>
                        <input type="text" name="translator" id="translator" onChange={handleTranslatorChange} placeholder="YouNet Translate" />
                    </p>

                    <p>
                        <label>Количество страниц (если известно): </label>
                        <input type="number" name="pages" id="pages" onChange={handlePagesChange} onKeyDown={(event) => {
                            if (event.key === "e" || event.key === "E") {
                                event.preventDefault();
                            }
                        }} placeholder="416" />
                    </p>

                    <p>
                        <label>Серия (если есть): </label>
                        <input type="text" name="series" id="series" onChange={handleSeriesChange} placeholder="Благословение небожителей" />
                    </p>

                    <p>
                        <label>Том (если есть): </label>
                        <input type="number" name="volume" onChange={handleVolumeChange} onKeyDown={(event) => {
                            if (event.key === "e" || event.key === "E") {
                                event.preventDefault();
                            }
                        }} id="volume" placeholder="1" />
                    </p>

                    <p>
                        <label>Возрастное ограничение: </label>
                        <select name="age_restriction" id="age_restriction" onChange={handleAgeRestChange} defaultValue={""} required>
                            <option value="">--Пожалуйста, выберите возрастное ограничение--</option>
                            <option value="6+">6+</option>
                            <option value="12+">12+</option>
                            <option value="16+">16+</option>
                            <option value="18+">18+</option>
                        </select>
                    </p>

                    <p>
                        <label>Обложка: </label>
                        <input type="url" name="cover_url" id="cover_url" onChange={handleCoverChange} placeholder="url" />
                    </p>

                    <p>
                        <label>Описание: </label>
                        <textarea name="description" id="description" onChange={handleDescriptionChange} required></textarea>
                    </p>

                    <p>
                        <label>Художник (если есть): </label>
                        <input type="text" name="artist" id="artist" onChange={handleArtistChange} placeholder="антейку" />
                    </p>

                    <input type="submit" onClick={addBook} className="btn" />
                    <Link to="/"><button className="btn">К каталогу</button></Link>
                </form>
            </fieldset>
        </div>
    );
}
export default BookForm;