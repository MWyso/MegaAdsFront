import React, {FormEvent, SyntheticEvent, useContext, useState} from 'react';
import { Btn } from '../common/Btn';
import './Header.css';
import {SearchContext} from "../../contexts/search.context";

export const Header = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputVal, setInputVal] = useState(search);

    const setSearchFromLocalState = (e: FormEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    };


    return (
        <header>
            <h1>
                <strong>Mega </strong> Ogłoszenia
            </h1>
            <Btn text="Dodaj ogłoszenie"/>
            <form className="search" onSubmit={setSearchFromLocalState}>
                <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/> <Btn text="Szukaj"/>
            </form>
        </header>
    );
};