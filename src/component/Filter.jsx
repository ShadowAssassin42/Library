import { useState } from "react";
import { Link } from "react-router-dom";

function Filter({ setBooks }) {
    const [ages, setAges] = useState([]);
    const [countries, setCountries] = useState([]);
    const [curr_languages, setCurrLanguages] = useState([]);
    const [genres, setGenres] = useState([]);

    const filter = () => {
        let books = JSON.parse(localStorage.getItem("books" || ""));
        books = books.filter(book => {
            if (ages.length > 0) {
                if (ages.includes(book.age_restriction)) {
                    return true;
                }
                return false;
            }
            return true;
        });
        books = books.filter(book => {
            if (countries.length > 0) {
                if (countries.includes(book.country)) {
                    return true;
                }
                return false;
            }
            return true;
        });
        books = books.filter(book => {
            if (curr_languages.length > 0) {
                if (curr_languages.includes(book.current_lang)) {
                    return true;
                }
                return false;
            }
            return true;
        });
        books = books.filter(book => {
            let count = 0;
            if (genres.length > 0) {
                for (let i = 0; i < genres.length; i++) {
                    for (let j = 0; j < book.genre.length; j++) {
                        if (genres[i] === book.genre[j]) {
                            count++;
                        }
                    }
                }
                if (count !== genres.length) {
                    return false;
                }
                return true;
            }
            return true;
        })
        setBooks(books);
    }

    const handleAgeCheckbox = (event) => {
        if (event.target.checked) {
            if (!ages.includes(event.target.value)) {
                setAges(previousState => [...previousState, event.target.value]);
            }
        }
        if (!event.target.checked) {
            if (ages.includes(event.target.value)) {
                setAges(ages.filter(filter => (filter !== event.target.value)));
            }
        }
    }

    const handleCountryCheckbox = (event) => {
        if (event.target.checked) {
            if (!countries.includes(event.target.value)) {
                setCountries(previousState => [...previousState, event.target.value]);
            }
        }
        if (!event.target.checked) {
            if (countries.includes(event.target.value)) {
                setCountries(countries.filter(filter => (filter !== event.target.value)));
            }
        }
    }

    const handleCurrLangCheckbox = (event) => {
        if (event.target.checked) {
            if (!curr_languages.includes(event.target.value)) {
                setCurrLanguages(previousState => [...previousState, event.target.value]);
            }
        }
        if (!event.target.checked) {
            if (curr_languages.includes(event.target.value)) {
                setCurrLanguages(curr_languages.filter(filter => (filter !== event.target.value)));
            }
        }
    }

    const handleGenresCheckbox = (event) => {
        if (event.target.checked) {
            if (!genres.includes(event.target.value)) {
                setGenres(previousState => [...previousState, event.target.value]);
            }
        }
        if (!event.target.checked) {
            if (genres.includes(event.target.value)) {
                setGenres(genres.filter(filter => (filter !== event.target.value)));
            }
        }
    }

    return (
        <div>
            <Link to="/bookForm"><button className="btn">Добавить книгу</button></Link>
            <fieldset className="field">
                <legend>Фильтрация</legend>
                <fieldset id="country" className="in_field">
                    <legend>По стране</legend>
                    <p><label htmlFor="China">
                        <input type="checkbox" name="country" onChange={handleCountryCheckbox} id="China" value="Китай" />Китай</label>
                    </p>
                    <p><label htmlFor="Japan"><input type="checkbox" onChange={handleCountryCheckbox} name="country" id="Japan" value="Япония" />Япония</label>
                    </p>
                    <p><label htmlFor="SouthKorea"><input type="checkbox" onChange={handleCountryCheckbox} name="country" id="SouthKorea"
                        value="Южная Корея" />Южная
                        Корея</label></p>
                </fieldset>

                <fieldset id="curr_lang" className="in_field">
                    <legend>По языку издания</legend>
                    <p><label htmlFor="English"><input type="checkbox" onChange={handleCurrLangCheckbox} name="curr_lang" id="English"
                        value="английский" />Английский</label></p>
                    <p><label htmlFor="Russian"><input type="checkbox" onChange={handleCurrLangCheckbox} name="curr_lang" id="Russian"
                        value="русский" />Русский</label></p>
                    <p><label htmlFor="Chinese"><input type="checkbox" onChange={handleCurrLangCheckbox} name="curr_lang" id="Chinese"
                        value="китайский" />Китайский</label></p>
                    <p><label htmlFor="Korean"><input type="checkbox" onChange={handleCurrLangCheckbox} name="curr_lang" id="Korean"
                        value="корейский" />Корейский</label></p>
                    <p><label htmlFor="Japanese"><input type="checkbox" onChange={handleCurrLangCheckbox} name="curr_lang" id="Japanese"
                        value="японский" />Японский</label></p>
                </fieldset>

                <fieldset id="genres" className="in_field">
                    <legend id="genres">По жанрам</legend>
                    <div className="genres">
                        <p><label htmlFor="action"><input type="checkbox" onChange={handleGenresCheckbox} name="genres" id="action"
                            value="боевик" />Боевик</label></p>
                        <p><label htmlFor="detective"><input type="checkbox" onChange={handleGenresCheckbox} name="genres" id="detective"
                            value="детектив" />Детектив</label>
                        </p>
                        <p><label htmlFor="drama"><input type="checkbox" onChange={handleGenresCheckbox} name="genres" id="drama"
                            value="драма" />Драма</label>
                        </p>
                        <p><label htmlFor="classics"><input type="checkbox" onChange={handleGenresCheckbox} name="genres" id="classics"
                            value="классика" />Классика</label></p>
                        <p><label htmlFor="criminal"><input type="checkbox" onChange={handleGenresCheckbox} name="genres" id="criminal"
                            value="криминал" />Криминал</label></p>
                        <p><label htmlFor="litprg"><input type="checkbox" onChange={handleGenresCheckbox} name="genres" id="litprg"
                            value="литрпг" />ЛитРПГ</label></p>
                        <p><label htmlFor="psychological"><input type="checkbox" onChange={handleGenresCheckbox} name="genres" id="psychological"
                            value="психологический" />Психологический</label></p>

                    </div>
                    <div className="genres">
                        <p><label htmlFor="romance"><input type="checkbox" onChange={handleGenresCheckbox} name="genres" id="romance"
                            value="романтика" />Романтика</label></p>
                        <p><label htmlFor="xianxia"><input type="checkbox" onChange={handleGenresCheckbox} name="genres" id="xianxia"
                            value="сянься" />Сянься</label></p>
                        <p><label htmlFor="tragedy"><input type="checkbox" onChange={handleGenresCheckbox} name="genres" id="tragedy"
                            value="трагедия" />Трагедия</label></p>
                        <p><label htmlFor="wuxia"><input type="checkbox" onChange={handleGenresCheckbox} name="genres" id="wuxia" value="уся" />Уся</label>
                        </p>
                        <p><label htmlFor="horror"><input type="checkbox" onChange={handleGenresCheckbox} name="genres" id="horror"
                            value="ужасы" />Ужасы</label></p>
                        <p><label htmlFor="philosophical"><input type="checkbox" onChange={handleGenresCheckbox} name="genres" id="philosophical"
                            value="философский" />Философский</label></p>
                        <p><label htmlFor="fantasy"><input type="checkbox" onChange={handleGenresCheckbox} name="genres" id="fantasy"
                            value="фэнтези" />Фэнтези</label></p>
                        <p><label htmlFor="humor"><input type="checkbox" onChange={handleGenresCheckbox} name="genres" id="humor" value="юмор" />Юмор</label>
                        </p>

                    </div>
                </fieldset>

                <fieldset id="ages" className="in_field">
                    <legend id="ages">По возрастному рейтингу</legend>
                    <p><label htmlFor="18+"><input type="checkbox" onChange={handleAgeCheckbox} name="ages" id="18+" value="18+" />18+</label></p>
                    <p><label htmlFor="16+"><input type="checkbox" name="ages" onChange={handleAgeCheckbox} id="16+" value="16+" />16+</label></p>
                    <p><label htmlFor="12+"><input type="checkbox" name="ages" onChange={handleAgeCheckbox} id="12+" value="12+" />12+</label></p>
                    <p><label htmlFor="6+"><input type="checkbox" name="ages" onChange={handleAgeCheckbox} id="6+" value="6+" />6+</label></p>
                </fieldset>
                <p><input type="button" onClick={filter} className="btn" value="Фильтровать" /></p>
            </fieldset>
        </div>

    );
}

export default Filter;