import React, {SyntheticEvent, useState} from "react";
import {geocode} from "../utils/geocoding";
import {Btn} from "./common/Btn";
import {apiUrl} from "../config/api";
import styled from "styled-components";


export const AddForm = () => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');
    const [form, setForm] = useState({
        name: '',
        description: '',
        price: 0,
        url: '',
        address: '',
    });

    const saveAd = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);

        try {

            const {lat, lon} = await geocode(form.address);

            const res = await fetch(`${apiUrl}/ad`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                    lat,
                    lon,
                }),
            });
            const data = await res.json();

            setId(data.id);

        } finally {
            setLoading(false);
        }
    };

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    if (loading) {
           return <Wrapper>
               <h1>Trwa dodawanie ogłoszenia...</h1>
           </Wrapper>

    }

    if (id) {
       return <Wrapper>
            <h1>Twoje ogłoszenie "{form.name}" zostało poprawnie dodane do serwisu pod ID: {id}.</h1>
            <Btn text="Wróć do map" to="/" />
        </Wrapper>
    }

    return (
            <FORM onSubmit={saveAd}>
                <h1>Dodaj ogłoszenie</h1>
                <p>
                    <label>
                        Nazwa: <br/>
                        <input
                            type="text"
                            name="name"
                            required
                            maxLength={99}
                            value={form.name}
                            onChange={e => updateForm('name', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Opis: <br/>
                        <textarea
                            name="description"
                            maxLength={999}
                            value={form.description}
                            onChange={e => updateForm('description', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Cena: <br/>
                        <input
                            type="number"
                            name="price"
                            required
                            maxLength={99}
                            value={form.price}
                            onChange={e => updateForm('price', Number(e.target.value))}
                        /> <br/>
                        <small>Pozostaw zero w polu, aby nie wyświetlać ceny.</small>
                    </label>
                </p>
                <p>
                    <label>
                        Adres www ogłoszenia: <br/>
                        <input
                            type="url"
                            name="url"
                            maxLength={99}
                            value={form.url}
                            placeholder="https://www.olx.pl"
                            onChange={e => updateForm('url', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Lokalizacja: <br/>
                        <input
                            type="text"
                            name="address"
                            required
                            value={form.address}
                            placeholder="Zielona 38, Jastrzębie-Zdrój"
                            onChange={e => updateForm('address', e.target.value)}
                        />
                    </label>
                </p>
                <Btn text="Zapisz"/>
            </FORM>

    );
};

const FORM = styled.form`
  width: 60%;
  margin: 0 auto;
  height: calc(100% - 1.6rem);

  h1 {
    width: 102%;
    margin: 1rem 0;
    text-align: center;
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
    padding: 0.3rem 0;
    border-radius: 0.3rem;
  }

  .error {
    background-color: ${(props) => props.theme.colors.red};
  }

  p {
    margin-bottom: 0.5rem;
  }

  input, textarea {
    width: 100%;
    margin-top: 0.2rem;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    padding: 0.3rem 0.5rem;
  }

  small {
    font-size: x-small;
  }

  button {
    width: 102%;
    margin-top: 1rem;
    border-radius: 0.3rem;
  }

  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: center;

  h1 {
    margin: 1rem 0;
    text-align: center;
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
    padding: 0.5rem 0;
    border-radius: 0.3rem;
  }

  .Btn {
    text-align: center;
  }

  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;