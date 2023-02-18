import React, {useState} from 'react';
import './App.css';
import {Header} from './components/Header';
import {Map} from './components/Map';
import { SearchContext } from './contexts/search.context';
import {Route, Routes} from "react-router-dom";
import { AddForm } from './components/AddForm';
import { Theme } from './components/Theme';

export const App = () => {
    const [search, setSearch] = useState('');

    return (
        <>
            <Theme>
                <SearchContext.Provider value={{search, setSearch}}>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Map/>}/>
                        <Route path="/add" element={<AddForm/>}/>
                    </Routes>
                </SearchContext.Provider>
            </Theme>
        </>
    );
};

