import React, {FormEvent, useContext, useState} from 'react';
import {Btn} from './common/Btn';
import {SearchContext} from "../contexts/search.context";
import styled from "styled-components";
import {Link} from "react-router-dom";

export const Header = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputVal, setInputVal] = useState(search);

    const setSearchFromLocalState = (e: FormEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    };


    return (
        <HeaderWrapper>
            <Logo>
                <Link className="logo-link" to="/">
                    <span className="bold">Mega</span> <span className="light">ogłoszenia</span>
                </Link>
            </Logo>
                <div className="container">
                    <Btn to="/add" text="+" tittle="Dodaj ogłoszenie"/>
                </div>
            <Search>
                <form className="search" onSubmit={setSearchFromLocalState}>
                    <input
                        type="text"
                        className="searchTerm"
                        placeholder="Wyszukaj..."
                        value={inputVal}
                        onChange={e => setInputVal(e.target.value)}
                    />
                    <button type="submit" className="searchButton" title="Wyszukaj">🔍</button>
                </form>
            </Search>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.colors.blue};
  padding: 0.3rem 1rem;
  height: 2.5rem;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .container {
    width: calc(100% - 70% - 2rem);
    display: flex;
    justify-content: center;
  }
`;

const Logo = styled.h1`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.blue};
  width: 20%;

  .logo-link {
    color: white;
    text-decoration: none;
  }

  .bold {
    font-weight: 800;
  }

  .light {
    font-weight: 200;
  }

  @media screen and (max-width: 380px) {
    font-size: 1rem;
  }
`;

const Search = styled.div`
  height: 1.5rem;
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: flex-end;

  .search {
    display: flex;
  }

  .searchTerm {
    width: 100%;
    border: 3px solid ${(props) => props.theme.colors.green};
    border-right: none;
    padding: 4px;
    border-radius: 5px 0 0 5px;
    outline: none;
  }

  .searchButton {
    padding: 0 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.green};
    background: ${(props) => props.theme.colors.green};
    text-align: center;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
`;