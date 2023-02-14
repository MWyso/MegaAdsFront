import React, {FormEvent, useContext, useState} from 'react';
import { Btn } from '../common/Btn';
import './Header.css';
import {SearchContext} from "../../contexts/search.context";
import { Logo } from '../Logo/Logo';

export const Header = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputVal, setInputVal] = useState(search);

    const setSearchFromLocalState = (e: FormEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    };


    return (
        <header>
            <Logo/>
            <Btn to="/add" text="Dodaj ogłoszenie"/>
            <form className="search" onSubmit={setSearchFromLocalState}>
                <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/> <Btn text="Szukaj"/>
            </form>
        </header>
    );
};